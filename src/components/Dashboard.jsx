import { useMemo } from 'react'

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white rounded-lg border border-amber-200 p-5 shadow">
      <p className="text-sm text-stone-600">{label}</p>
      <p className="text-3xl font-extrabold text-stone-900">{value}</p>
      {sub && <p className="text-xs text-stone-600 mt-1">{sub}</p>}
    </div>
  )
}

function Dashboard() {
  // Demo data for today across mandals
  const visits = [
    { mandal: 'Guntur East', villages: 2, children: 60, elders: 20 },
    { mandal: 'Guntur West', villages: 1, children: 30, elders: 12 },
    { mandal: 'Mangalagiri', villages: 1, children: 25, elders: 10 },
    { mandal: 'Tenali', villages: 1, children: 28, elders: 8 },
  ]

  const totals = useMemo(() => {
    const out = visits.reduce((acc, v) => {
      acc.villages += v.villages
      acc.children += v.children
      acc.elders += v.elders
      return acc
    }, { villages: 0, children: 0, elders: 0 })
    return { ...out, people: out.children + out.elders }
  }, [visits])

  return (
    <section id="dashboard" className="bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Daily Dashboard</h2>
        <p className="mt-2 text-stone-700">Overview of outreach across Guntur District mandals. Connect to backend to persist and analyze.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Villages Visited" value={totals.villages} />
          <StatCard label="Children Taught" value={totals.children} />
          <StatCard label="Elders Reached" value={totals.elders} />
          <StatCard label="Total People" value={totals.people} />
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full text-left border border-amber-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-amber-200/60 text-stone-800">
              <tr>
                <th className="px-4 py-3">Mandal</th>
                <th className="px-4 py-3">Villages</th>
                <th className="px-4 py-3">Children</th>
                <th className="px-4 py-3">Elders</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((v) => (
                <tr key={v.mandal} className="border-t border-amber-200/60">
                  <td className="px-4 py-3">{v.mandal}</td>
                  <td className="px-4 py-3">{v.villages}</td>
                  <td className="px-4 py-3">{v.children}</td>
                  <td className="px-4 py-3">{v.elders}</td>
                  <td className="px-4 py-3 font-semibold">{v.children + v.elders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Dashboard

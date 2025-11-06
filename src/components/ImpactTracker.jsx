import { useEffect, useState } from 'react'

function ImpactTracker() {
  const [todayVillages, setTodayVillages] = useState(5)
  const [peopleTaught, setPeopleTaught] = useState(0)

  useEffect(() => {
    // Simple animated counter for demo
    let p = 0
    const target = 150
    const id = setInterval(() => {
      p += 5
      if (p >= target) {
        p = target
        clearInterval(id)
      }
      setPeopleTaught(p)
    }, 60)
    return () => clearInterval(id)
  }, [])

  const sampleVillages = [
    { name: 'Village A', children: 20, elders: 10 },
    { name: 'Village B', children: 30, elders: 15 },
    { name: 'Village C', children: 25, elders: 12 },
    { name: 'Village D', children: 35, elders: 18 },
    { name: 'Village E', children: 22, elders: 8 },
  ]

  return (
    <section className="bg-amber-100/70 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Daily Outreach</h2>
        <p className="mt-2 text-stone-700">We visit five villages every day. Here is a snapshot of today's impact.</p>

        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-amber-200 p-6 shadow text-center">
            <p className="text-sm text-stone-600">Villages Today</p>
            <p className="text-4xl font-extrabold text-stone-900">{todayVillages}</p>
          </div>
          <div className="bg-white rounded-lg border border-amber-200 p-6 shadow text-center">
            <p className="text-sm text-stone-600">People Taught</p>
            <p className="text-4xl font-extrabold text-stone-900">{peopleTaught}</p>
          </div>
          <div className="bg-white rounded-lg border border-amber-200 p-6 shadow text-center">
            <p className="text-sm text-stone-600">Focus</p>
            <p className="text-xl font-bold text-stone-900">Ethics & Values</p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full text-left border border-amber-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-amber-200/60 text-stone-800">
              <tr>
                <th className="px-4 py-3">Village</th>
                <th className="px-4 py-3">Children</th>
                <th className="px-4 py-3">Elders</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {sampleVillages.map(v => (
                <tr key={v.name} className="border-t border-amber-200/60">
                  <td className="px-4 py-3">{v.name}</td>
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

export default ImpactTracker

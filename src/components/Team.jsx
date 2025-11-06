function Team() {
  const people = [
    { name: 'Nithin', role: 'CEO', email: 'nithin@naitikafoundations.edu.in' },
    { name: 'Aishwarya', role: 'Technical Lead', email: 'aishwarya@naitikafoundations.edu.in' },
    { name: 'Sunandha', role: 'Marketing Lead', email: 'sunandha@naitikafoundations.edu.in' },
    { name: 'Mohan Teja', role: 'Community Manager', email: 'mohanteja@naitikafoundations.edu.in' },
    { name: 'Sahith', role: 'Operations Manager', email: 'sahith@naitikafoundations.edu.in' },
  ]

  return (
    <section id="team" className="bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Our Team</h2>
        <p className="mt-2 text-stone-700">Dedicated educators and community builders bringing values-based learning to villages.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="bg-white rounded-lg border border-amber-200 p-5 shadow">
              <div className="h-12 w-12 rounded-full bg-amber-700 text-amber-50 flex items-center justify-center font-bold text-lg">
                {p.name.split(' ').map(w => w[0]).join('')}
              </div>
              <h3 className="mt-3 font-semibold text-stone-900">{p.name}</h3>
              <p className="text-sm text-stone-700">{p.role}</p>
              <a className="mt-2 inline-block text-amber-800 underline underline-offset-4" href={`mailto:${p.email}`}>{p.email}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

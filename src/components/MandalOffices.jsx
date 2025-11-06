function MandalOffices() {
  // Representative set of mandals in/around Guntur District for demo
  const mandals = [
    {
      name: 'Guntur East',
      address: 'Naitika Office, Brodipet, Guntur, AP 522002',
      phone: '+91-8643-000-111',
      email: 'east@guntur.naitika.org',
      center: { lat: 16.3067, lon: 80.4365 },
    },
    {
      name: 'Guntur West',
      address: 'Naitika Office, Lakshmipuram, Guntur, AP 522007',
      phone: '+91-8643-000-112',
      email: 'west@guntur.naitika.org',
      center: { lat: 16.3067, lon: 80.3865 },
    },
    {
      name: 'Mangalagiri',
      address: 'Naitika Office, Main Road, Mangalagiri, AP 522503',
      phone: '+91-8643-000-121',
      email: 'mangalagiri@naitika.org',
      center: { lat: 16.434, lon: 80.568 },
    },
    {
      name: 'Tenali',
      address: 'Naitika Office, Gandhinagar, Tenali, AP 522201',
      phone: '+91-8643-000-131',
      email: 'tenali@naitika.org',
      center: { lat: 16.2428, lon: 80.6400 },
    },
    {
      name: 'Ponnur',
      address: 'Naitika Office, Market Rd, Ponnur, AP 522124',
      phone: '+91-8643-000-141',
      email: 'ponnur@naitika.org',
      center: { lat: 16.0667, lon: 80.5667 },
    },
    {
      name: 'Amaravati',
      address: 'Naitika Office, Velagapudi, Amaravati, AP 522503',
      phone: '+91-8643-000-151',
      email: 'amaravati@naitika.org',
      center: { lat: 16.540, lon: 80.515 },
    },
  ]

  const makeMap = (lat, lon) => {
    const delta = 0.06
    const bbox = `${lon - delta}%2C${lat - delta}%2C${lon + delta}%2C${lat + delta}`
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`
  }

  return (
    <section id="offices" className="bg-amber-100/60 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Our Mandal Offices — Guntur District, Andhra Pradesh</h2>
        <p className="mt-2 text-stone-700">Each office coordinates daily visits to nearby Government Schools for values-based education.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {mandals.map((m) => (
            <div key={m.name} className="bg-white rounded-lg border border-amber-200 overflow-hidden shadow">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">{m.name}</h3>
                <p className="text-sm text-stone-700 mt-1">{m.address}</p>
                <div className="mt-2 text-sm text-stone-700">
                  <p>Phone: <span className="font-medium">{m.phone}</span></p>
                  <p>Email: <a className="underline underline-offset-4 text-amber-800" href={`mailto:${m.email}`}>{m.email}</a></p>
                </div>
              </div>
              <iframe
                title={`${m.name} office map`}
                className="w-full h-56 border-t border-amber-200"
                src={makeMap(m.center.lat, m.center.lon)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MandalOffices

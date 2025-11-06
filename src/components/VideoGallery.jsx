function VideoGallery() {
  const categories = [
    {
      title: 'Ethics for Children',
      desc: 'Short, animated stories about kindness, honesty, and respect.',
      videos: [
        { title: 'Kindness in Action', src: 'https://www.youtube.com/embed/1osv0G1Ha-c' },
        { title: 'Honesty Matters', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      ],
    },
    {
      title: 'Human Values for Elders',
      desc: 'Community well-being, intergenerational respect, and leadership.',
      videos: [
        { title: 'Community Bonds', src: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
        { title: 'Leadership by Example', src: 'https://www.youtube.com/embed/9bZkp7q19f0' },
      ],
    },
  ]

  return (
    <section id="videos" className="bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Lesson Videos</h2>
        <p className="mt-2 text-stone-700">Explore what we teach each day: ethics, human values, and practical life skills.</p>

        <div className="mt-8 space-y-10">
          {categories.map((cat) => (
            <div key={cat.title} className="">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900">{cat.title}</h3>
                  <p className="text-stone-700">{cat.desc}</p>
                </div>
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                {cat.videos.map((v) => (
                  <div key={v.title} className="bg-white rounded-lg border border-amber-200 shadow overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={v.src}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="px-4 py-3 text-sm text-stone-800">{v.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoGallery

import VideoGallery from './components/VideoGallery'
import ImpactTracker from './components/ImpactTracker'
import Team from './components/Team'
import HelpDesk from './components/HelpDesk'

function App() {
  return (
    <main id="main" className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 text-stone-900">
      {/* Hero / Intro */}
      <header className="bg-amber-50 text-stone-800" aria-label="Site header and introduction">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-stone-900 px-3 py-2 rounded shadow">Skip to content</a>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-amber-50 font-bold">NF</span>
            <div>
              <p className="text-lg font-bold tracking-wide">Naitika Foundations</p>
              <p className="text-xs text-stone-600">Ethics • Human Values • Community</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#videos" className="text-sm hover:text-amber-800 underline-offset-4 hover:underline">Videos</a>
            <a href="#team" className="text-sm hover:text-amber-800 underline-offset-4 hover:underline">Our Team</a>
            <a href="#help" className="text-sm hover:text-amber-800 underline-offset-4 hover:underline">Help Desk</a>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-10 md:py-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
                Bringing Ethics and Human Values to Every Village
              </h1>
              <p className="mt-4 text-stone-700 md:text-lg">
                Our teams visit 5 villages a day, teaching children and elders through stories, activities, and discussions. Explore our lessons, follow our journey, and reach out to collaborate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#videos" className="inline-flex items-center rounded bg-amber-700 text-amber-50 px-4 py-2 font-medium shadow hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600">Watch Lessons</a>
                <a href="#help" className="inline-flex items-center rounded border border-stone-300 text-stone-800 px-4 py-2 font-medium hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-amber-600">Contact Help Desk</a>
              </div>
            </div>

            <div className="rounded-lg border border-amber-200 overflow-hidden shadow" aria-label="Live tracking map">
              <iframe
                title="Live team tracking map"
                className="w-full h-64 md:h-80"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C12.0%2C82.0%2C18.0&layer=mapnik"
                loading="lazy"
              />
              <div className="bg-amber-100 px-4 py-3 text-sm text-stone-700">
                Live tracking preview. For full real-time updates, integrate with your team's GPS tracker.
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="content">
        <ImpactTracker />
        <VideoGallery />
        <Team />
        <HelpDesk />
      </div>

      <footer className="bg-stone-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Naitika Foundations. All rights reserved.</p>
          <div className="text-sm">
            Contact: <a className="underline underline-offset-4" href="mailto:naitikafoundations@edu.in">naitikafoundations@edu.in</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App

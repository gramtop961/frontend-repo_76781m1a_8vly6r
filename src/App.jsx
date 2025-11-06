import Header from './components/Header'
import ImpactTracker from './components/ImpactTracker'
import VideoGallery from './components/VideoGallery'
import MandalOffices from './components/MandalOffices'
import Dashboard from './components/Dashboard'
import Team from './components/Team'
import HelpDesk from './components/HelpDesk'
import Logo from './components/Logo'

function App() {
  return (
    <main id="main" className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 text-stone-900">
      <Header />

      <div id="content">
        <ImpactTracker />
        <VideoGallery />
        <MandalOffices />
        <Dashboard />
        <Team />
        <HelpDesk />
      </div>

      <footer className="bg-stone-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <p className="text-sm">© {new Date().getFullYear()} Naitika Foundations. All rights reserved.</p>
          </div>
          <div className="text-sm">
            Guntur District, Andhra Pradesh • Contact: <a className="underline underline-offset-4" href="mailto:naitikafoundations@edu.in">naitikafoundations@edu.in</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App

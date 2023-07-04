import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'
import DevToSection from './components/DevToSection'
import ExperienceSection from './components/ExperienceSection'
import GithubSection from './components/GithubSection'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {/* <Header /> */}
      <ContactSection />
      <AboutMeSection />
      <ExperienceSection />
      <DevToSection />
      <GithubSection />
    </main>
  )
}

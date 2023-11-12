import { defaultLocale } from '@/middleware'
import AboutMeSection from '../components/AboutMeSection'
import ContactSection from '../components/ContactSection'
import DevToSection from '../components/DevToSection'
import ExperienceSection from '../components/ExperienceSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import GithubSection from '../components/GithubSection'
import Header from '../components/Header'
import FooterSection from '../components/Footer'

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  if (!lang) {
    lang = defaultLocale
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Header language={lang} />
      <ContactSection language={lang} />
      <AboutMeSection language={lang} />
      <ExperienceSection language={lang} />
      <WorkExperienceSection language={lang} />
      <DevToSection language={lang} />
      <GithubSection language={lang} />
      <FooterSection />
    </main>
  )
}

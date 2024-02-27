import { LanguageProps } from '@/app/@types/language'
import GithubCard from './GithubCard'
import { t } from '@/app/translations/translation'

interface GithubApiReturn {
  id: number
  name: string
  description: string
  html_url: string
  languages_url: string
  languages?: string[]
}

async function getRepositories(username: string): Promise<GithubApiReturn[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      next: { revalidate: 300 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT as string}`,
      },
    },
  )

  const repositories = await response.json()
  const data = await Promise.all(
    repositories.reverse().map(async (repo: GithubApiReturn) => {
      const languagesResponse = await fetch(repo.languages_url)
      const languagesData = await languagesResponse.json()
      const languages = Object.keys(languagesData)
      return { ...repo, languages }
    }),
  )

  return data as GithubApiReturn[]
}

export default async function GithubSection({ language: lang }: LanguageProps) {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME as string
  const reposList = await getRepositories(username)

  return (
    <section className="my-8 flex w-full flex-col items-center justify-center gap-4 md:my-16">
      <h2
        className=" h-20 bg-gradient-to-br from-sky-500 to-amber-700 bg-clip-text text-center font-sans text-3xl font-extrabold
             text-transparent md:text-4xl lg:text-5xl"
      >
        {t[lang]?.git?.title}
      </h2>
      <div className="grid grid-cols-1 items-center justify-center gap-8 sm:p-2 md:p-8 lg:grid-cols-2 xlCards:grid-cols-3">
        {reposList.length > 0 ? (
          <>
            {reposList
              .slice(-9)
              .reverse()
              .map((repos) => {
                return (
                  <GithubCard
                    key={repos.id}
                    name={repos.name}
                    description={repos.description}
                    languages={repos.languages ?? []}
                    url={repos.html_url}
                  />
                )
              })}
          </>
        ) : (
          <p className="text-center text-lg font-bold">
            {t[lang]?.git?.noProjects}
          </p>
        )}
      </div>
    </section>
  )
}

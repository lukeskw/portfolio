import GithubCard from './GithubCard'

interface GithubApiReturn {
  id: number
  name: string
  description: string
  html_url: string
  languages_url: string
  languages?: string[]
  [key: string]: any
}

async function getRepositories(username: string): Promise<GithubApiReturn[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    { next: { revalidate: 300 } },
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

export default async function GithubSection() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME as string
  const reposList = await getRepositories(username)

  return (
    <section className="my-8 flex w-full flex-col items-center justify-center gap-4 md:my-16">
      <h2
        className=" h-20 bg-gradient-to-br from-slate-400
          via-slate-500 to-slate-700 bg-clip-text text-center font-sans text-3xl font-bold
             text-transparent md:text-4xl lg:text-5xl"
      >
        My Projects on Git
      </h2>
      <div className="grid grid-cols-1 items-center justify-center gap-8 sm:p-2 md:p-8 lg:grid-cols-2">
        {reposList.length > 0 ? (
          <>
            {reposList
              .slice(-6)
              .reverse()
              .map((repos, index) => {
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
            Não foram encontrados repositórios!
          </p>
        )}
      </div>
    </section>
  )
}

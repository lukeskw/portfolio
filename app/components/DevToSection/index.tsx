import ArticleCard from './ArticleCard'

interface DevToApiReturn {
  id: number
  title: string
  description: string
  url: string
  public_reactions_count: number
  published_at: string
  cover_image: string
  [key: string]: any
}

async function getArticles(username: string): Promise<DevToApiReturn[]> {
  const response = await fetch(
    `https://dev.to/api/articles?username=${username}`,
    { next: { revalidate: 300 } },
  )
  const data = await response.json()
  return data as DevToApiReturn[]
}

export default async function DevToSection() {
  const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME as string
  const articlesList = await getArticles(username)

  return (
    <section className="my-8 flex w-full flex-col items-center justify-center gap-4 md:my-16">
      <h2
        className=" h-20 bg-gradient-to-br from-slate-400
          via-slate-500 to-slate-700 bg-clip-text text-center font-sans text-3xl font-bold
             text-transparent md:text-4xl lg:text-5xl"
      >
        My Posts on Dev.to
      </h2>
      <div className="grid grid-cols-1 items-center justify-center gap-8 sm:p-2 md:p-8 lg:grid-cols-2 xl:grid-cols-3">
        {articlesList.length > 0 ? (
          <>
            {articlesList.slice(-6).map((article, index) => {
              return (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  publicationDate={article.published_at}
                  reactions={article.public_reactions_count}
                  url={article.url}
                  coverImage={article.cover_image}
                />
              )
            })}
          </>
        ) : (
          <p className="text-center text-lg font-bold">
            Não foram encontrados artigos!
          </p>
        )}
      </div>
    </section>
  )
}

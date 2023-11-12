import { LanguageProps } from '@/app/@types/language'
import ArticleCard from './ArticleCard'
import { t } from '@/app/translations/translation'

interface DevToApiReturn {
  id: number
  title: string
  description: string
  url: string
  public_reactions_count: number
  published_at: string
  cover_image: string
  [key: string]: object | string | number
}

async function getArticles(username: string): Promise<DevToApiReturn[]> {
  const response = await fetch(
    `https://dev.to/api/articles?username=${username}`,
    { next: { revalidate: 300 } },
  )
  const data = await response.json()
  return data as DevToApiReturn[]
}

export default async function DevToSection({ language: lang }: LanguageProps) {
  const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME as string
  const articlesList = await getArticles(username)

  return (
    <section className="my-8 flex w-full flex-col items-center justify-center gap-4 md:my-16">
      <h2
        className=" h-20 bg-gradient-to-br from-sky-500 to-amber-700 bg-clip-text text-center font-sans text-3xl font-extrabold
             text-transparent md:text-4xl lg:text-5xl"
      >
        {t[lang]?.devTo?.title}
      </h2>
      <div className="xlCards:grid-cols-3 grid grid-cols-1 items-center justify-center gap-8 sm:p-2 md:p-8 lg:grid-cols-2">
        {articlesList.length > 0 ? (
          <>
            {articlesList.slice(-6).map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  publicationDate={article.published_at}
                  reactions={article.public_reactions_count}
                  url={article.url}
                  coverImage={article.cover_image}
                  lang={lang}
                />
              )
            })}
          </>
        ) : (
          <p className="text-center text-lg font-bold">
            {t[lang]?.devTo?.noArticles}
          </p>
        )}
      </div>
    </section>
  )
}

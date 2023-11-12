import Image from 'next/image'
import { t } from '@/app/translations/translation'

export default function ArticleCard({
  title,
  publicationDate,
  reactions,
  url,
  coverImage,
  lang,
}: {
  title: string
  publicationDate: string
  reactions: number
  url: string
  coverImage: string
  lang: string
}) {
  const date = new Date(publicationDate)
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)

  return (
    <a target="_blank" href={url} rel="noreferrer">
      <div className="article flex w-[320px] flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900 text-center shadow-lg shadow-zinc-950 md:h-[350px] md:w-[400px]">
        <Image
          src={coverImage}
          width={350}
          height={300}
          alt="DevTo cover image"
          className="w-full rounded-lg border-b-2 border-zinc-800"
        />
        <div className="px-2 py-4">
          <strong className="text-center text-sm text-zinc-300 md:text-lg">
            {title}
          </strong>
          <p className="mt-2 text-xs text-zinc-300 md:text-base">
            {t[lang]?.devTo?.pubDate}: {formattedDate}
          </p>
          <p className="mt-1 text-xs text-zinc-300 md:text-base">
            {t[lang]?.devTo?.reactions}: {reactions}
          </p>
        </div>
      </div>
    </a>
  )
}

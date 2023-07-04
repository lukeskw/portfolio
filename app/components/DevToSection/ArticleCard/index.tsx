import Image from 'next/image'

export default function ArticleCard({
  title,
  publicationDate,
  reactions,
  url,
  coverImage,
}: {
  title: string
  publicationDate: string
  reactions: number
  url: string
  coverImage: string
}) {
  const date = new Date(publicationDate)
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)

  return (
    <a target="_blank" href={url} rel="noreferrer">
      <div className="article flex h-[250px] w-[250px] flex-col items-center rounded-xl bg-zinc-700 text-center shadow-md shadow-zinc-950 md:h-[320px] md:w-[350px]">
        <Image
          src={coverImage}
          width={350}
          height={300}
          alt="DevTo cover image"
          className="rounded-lg"
        />
        <div className="p-2">
          <strong className="text-center text-sm text-slate-200 md:text-lg">
            {title}
          </strong>
          <p className="mt-1 text-xs text-slate-200 md:text-base">
            Publication date: {formattedDate}
          </p>
          <p className="mt-1 text-xs text-slate-200 md:text-base">
            Reactions: {reactions}
          </p>
        </div>
      </div>
    </a>
  )
}

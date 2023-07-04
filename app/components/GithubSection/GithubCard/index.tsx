'use client'
import { GitCommit, LinkSimple } from '@phosphor-icons/react'

export default function GithubCard({
  name,
  description,
  languages,
  url,
}: {
  name: string
  description: string
  languages: string[]
  url: string
}) {
  return (
    <a target="_blank" href={url} rel="noreferrer">
      <div className="git flex h-[150px] w-[300px] flex-col items-start gap-3 rounded-xl bg-zinc-700 shadow-md shadow-zinc-950 md:h-[200px] md:w-[400px]">
        <div className="w-full px-6 py-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex gap-2">
              <GitCommit size={32} />
              <strong className="text-md text-slate-200 md:text-lg">
                {name}
              </strong>
            </div>
            <LinkSimple size={16} className="justify-items-end" />
          </div>
          <p className="my-4 text-sm text-slate-200 md:text-base">
            {description}
          </p>
          <div className="space-x-2">
            {languages?.length > 0 && (
              <>
                {languages?.slice(-4).map((language, index) => {
                  return (
                    <span
                      key={index}
                      className="rounded-lg bg-slate-600 p-2 text-xs md:text-base"
                    >
                      {language}
                    </span>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}

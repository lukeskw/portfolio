import Image from 'next/image'
import { t } from '@/app/translations/translation'
import { getStackIcon } from '@/app/utils/getStackIcon'

interface StackComponentProps {
  language: string
}

export function StackComponent({ language }: StackComponentProps) {
  const languages = t[language]?.experience?.languages

  if (!languages || languages.length === 0) {
    return <p>{t[language]?.experience?.errorMsg}</p>
  }

  return (
    <>
      {languages.map((stack) => (
        <div key={stack.name} className="flex gap-3">
          <Image
            src={getStackIcon(stack.name)}
            width={36}
            height={36}
            className="h-icon w-icon"
            alt={`${stack.name}-icon`}
          />
          <div className="flex w-full rounded-full border border-zinc-500">
            <div
              className={`flex w-${
                stack.years !== 4 ? `${stack.years}/4` : 'full'
              } items-center justify-center rounded-full
        bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800`}
            >
              <span className="font-semibold text-white">
                {stack.years > 1
                  ? `${stack.years} ${t[language]?.experience?.yearPlural}`
                  : `${stack.years} ${t[language]?.experience?.year}`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

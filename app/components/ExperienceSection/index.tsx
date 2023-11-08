import { LanguageProps } from '@/app/@types/language'
import { t } from '@/app/translations/translation'

import { StackComponent } from './StackComponent'

export default function ExperienceSection({ language: lang }: LanguageProps) {
  return (
    <section className="mb-16 mt-32 flex w-full items-center justify-center">
      <div className="flex h-[auto] max-w-[100%] flex-col gap-16 px-4 py-6 lg:max-w-[80%] lg:flex-row lg:gap-48 lg:p-16 ">
        <div className="flex w-full min-w-[250px] items-center justify-center">
          <div className="flex max-w-md flex-col items-start justify-start px-2">
            <h2
              className="mb-5 bg-gradient-to-br from-slate-500 via-slate-500
        to-slate-700 bg-clip-text text-center font-sans text-4xl font-bold text-transparent md:text-5xl"
            >
              {t[lang]?.experience?.title}
            </h2>
            <p className="text-base text-slate-200 lg:text-lg">
              {t[lang]?.experience?.description}
            </p>
          </div>
        </div>
        <div className="flex w-full min-w-[250px] flex-col gap-5">
          <StackComponent language={lang} />
        </div>
      </div>
    </section>
  )
}

import { LanguageProps } from '@/types/language'
import { t } from '@/app/translations/translation'

import { StackComponent } from './StackComponent'

export default function ExperienceSection({ language: lang }: LanguageProps) {
  return (
    <section className="mb-16 mt-16 flex w-full items-center justify-center  rounded-[2rem] border-b border-zinc-900 shadow-lg shadow-black lg:mb-16  lg:mt-4">
      <div className="flex h-[auto] max-w-[100%] flex-col gap-16 px-8 py-16 lg:max-w-[80%] lg:flex-row lg:gap-48 lg:px-16 lg:py-24 ">
        <div className="flex w-full min-w-[250px] items-center justify-center">
          <div className="flex max-w-md flex-col items-start justify-start px-2 lg:max-w-lg">
            <h2 className="mb-5 bg-gradient-to-br from-sky-500 to-amber-700 bg-clip-text text-center font-sans text-3xl font-extrabold text-transparent md:text-4xl lg:text-5xl">
              {t[lang]?.experience?.title}
            </h2>
            <p className="text-base text-zinc-300 lg:text-lg">
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

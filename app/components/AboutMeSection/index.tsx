'use client'
import Image from 'next/image'
import { Element } from 'react-scroll'
import profilePic from '@/assets/images/new-profile-pic.png'
import { LanguageProps } from '@/types/language'
import { t } from '@/app/translations/translation'

export default function AboutMeSection({ language: lang }: LanguageProps) {
  return (
    <Element
      name="target-component"
      className="flex w-full justify-center rounded-[2rem] border-t border-zinc-900 shadow-[0_-10px_15px_-3px_rgba(0,0,0,1)]"
    >
      <section className="mt-16 flex w-full flex-col-reverse items-center justify-around gap-6 px-4 sm:w-3/4 md:mt-24 lg:mb-16 lg:flex-row">
        <div className="flex min-h-[250px] min-w-[250px] rounded-full object-none md:min-w-[300px]">
          <Image
            src={profilePic}
            width={400}
            height={400}
            alt="PorfirioDEV logo"
            className="rounded-[2rem] border-b border-zinc-800 shadow-lg shadow-zinc-800/40 md:shadow-2xl md:shadow-zinc-800/40"
          />
        </div>
        <div className="max-w-2xl flex-row items-center justify-center px-2">
          <h2 className="mb-2 bg-gradient-to-br from-sky-500 to-amber-700 bg-clip-text text-center font-sans text-xl font-extrabold text-transparent md:text-3xl lg:text-5xl">
            {t[lang]?.aboutMeSection?.title}
          </h2>
          <p className="mt-8 text-justify text-base text-zinc-300 lg:text-lg">
            {t[lang]?.aboutMeSection?.text.first}
            <br />
            <br />
            {t[lang]?.aboutMeSection?.text?.second}
          </p>
        </div>
      </section>
    </Element>
  )
}

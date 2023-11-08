'use client'
import Image from 'next/image'
import { Element } from 'react-scroll'
import profilePic from 'assets/images/new-profile-pic.png'
import { LanguageProps } from '@/app/@types/language'
import { t } from '@/app/translations/translation'

export default function AboutMeSection({ language: lang }: LanguageProps) {
  return (
    <Element name="target-component" className="flex w-full justify-center">
      <section className="md:lg-16 mt-28 flex w-full flex-col-reverse items-center justify-around gap-6 sm:w-3/4 md:mt-32 lg:flex-row">
        <div className="flex min-h-[250px] min-w-[250px] rounded-full object-none">
          <Image
            src={profilePic}
            width={300}
            height={300}
            alt="PorfirioDEV logo"
            className="rounded-[2rem] border border-slate-200"
          />
        </div>
        <div className="max-w-xl flex-row items-center justify-center px-2">
          <h2
            className="mb-2 bg-gradient-to-br from-slate-500 via-slate-500
        to-slate-700 bg-clip-text text-center font-sans text-4xl font-bold text-transparent md:text-5xl"
          >
            {t[lang]?.aboutMeSection?.title}
          </h2>
          <p className="text-justify text-slate-200 lg:text-lg">
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

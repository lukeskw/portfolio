'use client'
import Typewriter from 'typewriter-effect'
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  DevToLogo,
  CaretDoubleDown,
  FileText,
} from '@phosphor-icons/react'

import { Link } from 'react-scroll'
import { t } from '@/app/translations/translation'
import { LanguageProps } from '@/types/language'

export default function ContactSection({ language: lang }: LanguageProps) {
  return (
    <section className="mb-32 flex h-[90vh] w-[90vw] items-center justify-center">
      <div className="mt-16 flex w-full flex-col items-center justify-center gap-5 md:-mt-16 lg:mt-0">
        <div className="mb-8 flex w-full justify-center">
          <h2 className="text-3xl font-extrabold tracking-wider text-zinc-300 sm:text-5xl md:text-6xl md:tracking-widest lg:text-7xl xl:text-8xl">
            {'< PORFIRIO|DEV >'}
          </h2>
        </div>
        <div className="flex min-h-[30px] justify-center text-center text-sm text-zinc-500 md:text-2xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(t[lang]?.typeWriter?.firstSentence)
                .pauseFor(2500)
                .deleteAll()

                .typeString(t[lang]?.typeWriter?.secondSentence)
                .pauseFor(2500)
                .deleteAll()

                .typeString(t[lang]?.typeWriter?.thirdSentence)
                .pauseFor(2500)
                .deleteAll()

                .typeString(t[lang]?.typeWriter?.fourthSentence)
                .pauseFor(2500)
                .deleteAll()

                .start()
            }}
            options={{
              loop: true,
            }}
          />
        </div>
        <div className="mt-6 flex flex-row justify-center gap-6">
          <a
            className="hover:opacity-80"
            target="_blank"
            href="https://www.linkedin.com/in/lucas-porfirio-dev/"
            rel="noreferrer"
            title="linkedin"
          >
            <LinkedinLogo
              size={56}
              weight="fill"
              className="w-10 text-zinc-100 md:w-full"
            />
          </a>
          <a
            className="hover:opacity-80"
            target="_blank"
            href="https://github.com/lukeskw/"
            rel="noreferrer"
            title="github"
          >
            <GithubLogo
              size={56}
              weight="fill"
              className="w-10 text-zinc-100 md:w-full"
            />
          </a>
          <a
            className="hover:opacity-80"
            target="_blank"
            href="https://dev.to/lukeskw"
            rel="noreferrer"
            title="dev.to"
          >
            <DevToLogo
              size={56}
              weight="fill"
              className="w-10 text-zinc-100 md:w-full"
            />
          </a>
          <a
            className="hover:opacity-80"
            target="_blank"
            href="mailto:lucasporfirioa@gmail.com"
            rel="noreferrer"
            title="email"
          >
            <EnvelopeSimple
              size={56}
              weight="fill"
              className="w-10 text-zinc-100 md:w-full"
            />
          </a>
          <a
            className="cursor-pointer hover:opacity-80"
            href={
              lang === 'pt-BR' ? '/curriculum_pt.pdf' : '/curriculum_en.pdf'
            }
            download={`curriculum-${lang.substring(0, 2)}.pdf`}
            title="curriculum"
          >
            <FileText
              size={56}
              weight="fill"
              className="w-10 text-zinc-100 md:w-full"
            />
          </a>
        </div>
        <Link
          to="target-component"
          smooth={true}
          duration={300}
          className="cursor-pointer"
        >
          <CaretDoubleDown
            size={56}
            className="mt-8 w-10 animate-bounce text-zinc-500 hover:opacity-80 md:w-full"
          />
        </Link>
      </div>
    </section>
  )
}

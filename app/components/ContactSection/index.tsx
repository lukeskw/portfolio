'use client'
import Image from 'next/image'
// import { Poppins } from 'next/font/google'
import logoImg from 'assets/images/dev-logo.png'
import Typewriter from 'typewriter-effect'
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  DevToLogo,
  CaretDoubleDown,
} from '@phosphor-icons/react'

import { Link } from 'react-scroll'
import { t } from '@/app/translations/translation'
import { LanguageProps } from '@/app/@types/language'

export default function ContactSection({ language: lang }: LanguageProps) {
  return (
    <section className="flex h-[90vh] items-center justify-center">
      <div className="mt-16 flex flex-col items-center justify-center gap-5 md:-mt-16 lg:mt-0 lg:w-[600px]">
        <Image
          src={logoImg}
          width={300}
          height={300}
          alt="PorfirioDEV logo"
          className=""
        />
        <div className="text-md flex min-h-[30px] max-w-[500px] justify-center md:text-2xl">
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
          >
            <LinkedinLogo size={56} weight="fill" />
          </a>
          <a
            className="hover:opacity-80"
            target="_blank"
            href="https://github.com/lukeskw/"
            rel="noreferrer"
          >
            <GithubLogo size={56} weight="fill" />
          </a>
          <a
            className="hover:opacity-80"
            target="_blank"
            href="https://dev.to/lukeskw"
            rel="noreferrer"
          >
            <DevToLogo size={56} weight="fill" />
          </a>
          <a
            className="hover:opacity-80"
            target="_blank"
            href="mailto:lucasporfirioa@gmail.com"
            rel="noreferrer"
          >
            <EnvelopeSimple size={56} weight="fill" />
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
            className="mt-8 animate-bounce hover:opacity-80"
          />
        </Link>
      </div>
    </section>
  )
}

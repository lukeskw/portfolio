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

// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--font-poppins',
// })

export default function ContactSection() {
  return (
    <section className="flex h-[90vh] items-center justify-center">
      <div className="-mt-16 flex flex-col items-center justify-center gap-5 lg:mt-0">
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
                .typeString('Computer Information Systems Bachelor')
                .pauseFor(2500)
                .deleteAll()

                .typeString('Software Developer')
                .pauseFor(2500)
                .deleteAll()

                .typeString('Tech Content Creator')
                .pauseFor(2500)
                .deleteAll()

                .typeString('Nice to see you around here!')
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

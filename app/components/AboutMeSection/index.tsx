'use client'
import Image from 'next/image'
// @ts-ignore
import { Element } from 'react-scroll'
import profilePic from 'assets/images/profile-pic.jpg'

export default function AboutMeSection() {
  return (
    <Element name="target-component" className="flex w-full justify-center">
      <section className="mt-12 flex w-full flex-col-reverse items-center justify-around gap-6 sm:w-3/4 md:mt-32 lg:flex-row">
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
            Hello there! I'm Luke
          </h2>
          <p className="text-justify text-slate-200">
            Allow me to introduce myself! I'm a passionate software engineer who
            has been immersed in the world of technology since 2018, when I was
            just 20 years old.I hold a bachelor's degree in Computer Information
            Systems from Unifoa, and for the past two years,I have been working
            as a full-stack developer at CityConnect. Challenges fuel my drive,
            and I thrive in problem-solving scenarios.
            <br />
            <br />
            Whether it's tackling complex coding issues or finding innovative
            solutions, I'm always up for the challenge. When I'm not engrossed
            in coding, you'll likely find me enjoying a cup of coffee, playing
            League of Legends or Squad, or spending quality time with my beloved
            cat named Kiki. I'm excited to connect with like-minded individuals,
            collaborate on new projects, and continue my journey as a software
            engineer😊
          </p>
        </div>
      </section>
    </Element>
  )
}

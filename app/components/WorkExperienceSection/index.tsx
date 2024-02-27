import { LanguageProps } from '@/app/@types/language'
import { t } from '@/app/translations/translation'

export default function ExperienceSection({ language: lang }: LanguageProps) {
  return (
    <section className="mb-16 mt-16 flex w-full items-center justify-center lg:mt-32">
      <div
        className="border-px h-[auto] max-w-[100%] rounded-[2rem] border border-zinc-800 bg-zinc-900 px-4 pb-8 pt-16 shadow-xl
      shadow-zinc-950 md:p-16 lg:max-w-[80%]"
      >
        <div className="timeline-head relative border-l-4 border-zinc-700/80 px-4 py-8">
          <h2
            className="-mt-12 ml-2 flex w-full bg-gradient-to-br from-[#0ea5e9_0%] via-[#b45309_90%] to-[#b45309_100%] bg-clip-text font-sans text-[1.75rem] font-extrabold
            text-transparent before:absolute before:left-0 before:top-0 before:inline-block before:h-1 before:w-4 before:bg-zinc-700/80 before:content-[''] md:text-4xl lg:text-5xl"
          >
            {t[lang]?.workExperiences?.title}
          </h2>
        </div>
        <div className="timeline relative text-zinc-300 ">
          <div
            className="event border-l-4 border-zinc-700/80 px-2 pb-4 before:absolute
            before:left-0 before:inline-block before:h-4
            before:w-4 before:-translate-x-[40%] before:translate-y-[50%] before:rounded-full before:border-4 before:border-zinc-300 before:bg-zinc-600
            before:content-[''] md:px-8
            "
          >
            <h2 className="ml-3 text-lg font-bold md:ml-0 md:text-xl lg:text-2xl">
              {t[lang]?.workExperiences?.thirdExperience?.title}
            </h2>
            <h4 className="ml-3 pb-4 text-base md:ml-0 md:text-lg">
              {t[lang]?.workExperiences?.thirdExperience?.date}
            </h4>
            <p className="rounded-lg p-2 text-justify text-sm md:bg-zinc-925 md:p-4 md:text-base lg:text-lg">
              {t[lang]?.workExperiences?.thirdExperience?.description}
              <br />
              <br />
              <b>
                {t[lang]?.workExperiences?.thirdExperience?.skills?.title}:{' '}
              </b>
              {t[lang]?.workExperiences?.thirdExperience?.skills?.description}
            </p>
          </div>
          <div
            className="event border-l-4 border-zinc-700/80 px-2 py-4
            before:absolute before:left-0 before:inline-block before:h-4
            before:w-4 before:-translate-x-[40%] before:translate-y-[50%] before:rounded-full before:bg-zinc-200
            before:content-[''] md:px-8
            "
          >
            <h2 className="ml-3 text-lg font-bold md:ml-0 md:text-xl lg:text-2xl">
              {t[lang]?.workExperiences?.secondExperience?.title}
            </h2>
            <h4 className="ml-3 pb-4 text-base md:ml-0 md:text-lg">
              {t[lang]?.workExperiences?.secondExperience?.date}
            </h4>
            <p className="p-2 text-justify text-sm md:p-4 md:text-base lg:text-lg">
              {t[lang]?.workExperiences?.secondExperience?.description}
              <br />
              <br />
              <b>
                {t[lang]?.workExperiences?.secondExperience?.skills?.title}:{' '}
              </b>{' '}
              {t[lang]?.workExperiences?.secondExperience?.skills?.description}
            </p>
          </div>
          <div
            className="event border-l-4 border-zinc-700/80 px-2 py-4
            before:absolute before:left-0 before:inline-block before:h-4
            before:w-4 before:-translate-x-[40%] before:translate-y-[50%] before:rounded-full before:bg-zinc-200
            before:content-[''] md:px-8
            "
          >
            <h2 className="ml-3 text-lg font-bold md:ml-0 md:text-xl lg:text-2xl">
              {t[lang]?.workExperiences?.firstExperience?.title}
            </h2>
            <h4 className="ml-3 pb-4 text-base md:ml-0 md:text-lg">
              {t[lang]?.workExperiences?.firstExperience?.date}
            </h4>
            <p className="p-2 text-justify text-sm md:p-4 md:text-base lg:text-lg">
              {t[lang]?.workExperiences?.firstExperience?.description}
              <br />
              <br />
              <b>
                {t[lang]?.workExperiences?.firstExperience?.skills?.title}:{' '}
              </b>{' '}
              {t[lang]?.workExperiences?.firstExperience?.skills?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

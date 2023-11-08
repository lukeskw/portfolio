import { LanguageProps } from '@/app/@types/language'
import { t } from '@/app/translations/translation'

export default function ExperienceSection({ language: lang }: LanguageProps) {
  return (
    <section className="mb-16 mt-32 flex w-full items-center justify-center">
      <div
        className="h-[auto] max-w-[100%] rounded-[2rem] bg-zinc-700 px-4
      py-6 shadow-xl shadow-zinc-950 md:p-16 lg:max-w-[80%]"
      >
        <div className="timeline-head relative border-l-4 border-slate-500 px-4 py-6">
          <h2
            className="-mt-10 ml-2 h-20 bg-gradient-to-br from-slate-400
          via-slate-500 to-slate-700 bg-clip-text font-sans text-3xl font-bold text-transparent
            before:absolute before:left-0 before:top-0
            before:inline-block before:h-1 before:w-4 before:bg-slate-500
            before:content-[''] md:text-4xl lg:text-5xl"
          >
            {t[lang]?.workExperiences?.title}
          </h2>
        </div>
        <div className="timeline relative text-slate-200 ">
          <div
            className="event border-l-4 border-slate-500 px-2 pb-4 before:absolute
            before:left-0 before:inline-block before:h-4
            before:w-4 before:-translate-x-[40%] before:translate-y-[50%] before:rounded-full before:bg-slate-400
            before:content-[''] md:px-8
            "
          >
            <h2 className="ml-3 text-base font-bold md:ml-0 md:text-xl lg:text-2xl">
              {t[lang]?.workExperiences?.thirdExperience?.title}
            </h2>
            <h4 className="ml-3 pb-4 text-sm md:ml-0 md:text-base">
              {t[lang]?.workExperiences?.thirdExperience?.date}
            </h4>
            <p className="rounded-lg p-2 text-justify text-xs md:bg-zinc-800 md:p-4 md:text-sm lg:text-base">
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
            className="event border-l-4 border-slate-500 px-2 py-4
            before:absolute before:left-0 before:inline-block before:h-4
            before:w-4 before:-translate-x-[40%] before:translate-y-[50%] before:rounded-full before:bg-slate-200
            before:content-[''] md:px-8
            "
          >
            <h2 className="ml-3 text-base font-bold md:ml-0 md:text-xl lg:text-2xl">
              {t[lang]?.workExperiences?.secondExperience?.title}
            </h2>
            <h4 className="ml-3 pb-4 text-sm md:ml-0 md:text-base">
              {t[lang]?.workExperiences?.secondExperience?.date}
            </h4>
            <p className="p-2 text-justify text-xs md:p-4 md:text-sm lg:text-base">
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
            className="event border-l-4 border-slate-500 px-2 py-4
            before:absolute before:left-0 before:inline-block before:h-4
            before:w-4 before:-translate-x-[40%] before:translate-y-[50%] before:rounded-full before:bg-slate-200
            before:content-[''] md:px-8
            "
          >
            <h2 className="ml-3 text-base font-bold md:ml-0 md:text-xl lg:text-2xl">
              {t[lang]?.workExperiences?.firstExperience?.title}
            </h2>
            <h4 className="ml-3 pb-4 text-sm md:ml-0 md:text-base ">
              {t[lang]?.workExperiences?.firstExperience?.date}
            </h4>
            <p className="p-2 text-justify text-xs md:p-4 md:text-sm lg:text-base">
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

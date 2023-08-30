export default function ExperienceSection() {
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
            My Work Experiences
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
              Fullstack developer at City Connect
            </h2>
            <h4 className="ml-3 pb-4 text-sm md:ml-0 md:text-base">
              Jun 2021 - Now
            </h4>
            <p className="rounded-lg p-2 text-justify text-xs md:bg-zinc-800 md:p-4 md:text-sm lg:text-base">
              <a>City Connect</a> is a Brazilian service provider company that
              has been operating in the market for over 13 years, delivering
              innovation and technology solutions in the field of IT
              Infrastructure and Software for Public Administration.
              <br /> As a Software Engineer, I collaborate in the development of
              web systems using ReactJS and Laravel, actively participating in
              the processes outlined by the Scrum methodology. I also perform
              maintenance on legacy systems developed in PHP, as well as
              ReactJS/Laravel. Additionally, I contribute to the development and
              maintenance of Drupal applications, primarily focusing on frontend
              tasks. These applications are hosted in an Azure environment with
              Docker containerization.
              <br />
              <br />
              <b>Skills:</b> Laravel, React.js, TailwindCSS, EC2, Jquery, Scrum,
              Frontend and Backend Development, Git, Docker, Drupal, MySQL,
              PostgreSQL.
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
              Backend developer at Tatica Web
            </h2>
            <h4 className="ml-3 pb-4 text-sm md:ml-0 md:text-base">
              Apr 2020 - Jun 2021
            </h4>
            <p className="p-2 text-justify text-xs md:p-4 md:text-sm lg:text-base">
              With a strong web development proficiency in HTML5, CSS3, JS, PHP,
              Laravel, and Blade, I've created impactful websites for regional
              companies. Specialized in introducing new functionalities and
              enhancing their online presence. My initial role was a backend
              developer, but with my growing desire to learn, I began immersing
              myself in the frontend world, and in the end, I was already
              tinkering with the frontend and layouts of the websites.
              <br />
              Additionally, I've excelled in comprehensive website maintenance,
              focusing on optimizing user experiences. My technical expertise
              and attention to detail ensured exceptional websites that exceed
              client expectations in functionality, performance, and user
              satisfaction.
              <br />
              <br />
              <b>Skills:</b> HTML, CSS3, PHP 5.4 - 7.4, JS, Jquery, Git, MySQL,
              Laravel, Blade.
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
              Trainee at Unimed Volta Redonda
            </h2>
            <h4 className="ml-3 pb-4 text-sm md:ml-0 md:text-base ">
              Mar 2018 - Dec 2019
            </h4>
            <p className="p-2 text-justify text-xs md:p-4 md:text-sm lg:text-base">
              I actively contributed to the internal operations of the hospital
              by developing insightful reports using Oracle SQL and utilizing
              specialized hospital systems like MVSoul. Additionally, I played a
              vital role in integrating systems such as Matrix Diagnosis and
              Microdata Cockpit to streamline operations and enhance efficiency.
              <br />
              Furthermore, I played a key role in the migration of the unified
              MV2000 system to MVSoul. Collaborating closely with stakeholders,
              I gathered and analyzed crucial requirements to ensure a smooth
              transition.
              <br />
              <br />
              <b>Skills:</b> Scrum, Kanban, MV Systems, Oracle Database, PL/SQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

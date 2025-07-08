import { translationType } from '@/types/translation'

export const t: Record<string, translationType> = {
  'en-US': {
    typeWriter: {
      firstSentence: 'Computer Information Systems Bachelor',
      secondSentence: 'Software Engineer',
      thirdSentence: 'Tech Content Creator',
      fourthSentence: 'Nice to see you around here!',
    },
    aboutMeSection: {
      title: "Hello there! I'm Luke",
      text: {
        first:
          "Let me introduce myself! I'm a passionate software engineer who has been immersed in the world of technology since 2018, when I was just 19 years old.I hold a bachelor's degree in Computer Information Systems, which I got back in 2019, and I'm currently working as a full-stack engineer at Listra Digital. Challenges fuel my drive, and I thrive in problem-solving scenarios.",
        second:
          "Whether it's tackling complex coding issues or finding innovative solutions, I'm always up for the challenge. I'm particularly passionate about AI technologies and have been using AI tools and agents for almost 3 years, including GPT, Claude, Claude Code, and Gemini. I'm also deeply interested in exploring Bedrock Agents for future projects. When I'm not coding, you'll likely find me enjoying a cup of coffee, playing Squad (or any other Milsim), or spending some time with my beloved wife, and with my cat named Kiki. I'm excited to connect with like-minded individuals, collaborate on new projects, and continue my journey as a software engineer😊",
      },
    },
    experience: {
      title: 'Main Skills',
      description: `7 years working in the IT area, and 5 as a
      Software Engineer, in
      companys such as Listra Digital, Unimed and City Connect.`,
      errorMsg: 'Error while fetching data!',
      year: 'year',
      yearPlural: 'years',
      languages: [
        {
          name: 'react',
          years: 4,
        },
        {
          name: 'javascript',
          years: 6,
        },
        {
          name: 'typescript',
          years: 3,
        },
        {
          name: 'php',
          years: 5,
        },
        {
          name: 'laravel',
          years: 5,
        },
        {
          name: 'mysql',
          years: 6,
        },
        {
          name: 'postgreSQL',
          years: 4,
        },
        {
          name: 'docker',
          years: 2,
        },
        {
          name: 'k8s',
          years: 1,
        },
        {
          name: 'AI',
          years: 3,
        },
      ],
    },
    workExperiences: {
      title: 'My Work Experiences',
      firstExperience: {
        title: 'Trainee at Unimed Volta Redonda',
        date: 'Mar 2018 - Dec 2019',
        description:
          'I actively contributed to the internal operations of the hospital by developing insightful reports using Oracle SQL and utilizing specialized hospital systems like MVSoul. Additionally, I played a vital role in integrating systems such as Matrix Diagnosis and Microdata Cockpit to streamline operations and enhance efficiency.Furthermore, I played a key role in the migration of the unified MV2000 system to MVSoul. Collaborating closely with stakeholders, I gathered and analyzed crucial requirements to ensure a smooth transition.',
        skills: {
          title: 'Skills',
          description: 'Scrum, Kanban, MV Systems, Oracle Database, PL/SQL.',
        },
      },
      secondExperience: {
        title: 'Backend Engineer at Tatica Web',
        date: 'Apr 2020 - Jun 2021',
        description:
          "With a strong web development proficiency in HTML5, CSS3, Javascript, PHP, Laravel, and Blade, I've created impactful websites for regional companies. Specialized in introducing new functionalities and enhancing their online presence. My initial role was a backend engineer, but with my growing desire to learn, I began immersing myself in the frontend world, and in the end, I was already tinkering with the frontend and layouts of the websites. Additionally, I've excelled in comprehensive website maintenance, focusing on optimizing user experiences. My technical expertise and attention to detail ensured exceptional websites that exceed client expectations in functionality, performance, and user satisfaction.",
        skills: {
          title: 'Skills',
          description:
            'HTML, CSS3, PHP 5.4 - 7.4, Javascript, Jquery, Git, MySQL, Laravel 5-7, Blade.',
        },
      },
      thirdExperience: {
        title: 'Fullstack Engineer at City Connect',
        date: 'Jun 2021 - Jun 2024',
        description:
          'City Connect is a Brazilian service provider company that has been operating in the market for over 13 years, delivering innovation and technology solutions in the field of IT Infrastructure and Software for Public Administration. As a Software Engineer, I collaborate in the development of web systems using React.js and Laravel, actively participating in the processes outlined by the Scrum methodology. I also perform maintenance on legacy systems developed in PHP, as well as React.js/Laravel. Additionally, I contribute to the development and maintenance of Drupal applications, primarily focusing on frontend tasks. These applications are hosted in an Azure environment with Docker containerization.',
        skills: {
          title: 'Skills',
          description:
            'Laravel 6-10, React.js, TailwindCSS, EC2, Jquery, Scrum, Frontend and Backend Development, Git, Docker, Drupal, MySQL, PostgreSQL.',
        },
      },
      fourthExperience: {
        title: 'Fullstack Engineer at Listra Digital',
        date: 'Jun 2024 - Now',
        description:
          'As a fullstack developer at Listra Digital, I architect and develop high-performance web applications using Laravel 10-12 with Clean Architecture and DDD principles. I seamlessly integrate React frontends via Inertia.js, creating scalable admin panels and APIs with advanced authentication (Keycloak/Passport) and comprehensive testing (Pest). Key achievements include: building a corporate social network with optimized feed systems and extensive caching strategies; developing a training platform with large video uploads (TUS protocol) and automated Vimeo processing via async jobs; creating an AI-powered recipe generation system using GPT-4 Mini and DALL-E 3 with advanced prompt engineering and Octane\\Concurrently for parallel processing optimization. I deploy applications on Kubernetes with Docker containerization and dev containers, implementing Redis caching, Laravel Octane optimization, and asynchronous processing for maximum performance and scalability.',
        skills: {
          title: 'Skills',
          description:
            'Laravel 10-12, React.js, Inertia.js, Next.js 15, Clean Architecture, DDD, Keycloak, Passport, Pest, Shadcn, Zustand, Docker, Kubernetes, Dev Containers, Redis, Octane, Git, Bitbucket.',
        },
      },
    },
    devTo: {
      title: 'My Posts on Dev.to',
      reactions: 'Reactions',
      pubDate: 'Publication date',
      noArticles: 'No articles were found',
    },
    git: {
      title: 'My Latest Projects on Git',
      noProjects: 'No projects were found',
    },
  },
  'pt-BR': {
    typeWriter: {
      firstSentence: 'Bacharéu em Sistemas de Informação',
      secondSentence: 'Desenvolvedor de Software',
      thirdSentence: 'Criador de conteúdo Tech',
      fourthSentence: 'Ótimo te ver por aqui!',
    },
    aboutMeSection: {
      title: 'Olá! Meu nome é Luke',
      text: {
        first:
          'Deixa eu me apresentar! Sou um apaixonado Software Engineer que está imerso no mundo da tecnologia desde 2018, quando tinha apenas 19 anos. Tenho um diploma de bacharel em Sistemas de Informação em Computação que consegui em 2019 e atualmente trabalho como desenvolvedor full-stack na Listra Digital. Desafios alimentam minha motivação, e prospero em cenários de resolução de problemas.',
        second:
          'Seja enfrentando problemas complexos de programação ou encontrando soluções inovadoras, estou sempre pronto para o desafio. Sou particularmente apaixonado por tecnologias de IA e tenho usado ferramentas e agentes de IA há 3 anos, incluindo GPT, Claude, Claude Code e Gemini. Também estou muito interessado em explorar Bedrock Agents para projetos futuros. Quando não estou programando, é provável que me encontre tomando uma boa xícara de café, jogando Squad (ou algum Milsim), ou passando um tempo com minha querida esposa e minha gatinha chamada Kiki. Fico muito empolgado em me conectar com pessoas de mentalidade parecida, em colaborar em novos projetos e continuar minha jornada como engenheiro de software 😊',
      },
    },
    experience: {
      title: 'Habilidades Principais',
      description: `7 anos trabalhando na área de TI, e 5 como um
      Software Engineer, em
      empresas como a Listra Digital, Unimed e City Connect.`,
      errorMsg: 'Erro na busca dos dados!',
      year: 'ano',
      yearPlural: 'anos',
      languages: [
        {
          name: 'react',
          years: 4,
        },
        {
          name: 'javascript',
          years: 6,
        },
        {
          name: 'typescript',
          years: 3,
        },
        {
          name: 'php',
          years: 5,
        },
        {
          name: 'laravel',
          years: 5,
        },
        {
          name: 'mysql',
          years: 6,
        },
        {
          name: 'postgreSQL',
          years: 4,
        },
        {
          name: 'docker',
          years: 2,
        },
        {
          name: 'k8s',
          years: 1,
        },
        {
          name: 'AI',
          years: 3,
        },
      ],
    },
    workExperiences: {
      title: 'Experiências de Trabalho',
      firstExperience: {
        title: 'Estagiário em Unimed Volta Redonda',
        date: 'Mar 2018 - Dez 2019',
        description:
          'Contribuí ativamente para as operações internas do hospital desenvolvendo relatórios informativos utilizando o Oracle SQL e utilizando sistemas hospitalares especializados, como o MVSoul. Além disso, desempenhei um papel vital na integração de sistemas, como o Matrix Diagnosis e o Microdata Cockpit, para otimizar as operações e aumentar a eficiência. Além disso, desempenhei um papel fundamental na migração do sistema unificado MV2000 para o MVSoul. Trabalhando em estreita colaboração com as partes interessadas, coletei e analisei requisitos cruciais para garantir uma transição tranquila.',
        skills: {
          title: 'Habilidades',
          description: 'Scrum, Kanban, MV Systems, Oracle Database, PL/SQL.',
        },
      },
      secondExperience: {
        title: 'Backend Engineer na Tatica Web',
        date: 'Abr 2020 - Jun 2021',
        description:
          'Com proficiência sólida em desenvolvimento web em HTML5, CSS3, Javascript, PHP, Laravel e Blade, criei websites impactantes para empresas regionais. Especializado em introduzir novas funcionalidades e aprimorar sua presença online. Meu papel inicial era de desenvolvedor backend, mas com meu crescente desejo de aprender, comecei a me envolver no mundo do frontend, e no final, já estava mexendo com o frontend e layouts dos sites. Além disso, me destaquei na manutenção abrangente de websites, focando na otimização da experiência do usuário. Minha experiência técnica e atenção aos detalhes garantiram websites excepcionais que superam as expectativas dos clientes em termos de funcionalidade, desempenho e satisfação do usuário.',
        skills: {
          title: 'Habilidades',
          description:
            'HTML, CSS3, PHP 5.4 - 7.4, Javascript, Jquery, Git, MySQL, Laravel 5-7, Blade.',
        },
      },
      thirdExperience: {
        title: 'Fullstack Engineer na City Connect',
        date: 'Jun 2021 - Jun 2024',
        description:
          'A City Connect é uma empresa brasileira provedora de serviços que atua no mercado há mais de 13 anos, entregando soluções de inovação e tecnologia no campo de Infraestrutura de TI e Software para a Administração Pública. Como Engenheiro de Software, colaboro no desenvolvimento de sistemas web usando React.js e Laravel, participando ativamente dos processos delineados pela metodologia Scrum. Também realizo a manutenção de sistemas legados desenvolvidos em PHP, bem como em React.js/Laravel. Além disso, contribuo para o desenvolvimento e manutenção de aplicações Drupal, com foco principalmente em tarefas de frontend. Essas aplicações são hospedadas em um ambiente Azure com containerização Docker.',
        skills: {
          title: 'Habilidades',
          description:
            'Laravel 6-10, React.js, TailwindCSS, EC2, Jquery, Scrum, Desenvolvimento Frontend e Backend, Git, Docker, Drupal, MySQL, PostgreSQL.',
        },
      },
      fourthExperience: {
        title: 'Fullstack Engineer na Listra Digital',
        date: 'Jun 2024 - Atualmente',
        description:
          'Como desenvolvedor fullstack na Listra Digital, arquiteto e desenvolvo aplicações web de alta performance usando Laravel 10-12 com Clean Architecture e princípios DDD. Integro frontends React via Inertia.js, criando painéis administrativos escaláveis e APIs com autenticação avançada (Keycloak/Passport) e testes abrangentes (Pest). Principais conquistas incluem: construção de rede social corporativa com sistemas de feed otimizados e estratégias extensivas de cache; desenvolvimento de plataforma de treinamento com upload de vídeos grandes (protocolo TUS) e processamento automatizado via jobs assíncronos para Vimeo; criação de sistema de geração de receitas com IA usando GPT-4 Mini e DALL-E 3 com engenharia avançada de prompts e Octane\\Concurrently para otimização de processamento paralelo. Implanto aplicações no Kubernetes com containerização Docker e dev containers, implementando cache Redis, otimização Laravel Octane e processamento assíncrono para máxima performance e escalabilidade.',
        skills: {
          title: 'Habilidades',
          description:
            'Laravel 10-12, React.js, Inertia.js, Next.js 15, Clean Architecture, DDD, Keycloak, Passport, Pest, Shadcn, Zustand, Docker, Kubernetes, Dev Containers, Redis, Octane, Git, Bitbucket.',
        },
      },
    },
    devTo: {
      title: 'Meus Posts no Dev.to',
      reactions: 'Reações',
      pubDate: 'Data de Publicação',
      noArticles: 'Não foram encontrados artigos!',
    },
    git: {
      title: 'Meus Últimos Projetos no Git',
      noProjects: 'Não foram encontrados projetos!',
    },
  },
}

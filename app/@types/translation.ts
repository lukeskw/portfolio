export type translationType = {
  typeWriter: {
    firstSentence: string
    secondSentence: string
    thirdSentence: string
    fourthSentence: string
  }
  aboutMeSection: {
    title: string
    text: {
      first: string
      second: string
    }
  }
  workExperiences: {
    title: string
    firstExperience: {
      title: string
      date: string
      description: string
      skills: {
        title: string
        description: string
      }
    }
    secondExperience: {
      title: string
      date: string
      description: string
      skills: {
        title: string
        description: string
      }
    }
    thirdExperience: {
      title: string
      date: string
      description: string
      skills: {
        title: string
        description: string
      }
    }
  }
  devTo: {
    title: string
    noArticles: string
  }
  git: {
    title: string
    noProjects: string
  }
}
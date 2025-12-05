interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  technologies?: string[]
  appStoreLinks?: {
    ios?: string
    android?: string
  }
}

const projectsData: Project[] = [
  {
    title: 'BringHacks',
    description: `A daily-hacks app delivering quick, actionable insights to boost productivity, learning, and personal growth—personalized for each user. Get daily tips and tricks that help you work smarter, learn faster, and grow continuously.`,
    imgSrc: '/static/projects/bringhacks-logo.png',
    href: 'https://bringhacks.com',
    technologies: [],
    appStoreLinks: {
      ios: 'https://apps.apple.com/us/app/id1633081567',
      android: 'https://play.google.com/store/apps/details?id=rish.crearo.lifehacks',
    },
  },
  {
    title: 'BestLook',
    description: `AI-powered outfit rating. Upload photos and get instant attractiveness, style, and composition scores to find your best look. Get personalized fashion advice powered by advanced AI algorithms.`,
    imgSrc: '/static/projects/bestlook-logo.png',
    href: 'https://apps.apple.com/us/app/id6742063005',
    technologies: [],
    appStoreLinks: {
      ios: 'https://apps.apple.com/us/app/id6742063005',
      android: 'https://play.google.com/store/apps/details?id=com.best.look',
    },
  },
  {
    title: 'PicToWord',
    description: `A fun picture-guessing puzzle game with hundreds of levels. Simple, addictive, and perfect for quick daily play. Challenge yourself with visual puzzles and expand your vocabulary.`,
    imgSrc: '/static/projects/pic-to-word-logo.png',
    href: 'https://apps.apple.com/app/id6753737728',
    technologies: [],
    appStoreLinks: {
      ios: 'https://apps.apple.com/app/id6753737728',
      android: 'https://play.google.com/store/apps/details?id=com.duoihinhbatchu.app',
    },
  },
  {
    title: 'Math Crossword',
    description: `A fun math crossword puzzle game with hundreds of levels. Simple, addictive, and perfect for quick daily play. Challenge yourself with math puzzles and expand your math skills.`,
    imgSrc: '/static/projects/math-x-logo.png',
    href: 'https://apps.apple.com/us/app/id6473798005',
    technologies: [],
    appStoreLinks: {
      ios: 'https://apps.apple.com/us/app/id6473798005',
      android: 'https://play.google.com/store/apps/details?id=math.crossword.puzzle',
    },
  },
]

export default projectsData

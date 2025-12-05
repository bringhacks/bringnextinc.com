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
    imgSrc: '/static/images/bringhacks-placeholder.png',
    href: '#',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    appStoreLinks: {
      ios: '#',
      android: '#',
    },
  },
  {
    title: 'BestLook',
    description: `AI-powered outfit rating. Upload photos and get instant attractiveness, style, and composition scores to find your best look. Get personalized fashion advice powered by advanced AI algorithms.`,
    imgSrc: '/static/images/bestlook-placeholder.png',
    href: '#',
    technologies: ['React Native', 'AI/ML', 'Cloud Services'],
    appStoreLinks: {
      ios: '#',
      android: '#',
    },
  },
  {
    title: 'PicToWord',
    description: `A fun picture-guessing puzzle game with hundreds of levels. Simple, addictive, and perfect for quick daily play. Challenge yourself with visual puzzles and expand your vocabulary.`,
    imgSrc: '/static/images/pictoword-placeholder.png',
    href: '#',
    technologies: ['React Native', 'Game Engine', 'Local Storage'],
    appStoreLinks: {
      ios: '#',
      android: '#',
    },
  },
]

export default projectsData

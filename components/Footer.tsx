import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-20">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-6 flex space-x-5">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          {siteMetadata.github && <SocialIcon kind="github" href={siteMetadata.github} size={6} />}
          {siteMetadata.linkedin && (
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          )}
          {siteMetadata.x && <SocialIcon kind="x" href={siteMetadata.x} size={6} />}
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-center space-x-2 text-sm text-black/60 dark:text-white/60">
          <div className="font-medium text-black dark:text-white">{siteMetadata.title}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>All rights reserved</div>
        </div>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-black/60 dark:text-white/60">
          <Link 
            href="/contact"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Contact Us
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link 
            href="/about"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            About
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link 
            href="/projects"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Projects
          </Link>
        </div>
      </div>
    </footer>
  )
}

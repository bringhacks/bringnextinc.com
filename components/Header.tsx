import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-black justify-between py-8 border-b border-black/10 dark:border-white/10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-black/95'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between transition-opacity hover:opacity-80">
          <div className="mr-3 h-10 w-10">
            <Image
              src={siteMetadata.siteLogo}
              alt={siteMetadata.headerTitle}
              width={40}
              height={40}
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold tracking-tight text-black dark:text-white sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-6 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 font-medium text-black/70 dark:text-white/70 transition-colors hover:text-black dark:hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all hover:after:w-full"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

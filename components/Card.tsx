import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-sm transition-all duration-300 hover:shadow-lg hover:border-black/20 dark:hover:border-white/20`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 hover:scale-105"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight text-black dark:text-white">
          {href ? (
            <Link 
              href={href} 
              aria-label={`Link to ${title}`}
              className="transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-black/70 dark:text-white/70">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 text-base leading-6 font-semibold inline-flex items-center gap-1 transition-colors"
            aria-label={`Link to ${title}`}
          >
            Learn more
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card

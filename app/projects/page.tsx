import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Our Apps' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Our Apps
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Discover our collection of innovative B2C mobile applications. Each app is designed to
            deliver exceptional user experiences and solve real-world problems.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="h-full w-full overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60"
              >
                <div className="flex flex-col md:flex-row">
                  {project.imgSrc && (
                    <div className="flex-shrink-0 md:w-1/3">
                      {project.href ? (
                        <Link href={project.href} aria-label={`Link to ${project.title}`}>
                          <Image
                            alt={project.title}
                            src={project.imgSrc}
                            className="h-48 w-full object-cover object-center md:h-full"
                            width={544}
                            height={306}
                          />
                        </Link>
                      ) : (
                        <Image
                          alt={project.title}
                          src={project.imgSrc}
                          className="object-cover object-center w-full h-48 md:h-full"
                          width={544}
                          height={306}
                        />
                      )}
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
                      {project.href ? (
                        <Link href={project.href} aria-label={`Link to ${project.title}`}>
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h2>
                    <p className="prose mb-4 max-w-none text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Technologies:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full px-3 py-1 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.appStoreLinks && (
                      <div className="flex gap-4">
                        {project.appStoreLinks.ios && (
                          <Link
                            href={project.appStoreLinks.ios}
                            className="primary-600 hover:text-primary-500 dark:text-primary-400 text-sm font-medium"
                          >
                            App Store →
                          </Link>
                        )}
                        {project.appStoreLinks.android && (
                          <Link
                            href={project.appStoreLinks.android}
                            className="primary-600 hover:text-primary-500 dark:text-primary-400 text-sm font-medium"
                          >
                            Google Play →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

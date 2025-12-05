import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Our Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Explore our portfolio of innovative B2C mobile applications. Each app is designed to
            deliver exceptional user experiences and solve real-world problems.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((project) => (
              <div key={project.title} className="md max-w-[544px] p-4 md:w-1/2">
                <div className="h-full overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60">
                  <Card
                    title={project.title}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    href={project.href}
                  />
                  {project.technologies && (
                    <div className="px-6 pb-4">
                      <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.appStoreLinks && (
                    <div className="px-6 pb-6">
                      <div className="flex gap-4">
                        {project.appStoreLinks.ios && (
                          <Link
                            href={project.appStoreLinks.ios}
                            className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
                          >
                            App Store →
                          </Link>
                        )}
                        {project.appStoreLinks.android && (
                          <Link
                            href={project.appStoreLinks.android}
                            className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
                          >
                            Google Play →
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

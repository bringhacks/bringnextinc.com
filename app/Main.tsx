import Link from '@/components/Link'
import Image from '@/components/Image'
import ScrollAnimation from '@/components/ScrollAnimation'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-6 pb-12 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-gray-100">
            <span className="block">Bring Next LLC</span>
            <span className="block text-primary-500 dark:text-primary-400">
              Mobile Apps That Make a Difference
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            {siteMetadata.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Link
              href="/projects"
              className="w-full rounded-md bg-primary-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 sm:w-auto"
            >
              Explore Our Apps
            </Link>
            <Link
              href="/contact"
              className="w-full text-center text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 sm:w-auto"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation direction="fade">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                About Our Apps
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                We create innovative B2C mobile applications that deliver exceptional user
                experiences and solve real-world problems.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <ScrollAnimation direction="up" delay={0}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                    Mobile-First Design
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">
                      Our apps are built with mobile-first principles, optimized for iOS and Android to
                      ensure seamless performance across all devices.
                    </p>
                  </dd>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={100}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>
                    User-Centered Design
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">
                      Our apps are designed with users in mind, focusing on intuitive interfaces and
                      engaging experiences that keep users coming back.
                    </p>
                  </dd>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                    Innovation & Quality
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">
                      We leverage cutting-edge technologies and best practices to create scalable,
                      maintainable, and future-proof mobile applications.
                    </p>
                  </dd>
                </div>
              </ScrollAnimation>
            </dl>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation direction="fade">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                Our Apps
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Discover our collection of innovative mobile applications designed to enhance
                productivity, creativity, and entertainment.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={project.title} direction="up" delay={index * 100}>
                <div className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  {project.imgSrc && (
                    <div className="flex-shrink-0">
                      <Link href={project.href || '#'} aria-label={`View ${project.title}`}>
                        <Image
                          className="h-full w-full object-cover"
                          src={project.imgSrc}
                          alt={project.title}
                          width={544}
                          height={500}
                        />
                      </Link>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-800">
                    <div className="flex-1">
                      <Link
                        href={project.href || '#'}
                        className="text-xl font-semibold text-gray-900 dark:text-gray-100"
                      >
                        {project.title}
                      </Link>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={project.href || '#'}
                        className="text-base font-semibold text-primary-600 hover:text-primary-500 dark:text-primary-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation direction="fade" delay={300}>
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="text-base font-semibold text-primary-600 hover:text-primary-500 dark:text-primary-400"
              >
                View All Apps <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation direction="fade">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-gray-900 px-6 py-16 text-center sm:px-12 sm:py-20 dark:bg-gray-800">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Have questions, feedback, or partnership inquiries? We'd love to hear from you.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
                <Link
                  href="/contact"
                  className="w-full rounded-md bg-white px-6 py-3 text-center text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="w-full text-center text-base font-semibold leading-6 text-white sm:w-auto"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

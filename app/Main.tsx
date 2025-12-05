import Link from '@/components/Link'
import Image from '@/components/Image'
import ScrollAnimation from '@/components/ScrollAnimation'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3)
  const totalApps = projectsData.length+"+"
  const totalDownloads = '1.3M+'
  const averageRating = '4.6'

  return (
    <>
      {/* Hero Section */}
      <section className="pt-6 pb-12 md:pt-12 md:pb-20 relative">
        <div className="absolute inset-0 bg-grid opacity-50 dark:bg-grid-dark pointer-events-none"></div>
        <div className="mx-auto max-w-4xl text-center relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            <span className="text-black dark:text-white block">
              Mobile Apps That Make a Difference
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl dark:text-white/70">
            {siteMetadata.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Link
              href="/projects"
              className="bg-black hover:bg-black/90 focus-visible:outline-black dark:bg-white dark:hover:bg-white/90 dark:text-black w-full rounded-lg px-8 py-3 text-center text-base font-semibold text-white shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white sm:w-auto"
            >
              Explore Our Apps
            </Link>
            <Link
              href="/contact"
              className="leading-6 font-semibold text-black dark:text-white w-full text-center text-base sm:w-auto border border-black/20 dark:border-white/20 rounded-lg px-8 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <ScrollAnimation direction="up" delay={0}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="rounded-full bg-black/10 dark:bg-white/10 p-4">
                      <svg
                        className="h-8 w-8 text-black dark:text-white"
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
                  </div>
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    {totalApps}
                  </div>
                  <div className="text-base text-black/70 dark:text-white/70">
                    Total Apps
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={100}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="rounded-full bg-black/10 dark:bg-white/10 p-4">
                      <svg
                        className="h-8 w-8 text-black dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    {totalDownloads}
                  </div>
                  <div className="text-base text-black/70 dark:text-white/70">
                    Total Downloads
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="rounded-full bg-black/10 dark:bg-white/10 p-4">
                      <svg
                        className="h-8 w-8 text-black dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    {averageRating}
                  </div>
                  <div className="text-base text-black/70 dark:text-white/70">
                    Average Rating
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-black/5 dark:bg-white/5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <ScrollAnimation direction="fade">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                About Our Business
              </h2>
              <p className="mt-4 text-lg leading-8 text-black/70 dark:text-white/70">
                We are a mobile application development company specializing in B2C consumer apps. 
                Our mission is to bring real value that helps people live better lives through 
                innovative, high-quality mobile solutions available on iOS and Android platforms.
              </p>
              <p className="mt-4 text-base leading-7 text-black/60 dark:text-white/60">
                <strong className="text-black dark:text-white">Our Core Principle:</strong> Bring Value, Real Value—help people better.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <ScrollAnimation direction="up" delay={0}>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-black dark:text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-black dark:bg-white">
                      <svg
                        className="h-6 w-6 text-white dark:text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                    Real Value First
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black/70 dark:text-white/70">
                    <p className="flex-auto">
                      Every app we develop is built with a clear purpose: to deliver genuine value 
                      that improves users' daily lives. We focus on solving real problems, not just 
                      creating products. Our apps help users be more productive, learn new skills, 
                      make better decisions, and enhance their overall well-being.
                    </p>
                  </dd>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={100}>
                <div className="flex flex-col">
                  <dt className="text-base leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    <div className="bg-gray-900 dark:bg-gray-100 mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                      <svg
                        className="h-6 w-6 text-white dark:text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    Professional Mobile Development
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black/70 dark:text-white/70">
                    <p className="flex-auto">
                      We operate as a legitimate software development business, creating and 
                      publishing mobile applications through official app stores. Our apps are 
                      professionally developed, regularly maintained, and comply with platform 
                      guidelines. We handle all aspects of app development, from design and 
                      engineering to publishing and ongoing support.
                    </p>
                  </dd>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <div className="flex flex-col">
                  <dt className="text-base leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    <div className="bg-gray-900 dark:bg-gray-100 mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                      <svg
                        className="h-6 w-6 text-white dark:text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    </div>
                    User-Focused Excellence
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black/70 dark:text-white/70">
                    <p className="flex-auto">
                      Our commitment to helping people better drives everything we do. We prioritize 
                      user experience, reliability, and continuous improvement. With over 1.3 million 
                      downloads and a 4.6-star average rating, we've proven our ability to create 
                      apps that users trust and value. We maintain transparent business practices 
                      and are committed to long-term user satisfaction.
                    </p>
                  </dd>
                </div>
              </ScrollAnimation>
            </dl>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-black/2 dark:bg-white/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <ScrollAnimation direction="fade">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                Our Apps
              </h2>
              <p className="mt-4 text-lg leading-8 text-black/70 dark:text-white/70">
                Discover our collection of innovative mobile applications designed to enhance
                productivity, creativity, and entertainment.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={project.title} direction="up" delay={index * 100}>
                <div className="flex flex-col overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-sm transition-all duration-300 hover:shadow-lg hover:border-black/20 dark:hover:border-white/20">
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
                  <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-black">
                    <div className="flex-1">
                      <Link
                        href={project.href || '#'}
                        className="text-xl font-semibold text-black dark:text-white"
                      >
                        {project.title}
                      </Link>
                      <p className="mt-3 text-base text-black/60 dark:text-white/60">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={project.href || '#'}
                        className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 text-base font-semibold transition-colors"
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
                className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 text-base font-semibold transition-colors"
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
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white px-6 py-16 text-center sm:px-12 sm:py-20 dark:bg-black shadow-xl relative border border-black/10 dark:border-white/10">
              <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none dark:bg-grid-dark"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                  Get in Touch
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/70 dark:text-white/70">
                  Have questions, feedback, or partnership inquiries? We'd love to hear from you.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
                  <Link
                    href="/contact"
                    className="w-full rounded-lg bg-black px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors sm:w-auto dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus-visible:outline-white"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/about"
                    className="w-full text-center text-base font-semibold leading-6 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white sm:w-auto transition-colors"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

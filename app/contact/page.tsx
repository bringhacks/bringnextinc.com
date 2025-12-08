'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.bringwise.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return (
    <>
      <div className="divide-y divide-black/10 dark:divide-white/10">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-black sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white">
            Contact Us
          </h1>
          <p className="text-lg leading-7 text-black/60 dark:text-white/60">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you. Get in
            touch with us today.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">Company</h3>
                  <p className="text-black/70 dark:text-white/70">BringNext LLC</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Representative
                  </h3>
                  <p className="text-black/70 dark:text-white/70">Hung Do</p>
                  <p className="text-black/70 dark:text-white/70">0978 236 434</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">Email</h3>
                  <Link
                    href={`mailto:${siteMetadata.email}`}
                    className="text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  >
                    {siteMetadata.email}
                  </Link>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Location
                  </h3>
                  <p className="text-black/70 dark:text-white/70">
                    9340, 1021 E Lincolnway, Cheyenne, WY, Laramie, US, 82001
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Business Focus
                  </h3>
                  <p className="text-black/70 dark:text-white/70">B2C Mobile Applications</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black dark:text-white"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-black/20 shadow-sm transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-black/20 sm:text-sm dark:border-white/20 dark:bg-black/50 dark:text-white dark:focus:ring-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black dark:text-white"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-black/20 shadow-sm transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-black/20 sm:text-sm dark:border-white/20 dark:bg-black/50 dark:text-white dark:focus:ring-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-black dark:text-white"
                  >
                    Company/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-black/20 shadow-sm transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-black/20 sm:text-sm dark:border-white/20 dark:bg-black/50 dark:text-white dark:focus:ring-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black dark:text-white"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-black/20 shadow-sm transition-colors focus:border-black focus:ring-2 focus:ring-black focus:ring-black/20 sm:text-sm dark:border-white/20 dark:bg-black/50 dark:text-white dark:focus:ring-white/20"
                  />
                </div>

                {status === 'error' && (
                  <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
                    <p className="text-sm text-red-800 dark:text-red-200">{errorMessage}</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg bg-black px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus-visible:outline-white"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

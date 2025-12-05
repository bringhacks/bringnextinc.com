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
      const response = await fetch('/api/contact', {
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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how
            we can bring your mobile app idea to life.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Email
                  </h3>
                  <Link
                    href={`mailto:${siteMetadata.email}`}
                    className="text-primary-600 hover:text-primary-500 dark:text-primary-400"
                  >
                    {siteMetadata.email}
                  </Link>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">United States</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Business Focus
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">B2C Mobile Application Development</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Company/Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:text-sm"
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
                    className="w-full rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-primary-500 dark:hover:bg-primary-400"
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


import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


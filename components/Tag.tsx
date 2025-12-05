import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white mr-3 text-sm font-medium uppercase transition-colors"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

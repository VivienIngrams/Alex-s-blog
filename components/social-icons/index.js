import Mail from './mail.svg'
import GoogleScholar from './google-scholar.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import ResearchGate from './researchgate.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  googleScholar: GoogleScholar,
  linkedin: Linkedin,
  twitter: Twitter,
  researchGate: ResearchGate,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon

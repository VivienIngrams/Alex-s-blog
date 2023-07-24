import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="googleScholar" href={siteMetadata.googleScholar} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="researchGate" href={siteMetadata.researchGate} size="6" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
        </div>
        <div className="mb-2 flex flex-col items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</Link>
        </div>
        <div className="mb-8 text-center text-sm text-green-800 dark:text-gray-400">
          <Link href="https://www.universiteitleiden.nl/en/staffmembers/alex-ingrams#tab-1">
            Leiden University Institute of Public Administration
          </Link>
        </div>
      </div>
    </footer>
  )
}

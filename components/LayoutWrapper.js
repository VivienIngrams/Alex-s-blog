import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'

import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between text-yellow-600">
        <header className="flex w-full items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-xl font-semibold sm:block">
                    {/* {siteMetadata.headerTitle} */}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base  leading-5">
            <div className="">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-normal uppercase text-yellow-600 dark:text-gray-100 sm:p-4 sm:text-2xl"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

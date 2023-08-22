import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '../components/Link'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, cv } = frontMatter

  const openCV = () => {
    window.open(cv, '_blank')
  }

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="bg-neutral-200">
        <div className="flex-col items-center space-y-2 ">
          <div className=" flex flex-col items-end xl:col-span-2 ">
            <h3 className=" pt-10 font-playfair text-6xl leading-8 tracking-tight text-black md:pt-40">
              {name}
            </h3>
          </div>
          <div className="prose max-w-none pt-2 text-right md:ml-20 md:pl-20 md:pb-10">
            <div>{children}</div>{' '}
          </div>
          <div className="flex-grow items-center text-center xl:col-span-2">
            <Link
              className="m-10 rounded border-2 border-yellow-600 bg-neutral-100 px-4 py-2 font-khand font-bold text-black "
              href="/projects"
            >
              Current Research
            </Link>
            <button
              className="m-10 rounded border-2 border-yellow-600 bg-neutral-100 px-4 py-2 font-khand font-bold  text-black  "
              onClick={openCV}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

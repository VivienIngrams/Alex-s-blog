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
        <div className="flex-col items-center space-y-2  xl:gap-x-8 xl:space-y-0">
          <div className=" flex flex-col items-center xl:col-span-2 ">
            {/* <Image
              src={avatar}
              alt="avatar"
              width="100px"
              height="120px"
              className="h-50 w-50"
              style={{ verticalAlign: 'top', objectFit: 'cover !important' }}
            /> */}
            <h3 className="p-10  font-playfair text-6xl leading-8 tracking-tight text-black md:mt-20">
              {name}
            </h3>
            {/* <div className="m-3 text-center text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-center uppercase text-green-800 dark:text-gray-400">{company}</div> */}
          </div>
          <div className="prose max-w-none flex-grow pt-8 text-center  xl:col-span-2">
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

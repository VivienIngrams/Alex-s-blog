import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    researchGate,
    googleScholar,
    cv,
  } = frontMatter

  const openCV = () => {
    window.open(cv, '_blank')
  }

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="my-auto justify-center divide-y  divide-gray-200 rounded-md border-2 border-yellow-600 bg-white p-10 dark:divide-gray-700">
        <div className="flex-wrap items-center space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center xl:col-span-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 font-sans text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-center text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-center text-gray-500 dark:text-gray-400">{company}</div>
          </div>
          <div className="prose  max-w-none flex-grow items-center  pt-8 pb-8 text-center dark:prose-dark xl:col-span-2">
            <div>{children}</div>
            <div>
              <button
                className="rounded-lg border-2 border-yellow-600 bg-neutral-200 px-4 py-2 text-black dark:bg-white dark:text-black"
                onClick={openCV}
              >
                CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

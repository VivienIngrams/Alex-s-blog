import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

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
            <Image
              src={avatar}
              alt="avatar"
              width="100px"
              height="120px"
              className="h-50 w-50"
              style={{ verticalAlign: 'top', objectFit: 'cover !important' }}
            />
            <h3 className=" p-3 text-2xl font-normal uppercase leading-8 tracking-tight text-yellow-600">
              {name}
            </h3>
            {/* <div className="m-3 text-center text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-center uppercase text-green-800 dark:text-gray-400">{company}</div> */}
          </div>
          <div className="prose  max-w-none flex-grow items-center  pt-8 pb-8 text-center dark:prose-dark xl:col-span-2">
            <div>{children}</div>
            <div>
              <button
                className="mx-5 rounded-lg border-2 border-yellow-600 bg-neutral-200 px-4 py-2 font-bold text-[#ca8a04] dark:bg-white dark:text-black"
                onClick={openCV}
              >
                Current Research
              </button>
              <button
                className="mx-5 rounded-lg border-2 border-yellow-600 bg-neutral-200 px-4 py-2 font-bold text-[#ca8a04] dark:bg-white dark:text-black"
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

import React, { useState, useEffect, useCallback } from 'react'

import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Projects() {
  const [projects, setprojects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchprojectsHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json'
      )
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      const projectsData = []

      for (const key in data) {
        projectsData.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          href: data[key].href,
          linkText: data[key].linkText,
        })
      }

      setprojects(projectsData)
      console.log(projectsData)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchprojectsHandler()
  }, [fetchprojectsHandler])

  // async function addProjectHandler(project) {
  //   const response = await fetch(
  //     'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(project),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   )
  //   const data = await response.json()
  //   console.log(data)
  // }

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 ">
        <div className="flex justify-center space-y-2 p-4">
          <h1 className="inline-block text-center font-playfair text-2xl leading-9 tracking-tight text-black sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Current Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 "></p>
        </div>

        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => (
              <Card
                key={d.id}
                title={d.title}
                description={d.description}
                href={d.href}
                linkText={d.linkText}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" pb-2 text-right">
        <Link href="/login">Login</Link>
      </div>
    </>
  )
}

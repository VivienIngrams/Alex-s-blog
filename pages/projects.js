import React, { useState, useEffect, useCallback } from 'react'

import siteMetadata from '@/data/siteMetadata'
// import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import AddProject from '@/components/AddProject'

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
      // console.log(projectsData)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchprojectsHandler()
  }, [fetchprojectsHandler])

  async function addProjectHandler(project) {
    const response = await fetch(
      'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json',
      {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
    // console.log(data)
  }

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Current Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* Showcase your projects with a hero image (16 x 9) */}
          </p>
        </div>
        {/* <AddProject onAddProject={addProjectHandler} /> */}
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => (
              <Card
                key={d.id}
                title={d.title}
                description={d.description}
                // imgSrc={d.imgSrc}
                href={d.href}
                linkText={d.linkText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

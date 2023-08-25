/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback, useRef } from 'react'

function EditProjects(props) {
  const [message, setMessage] = useState(null)

  const titleRef = useRef('')
  const descriptionRef = useRef('')
  const linkRef = useRef('')
  const linkTextRef = useRef('')

  function submitHandler(event) {
    event.preventDefault()

    setMessage(true)
  }
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

  return (
    <div className="flex flex-col justify-around sm:flex-row">
      <form onSubmit={submitHandler}>
        <h2 className="p-4 text-center font-khand text-2xl font-bold text-neutral-500">
          Edit Research Projects
        </h2>
        {message && (
          <div className="text-center">
            <p>Project saved to database!</p>
          </div>
        )}
        {projects.map((project) => (
          <div className="flex flex-col items-end " key={project.id}>
            <div className="p-5">
              <label className="p-2 font-bold font-normal text-black" htmlFor="title">
                Title
              </label>
              <textarea
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                rows="4"
                id="title"
                ref={titleRef}
                value={project.title}
                // onChange={(event) => setProject({ ...project, title: event.target.value })}
              />
            </div>
            <div className="p-5 ">
              <label className="p-2 font-bold font-normal text-black" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                rows="8"
                id="description"
                ref={descriptionRef}
                value={project.description}
                // onChange={(event) => setProject({ ...project, description: event.target.value })}
              ></textarea>
            </div>
            <div className="p-5 ">
              <label className="p-2 font-bold font-normal text-black" htmlFor="link">
                Link
              </label>
              <input
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                type="text"
                id="link"
                ref={linkRef}
                value={project.href}
                // onChange={(event) => setProject({ ...project, href: event.target.value })}
              />
            </div>
            <div className="p-5 ">
              <label className="p-2 font-bold font-normal text-black" htmlFor="link-text">
                Text for link
              </label>
              <textarea
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                rows="1"
                id="link-text"
                ref={linkTextRef}
                value={project.linkText}
                // onChange={(event) => setProject({ ...project, linkText: event.target.value })}
              ></textarea>
            </div>
            <div className="mb-10 flex flex-row justify-between">
              <div className="mb-10 rounded-2xl bg-yellow-600 p-2">
                <button className="rounded-2xl text-center text-black" type="submit">
                  Edit Project
                </button>
              </div>
              <div className="mx-5 mb-10 rounded-2xl bg-red-600 p-2">
                <button className="rounded-2xl text-center text-black" type="submit">
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  )
}

export default EditProjects

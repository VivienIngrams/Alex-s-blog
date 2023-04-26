/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'

function AddProject(props) {
  const titleRef = useRef('')
  const descriptionRef = useRef('')
  const linkRef = useRef('')
  const linkTextRef = useRef('')

  function submitHandler(event) {
    event.preventDefault()

    // could add validation here...

    const project = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      href: linkRef.current.value,
      linkText: linkTextRef.current.value,
    }

    props.onAddProject(project)
  }

  return (
    <form className="wrap flex flex-col items-center lg:flex-row" onSubmit={submitHandler}>
      <div className="m-3">
        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
          type="text"
          id="title"
          ref={titleRef}
        />
      </div>
      <div className="m-3 ">
        <label className="font-bold" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
          rows="5"
          id="description"
          ref={descriptionRef}
        ></textarea>
      </div>
      <div className="m-3">
        <label className="font-bold" htmlFor="link">
          Link
        </label>
        <input
          className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
          type="text"
          id="link"
          ref={linkRef}
        />
      </div>
      <div className="m-3 ">
        <label className="font-bold" htmlFor="link-text">
          Text for link
        </label>
        <textarea
          className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
          rows="1"
          id="link-text"
          ref={linkTextRef}
        ></textarea>
      </div>
      <div className="mt-2 w-full items-center rounded-md shadow-sm ">
        <button
          className="btn rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0"
          type="submit"
        >
          Add Project
        </button>
      </div>
    </form>
  )
}

export default AddProject

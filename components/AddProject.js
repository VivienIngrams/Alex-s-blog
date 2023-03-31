/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'

function AddProject(props) {
  const titleRef = useRef('')
  const descriptionRef = useRef('')
  const linkRef = useRef('')

  function submitHandler(event) {
    event.preventDefault()

    // could add validation here...

    const project = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      href: linkRef.current.value,
    }

    props.onAddProject(project)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className="">
        <label htmlFor="description">Description</label>
        <textarea rows="5" id="description" ref={descriptionRef}></textarea>
      </div>
      <div className="">
        <label htmlFor="link">Link</label>
        <input type="text" id="link" ref={linkRef} />
      </div>
      <button>Add Project</button>
    </form>
  )
}

export default AddProject

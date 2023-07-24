/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'

function AddProject(props) {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  function submitHandler(event) {
    event.preventDefault()

    // could add validation here...
  }

  return (
    <div className="flex flex-col justify-around sm:flex-row">
      <form onSubmit={submitHandler}>
        <h2 className="p-4 text-center text-2xl font-bold uppercase text-neutral-500">Login</h2>
        <div className="flex flex-col items-end ">
          <div className="p-5">
            <label className="p-2 font-bold  font-normal text-black" htmlFor="email">
              Email
            </label>
            <input
              className="w-72 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              type="email"
              id="email"
              ref={emailRef}
            />
          </div>
          <div className="p-5 ">
            <label className="p-2 font-bold font-normal text-black" htmlFor="password">
              Password
            </label>
            <input
              className="w-72 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              type="password"
              id="password"
              ref={passwordRef}
            />
          </div>

          <div className="m-10 rounded-2xl bg-yellow-600 p-2">
            <button className="rounded-2xl text-center text-black" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProject

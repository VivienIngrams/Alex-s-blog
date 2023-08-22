/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB7XnDjM6cA1Us4p9PpzgX6tFyFZHmpmJI',
  authDomain: 'projects-cec6a.firebaseapp.com',
  databaseURL: 'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'projects-cec6a',
  storageBucket: 'projects-cec6a.appspot.com',
  messagingSenderId: '815842606771',
  appId: '1:815842606771:web:16cd1350c43358171abac6',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

function LoginForm(props) {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  function submitHandler(event) {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    // could add validation here...
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        console.log('signed in?')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div className="flex flex-col justify-around sm:flex-row">
      <form onSubmit={submitHandler}>
        <h2 className="p-4 text-center font-khand text-2xl font-bold text-neutral-500">
          Access Admin Page
        </h2>
        <div className="flex flex-col items-end ">
          <div className="p-5">
            <label className="p-2 font-bold  font-normal text-black" htmlFor="email">
              Email
            </label>
            <input
              className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
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
              className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
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

export default LoginForm

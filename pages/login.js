import { useState } from 'react'

import LoginForm from '@/components/LoginForm'
import AddProject from '@/components/AddProject'
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
const auth = getAuth(app)

function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  async function loginHandler(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setLoggedIn(true)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  async function addProjectHandler(project) {
    const response = await fetch(
      'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json',
      {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${userId}`,
        },
      }
    )
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      {!loggedIn && <LoginForm onLogin={loginHandler} />}
      {loggedIn && <AddProject onAddProject={addProjectHandler} />}
    </>
  )
}
export default LoginPage

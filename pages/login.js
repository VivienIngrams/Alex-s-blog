import { useState } from 'react'

import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import LoginForm from '@/components/LoginForm'
import AddProject from '@/components/AddProject'
import EditProjects from '@/components/EditProjects'

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
  const [loggedIn, setLoggedIn] = useState(<LoginForm onLogin={loginHandler} />)

  async function loginHandler(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setLoggedIn(
          <>
            <AddProject onAddProject={addProjectHandler} />
            <EditProjects />
          </>
        )
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }
  async function addProjectHandler(project) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken()

        const response = await fetch(
          'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json',
          {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
              // 'Authorization': `Bearer ${idToken}`,
              'Content-Type': 'application/json',
            },
          }
        )

        if (response.ok) {
          const data = await response.json()
          console.log(data)
        } else {
          console.log('Error:', response.statusText)
        }
      } else {
        console.log('User is not authenticated')
      }
    })
  }

  return (
    <>
      {loggedIn}
      {/* {!loggedIn && <LoginForm onLogin={loginHandler} />}
      {loggedIn && <AddProject onAddProject={addProjectHandler} />} */}
      {/* {loggedIn && <EditProjects />} */}
    </>
  )
}

export default LoginPage

import LoginForm from '@/components/LoginForm'
import AddProject from '@/components/AddProject'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid
    // ...
  } else {
    // User is signed out
    // ...
  }
})

function LoginPage() {
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
    console.log(data)
  }

  return (
    <>
      <LoginForm />
      <AddProject onAddProject={addProjectHandler} />
    </>
  )
}
export default LoginPage

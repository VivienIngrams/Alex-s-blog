import LoginForm from '@/components/LoginForm'
import AddProject from '@/components/AddProject'

function LoginPage() {
  let content = <LoginForm />

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
      {content}
      {/* <LoginForm /> */}
      {/* <AddProject onAddProject={addProjectHandler} /> */}
    </>
  )
}
export default LoginPage

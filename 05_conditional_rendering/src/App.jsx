//conditional rendering: conditional rendering is a way to render a component based on a condition. 

import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting isLogged={true} name='Darshan' />
    </>
  )
}

export default App

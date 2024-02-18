import Student from "./Student"

function App() {

  const StudentInfo = [
    {name: "Darshan", age: 19, isStudent: true},
    {name: "Josh", age: 18, isStudent: false},
    {name: "alexa", age: 18, isStudent: false},
    {name: "siri", age: 18, isStudent: false},
  ]

  return (
    <div>
      {StudentInfo.map((student, index) => (
        <Student key={index} name={student.name} age={student.age} isStudent={student.isStudent} />
      ))}
      <Student />
    </div>
  )

}

export default App

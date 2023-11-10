import { useState } from 'react'
import PersonalDetails from './components/personal-info/PersonalDetails'
import Buttons from './components/Button'
import EducationSection from './components/education/EducationSection'
import './App.css'

function App() {
  const [personalDetails, setPersonalDetails] = useState({ fullName: '', email: '', phoneNumber: '', address: '' })
  const [educationList, setEducationList] = useState([{ schoolName: '', degree: '', date: '' },])

  function handleEducationChange(event, id) {
    const { name, value } = event.target;
    setEducationList(educationList.map((entry, index) => 
      index === id ? { ...entry, [name]: value } : entry
    ));
  }

  function addEducation() {
    setEducationList((prevList) => [...prevList, { schoolName: '', degree: '', date: '' },])
  }

  function handleChange(event) {
    const {id, value} = event.target
    setPersonalDetails(prevDetails => ({...prevDetails, [id]: value,}))
  }

  return (
    <div className="App">
      <PersonalDetails onChange={handleChange} {...personalDetails} />
      <EducationSection educationList={educationList} onEducationChange={handleEducationChange} onAddEducation={addEducation} />
      <Buttons cancel={() => console.log("Cancel")} save={() => console.log("Save")} remove={() => console.log("Remove")}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'

function App() {
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }



  return (
    <div className='container'>
    <PrimaryInput 
    value={email} 
    placeholder="Digite seu e-mail" onChange={handleChange}
    label="E-mail"
    />
    </div>
      
  )
}

export default App

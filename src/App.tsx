import './App.css'
import { LoginForm } from './components/LoginForm' 
import { RegisterForm } from './components/RegisterForm' 
import { useState } from 'react'

function App() {

  const container = 
  `
    flex
    justify-center
    items-center
    w-screen
    h-screen
    p-10
    backdrop-blur-[2.5px]
    bg-gradient-to-r from-red-600 to-[#ff9437]
  `

  const [recoverPass, setRecoverPass] = useState(false)
  const [register, setRegister] = useState(false)
  const [checkLogin, setLogin] = useState(false)
  const [mainPage, setMainPage] = useState(false)

  const HandleClickRecoverPass = () => {
    setRecoverPass(true)
  }

  const HandleClickRegister = () => {
    setRegister(true)
  }

  const HandleClickLogin = () => {
    setLogin(true)
    setMainPage(true)
  }

  const HandleClickRegisterTrue = () => {
    setRegister(false)
  }
  return (

   <div className={container}>
    
    {!recoverPass && !register && !checkLogin &&
      <LoginForm
        functionClick1={HandleClickRecoverPass}
        functionClick2={HandleClickRegister}
        functionClick3={HandleClickLogin}
      />
    }

    {recoverPass &&
      <div> Recuperar senha </div>
    }

    {register &&
      <RegisterForm functionClickRegister1={HandleClickRegisterTrue}/>
    }

    {checkLogin && mainPage &&
      <div> Logado </div>
    }
      
   </div>
  )
}

export default App

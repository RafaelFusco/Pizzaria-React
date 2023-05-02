import './App.css'
import { LoginForm } from './components/loginForm' 
import { useState } from 'react'

function App() {

  const container = 
  `
    flex
    justify-center
    items-center
    w-screen
    h-screen
    backdrop-blur-[2.5px]
    bg-gradient-to-r from-red-600 to-[#ff9437]
  `

  const [recoverPass, setRecoverPass] = useState(false)
  const [register, setRegister] = useState(false)
  const [checkLogin, setLogin] = useState(false)

  const HandleClickRecoverPass = () => {
    setRecoverPass(true)
}

  const HandleClickRegister = () => {
    setRegister(true)
}

  const HandleClickLogin = () => {
    setLogin(true)
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
      <div> Registrar </div>
    }

    {checkLogin &&
      <div> Logado </div>
    }
      
   </div>
  )
}

export default App

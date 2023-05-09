import './App.css'
import { LoginForm } from './components/LoginForm' 
import { RecoverPass } from './components/RecoverPassForm'
import { RegisterForm } from './components/RegisterForm' 
import { AppStyles } from './stylesTail'
import { useEffect, useState }  from 'react'
import { Carrosel } from './components/Carrosel'
import { MainPage } from './components/MainPage/MainPage'

function App() {

  const [width, setWidth] = useState(window.innerWidth);

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

  const HandleClickRegisterFalse = () => {
    setRegister(false)
  }

  const HandleClickRecoverFalse = () => {
    setRecoverPass(false)
  }

  useEffect(() => {
    const HandleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', HandleResize);

    return () => window.removeEventListener('resize', HandleResize);
  }, []);

  return (

   <div className={!checkLogin ? `${AppStyles.container1} ${AppStyles.bgImgContainer}` : `${AppStyles.container2} ${AppStyles.bgImgContainer}`}>
    {!checkLogin && !mainPage &&
      <>
        {width >= 850 &&
          <Carrosel />
        }
        <div className={AppStyles.loginContainer}>
          {!recoverPass && !register && !checkLogin &&
            <LoginForm functionClick1={HandleClickRecoverPass} functionClick2={HandleClickRegister} functionClick3={HandleClickLogin}/>
          }

          {recoverPass && !checkLogin &&
            <RecoverPass functionClickRecover1={HandleClickRecoverFalse}/>
          }

          {register && !checkLogin &&
            <RegisterForm functionClickRegister1={HandleClickRegisterFalse}/>
          }
        </div>
      </>
    }

    {checkLogin && mainPage &&
      <MainPage />
    }
  </div>
  )
}

export default App

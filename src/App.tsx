import './App.css'
import { LoginForm } from './components/LoginForm' 
import { RecoverPass } from './components/RecoverPassForm'
import { RegisterForm } from './components/RegisterForm' 
import { AppStyles } from './stylesTail'
import { useEffect, useState }  from 'react'
import { Carrosel } from './components/Carrosel'
import { MainPage } from './components/MainPage'

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

  const HandleBack = () => {
    setRecoverPass(false)
    setRegister(false)
  } 

  useEffect(() => {
    const HandleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', HandleResize);

    return () => window.removeEventListener('resize', HandleResize);
  }, []);

  const buttonExitMenu = () => {
    setLogin(false)
    setMainPage(false)
  }

  const buttonPizzasMenu = () => {
    setLogin(true)
    setMainPage(true)
  }

  return (
    <>
      {!checkLogin &&
        <div className={`${AppStyles.container1} ${AppStyles.bgImgContainer}`}>
          {!checkLogin && !mainPage &&
            <>
              {width >= 1024 &&
                <Carrosel />
              }
              <div className={AppStyles.loginContainer}>
                {!recoverPass && !register && !checkLogin &&
                  <LoginForm functionClick1={HandleClickRecoverPass} functionClick2={HandleClickRegister} functionClick3={HandleClickLogin}/>
                }

                {recoverPass && !checkLogin &&
                  <RecoverPass functionClickRecover1={HandleClickRecoverFalse} functionClickRecover2={HandleBack}/>
                }

                {register && !checkLogin &&
                  <RegisterForm functionClickRegister1={HandleClickRegisterFalse} functionClickRegister2={HandleBack}/>
                }
              </div>
            </>
          }
        </div>
      }
      {checkLogin && mainPage &&
      <div className={AppStyles.container2}>
        <MainPage functionClick1={buttonExitMenu} functionClick2={buttonPizzasMenu} functionClick3={buttonExitMenu}/>
      </div>
      }
  </>
  )
}

export default App

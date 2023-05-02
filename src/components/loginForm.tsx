import { useState } from 'react'

import logo from '../assets/icons8-pizza-48.png'
import styles from '../styles.module.css'

interface Props {
    functionClick1: () => void;
    functionClick2: () => void;
    functionClick3: () => void;
}

export const LoginForm: React.FC<Props> = ({functionClick1, functionClick2, functionClick3}) => {
  
    const loginContainer = 
    `
    flex flex-col justify-center items-center
    w-mx h-max p-8
    bg-[#ffffff8b]
    rounded
    transition-all duration-300 ease-in-out
    shadow-[-5px_0px_10px_5px_rgba(0,0,0,0.3)]
    `
  
    const headerContainer = 
    `
    flex items-center
    pb-3
    `

    const logoName = 
    `
    font-bold text-[#ff6a00] text-2xl
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]
    cursor-default
    `

    const formContainer = 
    `
    w-full p-2
    rounded
    `

    const inputContainer = 
    `
    flex flex-col items-start
    w-full mt-5
    border-b-2
    drop-shadow-[-1px_1px_1px_rgba(0,0,0,0.5)]
    `

    const recoverPassword = 
    `
    my-3 
    text-[16px] font-bold text-[#ff6a00]
    cursor-pointer
    drop-shadow-[0px_1px_1px_rgba(0,0,0,0.8)]
    `
  
    const buttonEnter = 
    `
    w-full m-2 p-1
    font-bold text-white
    bg-[#f77300]
    rounded
    drop-shadow-[-1px_1px_1px_rgba(0,0,0,0.5)]
    transition duration-300 ease-in-out
    hover:bg-[#cd6000] hover:drop-shadow-none hover:text-[#c4c4c4]
    `

    const dontHaveAcc =
    `
    mt-6
    font-bold
    drop-shadow-[0px_1px_1px_rgba(0,0,0,0.8)]
    cursor-default
    `

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RecoverPass = () => {
        functionClick1()
    }

    const Register = () => {
        functionClick2()
    }

    const Login = () => {
        functionClick3()
    }
    return (
        <div className={loginContainer}>
            <div className={headerContainer}>
                <img src={logo} alt="" />
                <span className={logoName}>PiBox</span>
            </div>

            <form className={formContainer}>
                <div className={inputContainer}>
                    <input
                    className={email !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                    type="text"
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <span className={styles.focusInput} data-placeholder='Email'></span>
                </div>

                <div className={inputContainer}>
                    <input
                    className={password !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                    type="password"
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <span className={styles.focusInput} data-placeholder='Senha'></span>
                </div>
            </form>  

            <a className={recoverPassword} onClick={() => RecoverPass()}>Esqueceu sua senha?</a>

            <button className={buttonEnter} onClick={() => Login()}>Entrar</button>

            <span className={dontHaveAcc}>Não tem uma conta ? <a className='text-[#ff6a00]' onClick={() => Register()}>Registrar-se</a></span>
      </div>
    )
}
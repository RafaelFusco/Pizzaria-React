import { useState } from 'react'

import { LoginStyles } from './stylesTail';

import logo from '../../assets/icons8-pizza-48.png'
import styles from './styles.module.css'

interface Props {
    functionClick1: () => void;
    functionClick2: () => void;
    functionClick3: () => void;
}

export const LoginForm: React.FC<Props> = ({functionClick1, functionClick2, functionClick3}) => {

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
        <div className={LoginStyles.loginContainer}>
            <div className={LoginStyles.headerContainer}>
                <img className='pointer-events-none drop-shadow-[-2px_1px_1px_rgba(0,0,0,0.3)]' src={logo} alt="" />
            </div>

            <form className={LoginStyles.formContainer}>
                <div className={LoginStyles.inputContainer}>
                    <input
                    className={email !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                    type="text"
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <span className={styles.focusInput} data-placeholder='Email'></span>
                </div>

                <div className={LoginStyles.inputContainer}>
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

            <a className={LoginStyles.recoverPassword} onClick={() => RecoverPass()}>Esqueceu sua senha?</a>

            <button className={LoginStyles.buttonEnter} onClick={() => Login()}>Entrar</button>

            <span className={LoginStyles.dontHaveAcc}>Não tem uma conta ? <a className='text-[#ff6a00]' onClick={() => Register()}>Registrar-se</a></span>
      </div>
    )
}
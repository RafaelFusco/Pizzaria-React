import { useState } from 'react'

import { LoginStyles } from './stylesTail';

import logo from '../../assets/icons8-pizza-48.png'
import styles from './styles.module.css'

interface Props {
    functionClick1: () => void;
    functionClick2: () => void;
    functionClick3: () => void;
}

export const LoginForm: React.FC<Props> = ({ functionClick1, functionClick2, functionClick3 }) => {

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
   
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        Login()

    }

    return (
        <>
            <div className={LoginStyles.headerContainer}>
                <img className='pointer-events-none' src={logo} alt="" />
            </div>

            <form onSubmit={handleSubmit} className={LoginStyles.formContainer}>
                <div className={LoginStyles.inputContainer}>
                    <input
                        className={email !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                        required
                        type="email"
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className={styles.focusInput} data-placeholder='Email'></span>
                </div>

                <div className={`${LoginStyles.inputContainer} mb-5`}>
                    <input
                        className={password !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                        required
                        type="password"
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className={styles.focusInput} data-placeholder='Senha'></span>
                </div>

                <a className={LoginStyles.recoverPassword} onClick={() => RecoverPass()}>Esqueceu sua senha?</a>

                <button type='submit' className={LoginStyles.buttonEnter}>Entrar</button>

            </form>

            <span className={LoginStyles.dontHaveAcc}>Não tem uma conta ? <a className='text-[#FBB600] cursor-pointer' onClick={() => Register()}>Registrar-se</a></span>

            <div className='flex justify-center mt-8'>
                <h1 className='font-bold'>Entrar como visitante</h1>
                <button className={LoginStyles.buttonBack} onClick={() => Login()}>{'>'}</button>
            </div>
        </>
    )
}
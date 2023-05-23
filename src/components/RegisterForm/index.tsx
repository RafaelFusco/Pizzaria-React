import { useState } from "react"

import { RegisterStyles } from "./stylesTail"
import styles from './styles.module.css'
import imgPerfilDefault from '../../assets/perfil.png'

interface Props {
    functionClickRegister1: () => void;
    functionClickRegister2: () => void;
}

export const RegisterForm: React.FC<Props> = ({functionClickRegister1, functionClickRegister2}) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')

    const [email, setEmail] = useState('')
    const [checkEmail, setCheckEmail] = useState('')

    const [imgPerfil, setImgPerfil] = useState<string>('')

    const handleSelectImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        const arquivo = event.target.files?.[0];
        if (arquivo) {
            const url = URL.createObjectURL(arquivo);
            setImgPerfil(url);  
        } else {
            setImgPerfil('')
        }
      }

    const RegisterTrue = () => {
        functionClickRegister1()
    }

    const HandleBack = () => {
        functionClickRegister2()
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        RegisterTrue()
    
        setName('')
        setLastName('')
        
        setEmail('')
        setCheckEmail('')

        setImgPerfil('')
      }

    return (
        <>
            <div className="m-auto">
                <form onSubmit={handleSubmit} className="w-max h-max box-border flex flex-col">
                    <div className="display flex flex-col items-center">

                        <div>
                            <img src={imgPerfil !== '' ? imgPerfil : imgPerfilDefault} className="w-[128px] h-[128px]"/>
                        </div>

                        <div className={`${RegisterStyles.inputContainer} border-none`}>
                            <input 
                            className={`${styles.inputStyle} text-[12px] h-max`}
                            type="file"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            onChange={handleSelectImg}
                            />
                        </div>
                    </div>    

                    <div className="display flex flex-col items-center mt-1">
                        <div className={RegisterStyles.inputContainer}>
                            <input
                            className={ name !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                            required
                            type="name"
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            <span className={styles.focusInput} data-placeholder='Nome'></span>
                        </div>

                        <div className={RegisterStyles.inputContainer}>
                            <input
                            className={ lastName !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                            required
                            type="name"
                            name='lastName'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            />
                            <span className={styles.focusInput} data-placeholder='Sobrenome'></span>
                        </div>
                    </div>

                    <div className="display flex flex-col items-center my-4">
                        <div className={RegisterStyles.inputContainer}>
                            <input
                            className={ email !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                            required
                            type="email"
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <span className={styles.focusInput} data-placeholder='Email'></span>
                        </div>

                        <div className={RegisterStyles.inputContainer}>
                            <input
                            className={ email !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                            required
                            type="email"
                            name='email'
                            value={checkEmail}
                            onChange={e => setCheckEmail(e.target.value)}
                            />
                            <span className={styles.focusInput} data-placeholder='Confirme seu Email'></span>
                        </div>
                    </div>

                    <button type="submit" className={`${RegisterStyles.buttonEnter} mt-5`}>Enviar</button>
                </form>
            </div>

            <div className="flex flex-row w-full">
                <button className={RegisterStyles.buttonBack} onClick={() => HandleBack()}>{"<"}</button>
                <h1>Voltar</h1>
            </div>
        </>
    )
}
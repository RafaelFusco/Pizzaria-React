import { useState } from "react"
import { RecoverStyles } from "./stylesTail"
import styles from "./styles.module.css"

interface Props {
    functionClickRecover1: () => void
    functionClickRecover2: () => void
}

export const RecoverPass: React.FC <Props> = ({functionClickRecover1, functionClickRecover2}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const RecoverPassTrue = () => {
        functionClickRecover1()
    }

    const HandleBack = () => {
        functionClickRecover2()
    }

    return (
             <>
                <div className="m-auto">
                    <form className={RecoverStyles.formContainer}>

                        <p className={RecoverStyles.information}>Ao preencher os campos abaixo, verificaremos se estao corretos.
                            Caso esteja, mandaremos uma nova senha para sua conta
                        </p>
                        <div className={RecoverStyles.inputContainer}>
                            <input
                            className={ name !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                            required
                            type="text"
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            <span className={styles.focusInput} data-placeholder='Nome'></span>
                        </div>

                        <div className={RecoverStyles.inputContainer}>
                            <input
                            className={ email !== '' ? `${styles.inputStyle} ${styles.hasVal}` : `${styles.inputStyle}`}
                            required
                            type="text"
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <span className={styles.focusInput} data-placeholder='Email'></span>
                        </div>
                    </form>
                    <button className={RecoverStyles.buttonEnter} onClick={() => RecoverPassTrue()}> Enviar </button>
                </div>

                <div className="flex flex-row w-full">
                    <button className={RecoverStyles.buttonBack} onClick={() => HandleBack()}>{"<"}</button>
                    <h1>Voltar</h1>
                </div>
            </>
    )
}
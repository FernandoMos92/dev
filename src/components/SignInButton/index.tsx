import { AiFillGithub } from "react-icons/ai";
import { FiX } from 'react-icons/fi'
import styles from './style.module.scss';

export function SignInButton() {

  const session = true;

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {}}
    >
      <img src="https://picsum.photos/200" alt="Foto do usuario" />
      Olá Fernando
      <FiX 
        className={styles.closeIcon}
        color="#737380"
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {}}
    >
      <AiFillGithub 
        color="#FFB800"
      />
      Entrar com GitHub
    </button>
  )
}
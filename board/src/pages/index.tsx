import styles from '../style/style.module.scss';

function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Primeiro Projeto com <span>NextJS</span>
      </h1>
    </div>
  )
}

export default Home;
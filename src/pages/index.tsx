import Header from 'next/head';
import styles from '../style/style.module.scss';

const Home = () => {
  return (
    <div>
      <Header>
        <title>Board - Organizando suas tarefas</title>
      </Header>
      <h1 className={styles.title}>
        Primeiro projeto em <span>NextJS</span>
      </h1>
    </div>
  )
}

export default Home

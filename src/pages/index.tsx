import Header from "next/head";
import styles from "../style/style.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header>
        <title>Board - Organizando suas tarefas</title>
      </Header>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>
            Um ferramenta para seu dia a dia Escreva, planeje e organiza-se..
          </h1>
          <p>
            <span>100% Gratuita</span> e online
          </p>
        </section>

        <div className={styles.developer}>
          <h4>Developer</h4>
          <Link href="https://www.linkedin.com/in/fernando-mos/" passHref>
            <a target="_blank">
              <img
                src="https://avatars.githubusercontent.com/u/60073911?s=400&u=53193e0e615b5e14adca7977346674341897b4fd&v=4"
                alt="Developer"
              />
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;

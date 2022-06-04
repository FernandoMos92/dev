import Link from 'next/link';
import styles from "./style.module.scss";

export function SuportButton() {
  return (
    <div className={styles.donateContainer}>
      <Link href="/donate" passHref>
        <button>Apioar</button>
      </Link>
    </div>
  );
}

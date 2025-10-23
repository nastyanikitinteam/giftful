import { Hero } from "./sections/Hero/Hero";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

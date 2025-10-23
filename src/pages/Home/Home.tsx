import { Hero } from "./sections/Hero/Hero";
import { Banner } from "./sections/Banner/Banner";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Banner />
    </div>
  );
};

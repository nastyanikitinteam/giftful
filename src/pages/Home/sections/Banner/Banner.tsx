import { Button } from "@/components/Button/Button";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Join Giftful to create <span>wishlist</span>
            </h2>
            <Button variant="black" minWidth={184} href="#">
              Create a wishlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

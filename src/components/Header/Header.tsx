import { Button } from "@components/Button/Button";
import Logo from "@assets/logo.svg?react";
import styles from "./Header.module.scss";

import { HEADER_NAV } from "@config/navigation";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logo}>
            <Logo />
          </a>
        </div>

        <nav className={styles.nav}>
          {HEADER_NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button variant="transparent" size="small" minWidth={100} href="/login">
            Log in
          </Button>
          <Button variant="green" size="small" minWidth={100} href="/signup">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

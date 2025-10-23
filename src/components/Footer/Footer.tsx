import cn from "classnames";

import { Button } from "@components/Button/Button";
import { FOOTER_NAV } from "@config/navigation";

import Logo from "@assets/images/footer-logo.svg?react";
import appStore from "@assets/images/app-store.svg";
import googlePlay from "@assets/images/google-play.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h3 className={cn("title-h2", styles.title)}>Make your wishes come true</h3>

            <div className={styles.apps}>
              <Button variant="black" minWidth={168} href="#">
                <img src={appStore} alt="Download on the App Store" />
              </Button>
              <Button variant="black" minWidth={168} href="#">
                <img src={googlePlay} alt="Get it on Google Play" />
              </Button>
            </div>
          </div>

          <div className={styles.links}>
            {FOOTER_NAV.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logoContainer}>
            <Logo className={styles.logo} />
          </div>
        </div>
      </div>
    </footer>
  );
};

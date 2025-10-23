import styles from "./Button.module.scss";
import classNames from "classnames";

import type { ButtonProps } from "@/types/ui";

export const Button = ({ children, variant = "black", size = "large", minWidth, href, onClick }: ButtonProps) => {
  const buttonClass = classNames(styles.button, styles[variant], styles[size]);

  const style = minWidth ? { minWidth: `${minWidth}px` } : {};

  if (href) {
    return (
      <a href={href} className={buttonClass} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

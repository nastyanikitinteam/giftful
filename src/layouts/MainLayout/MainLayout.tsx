import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

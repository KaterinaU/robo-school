import { Footer } from '@/components/footer/index';
import { Header } from '@/components/header/index';

import styles from './layout.module.scss';

export const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/mousewheel';

import { Layout } from '@/components/layout';
import { MainPage } from '@/pages/main-page';

import './styles/index.scss';

export const App = () => (
  <Layout>
    <MainPage />
  </Layout>
);

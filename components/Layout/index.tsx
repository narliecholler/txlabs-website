import type LayoutProps from './LayoutProps';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

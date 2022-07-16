import Header from './sections/header';
import Footer from './sections/footer';

type ILayoutProps = {
  children: JSX.Element,
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

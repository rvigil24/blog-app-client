import { Header, Footer } from '@components/ui';
import { Category } from '@components/widgets';

export const Auth = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: '70vh' }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

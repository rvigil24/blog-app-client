import { Header, Footer } from '@components/ui';
import { Category } from '@components/widgets';

export const Main = ({ children, banner }) => {
  return (
    <>
      <Header />
      {banner}
      <div className="container" style={{ minHeight: '70vh' }}>
        <div className="row py-5">
          {/* contenido principal */}
          <div className="col-lg-8">{children}</div>

          {/* widgets */}
          <div className="col-lg-4">
            <Category />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

'use client';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

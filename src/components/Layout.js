import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {s
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

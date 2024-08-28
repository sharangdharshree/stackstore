import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import CheckoutHeader from "./components/Header/CheckoutHeader";
import CheckoutFooter from "./components/Footer/CheckoutFooter";

function Layout() {
  const { pathname } = useLocation();
  const header = !pathname.startsWith("/checkout") ? (
    <Header />
  ) : (
    <CheckoutHeader />
  );
  const footer = !pathname.startsWith("/checkout") ? (
    <Footer />
  ) : (
    <CheckoutFooter />
  );
  return (
    <>
      {header}
      <Outlet />
      {footer}
    </>
  );
}

export default Layout;

import Carousel from "./Carousel";
import SideNavbar from "./SideNavbar";
import AboutApp from "./AboutApp";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <div className = "">
        <Carousel/>
        <SideNavbar>{children}</SideNavbar>
        <AboutApp />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

import Carousel from "./Carousel";
import SideNavbar from "./SideNavbar";
import AboutApp from "./AboutApp";
import Test from "./Test";
import Contact from "./Contact";
import Footer from "./Footer";
export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <div>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </div>
      
      <div className = "">
        <Carousel/> 
        <SideNavbar />
        <AboutApp />
        <Test />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

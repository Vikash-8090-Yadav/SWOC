import Carousel from "./Carousel";
import SideNavbar from "./SideNavbar";
import AboutApp from "./AboutApp";

export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <div className = "">
        <Carousel/>
        <SideNavbar />
        <AboutApp />
      </div>
    </>
  )
}

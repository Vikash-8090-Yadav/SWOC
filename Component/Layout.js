import Carousel from "./Carousel";
import Sidenav from "./Sidenav";
import AboutApp from "./AboutApp";

export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <div className = "">
        <Carousel/>
        <Sidenav />
        <AboutApp />
      </div>
    </>
  )
}

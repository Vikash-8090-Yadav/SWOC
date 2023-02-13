
import Random from "./Random";
import Carousel from "./Carousel";
import Sidenav from "./Sidenav";
import AboutApp from "./AboutApp";

export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <div className = "max-w-full">
        {<Random/>} 
        <Carousel/>
        <Sidenav />
        <AboutApp />
      </div>
    </>
  )
}

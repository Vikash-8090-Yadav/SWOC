
import Random from "./Random";
import Carousel from "./Carousel";
import Sidenav from "./Sidenav";

export default function Layout({children}) {

  console.log(children);
  return (
    <>
      {<Random/>} 
      <Carousel/>
      <Sidenav />
    </>
  )
}

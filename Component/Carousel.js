
import Image from "next/image"
import hero from "../images/2.png";
export default function  Cat() {
  return(
    <div name = "Home" id = "Home">
      <Image src ={hero} width ={4000} height = {1750} alt =""/>
    </div>
  )
}

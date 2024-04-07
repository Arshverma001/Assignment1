import Image from "next/image";
import Navbar from "../../public/components/Navbar";
import Page1 from "../../public/components/Page1";
import TopTutors from "../../public/components/TopTutors";
import Reviews from "../../public/components/Reviews";

export default function Home() {
  return (
    <div className=" bg-[#FFFFFF] text-black snap-container ">
      <div className="snap-child "><Navbar/></div>
      <div className="snap-child "><Page1/></div>
      <div className="snap-child "><TopTutors/></div>
      <div className="snap-child "><Reviews/></div>
    </div>
  );
}

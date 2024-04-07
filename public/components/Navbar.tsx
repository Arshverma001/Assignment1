import Image from "next/image"
import '../styles/fonts.css'

export default function Navbar(){
    return(
        <main className="bg-[#FFFFFF] flex h-[72px] custom-shadow">
            <div className="p-2">
            <Image className="w-[217px] h-[54px]"
            src="/Images/icon.png"
             width={217}
            height={54}
            alt="Icon"
            />
            </div>
            <div className="flex justify-center items-center ml-[200px]">
                <button className="mr-20">
                <Image className="w-[18px] h-[18px]"
                 src="/Images/search.png"
                 width={18}
                 height={18}
                 alt="search"
                />
                </button>
                <div className="flex font-montserrat space-x-[5rem] text-lg">
                <button className="font-bold relative  text-black">Home
                <div className="absolute bottom-[-0.1rem] left-0 w-[32px] h-[3px] rounded-[21px] bg-[#FC4D6D]"></div></button>
                <button className="font-semibold text-[#948181]">Find Tutors</button>
                <button className="font-semibold text-[#948181]">How It Works?</button>
                </div>
               
                <div className="ml-[150px] flex justify-center items-center">
                <button className="flex  justify-center items-center">
                <Image className="w-[24px] h-[24px]"
                 src="/Images/log-in.png"
                 width={24}
                 height={24}
                 alt="search"
                />
                <p className="font-montserrat text-lg font-bold text-[#1F1F1F] ml-1 ">Log In</p>
                </button>
                <button className="bg-gradient-to-r from-[#FC4D6D] to-[#FDA02F] font-montserrat text-[#FFFFFF] text-lg font-bold ml-14 rounded-full w-[166px] h-[38px]" >Join as Tutor</button>
                </div>
            </div>
        </main>
    )
} 
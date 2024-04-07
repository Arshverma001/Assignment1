import Image from "next/image"


export default function Reviews(){
    return (
        <main className="flex justify-center items-center flex-col mx-4 relative ">
            <div className="mb-28">
                <p className="font-montserrat font-bold text-4xl tracking-[0.02em] text-[#5E5252]">REVIEWS FROM OUR <span className="text-[#FC4D6D]">CUSTOMERS</span></p>
            </div>
           
            <div className="bg-gradient-custom w-[1069px] h-[349px] relative rounded-3xl bg-white z-50 flex justify-center items-center border-2 border-red-500">
                <div className="w-[98px] h-[98px] rounded-full bg-gradient-to-br absolute right-[95%] mb-[240px]  z-0 from-[#FC4D6D] to-[#FDA02F]"></div>
                <div className="w-[49px] h-[49px] rounded-full bg-gradient-to-br absolute right-[85%] mt-[350px]  z-0 from-[#FC4D6D] to-[#FDA02F]"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br absolute right-[25%]  mb-[240px] blur-lg z-0 from-[#FC4D6D] to-[#FDA02F]"></div>
                <div className="w-[244px] h-[244px] rounded-full bg-gradient-to-br absolute  left-[90%]  mt-[350px] from-[#FC4D6D] to-[#FDA02F]"></div>

                <div className="flex flex-col justify-center items-center  mx-4">
                <div className="flex justify-center items-center ">
                <Image className="w-[112px] h-[112px] border-gradient rounded-full"
                 src="/Images/img1.png"
                 width={112}
                 height={112}
                 alt="search"
                />
                <div className="flex flex-col mt-4 ml-4 ">
                <p className="font-montserrat font-semibold text-[24px] text-[#2E2E2E]">Andrew Holt</p>
                <p className="text-[#828282] font-montserrat font-medium text-[18px]">Graphics123@gmail.com</p>
                </div>
                </div>
                <div className="flex mt-4 ml-4">
                <Image className="w-[32px] h-[27px]"
                 src="/Images/inverted.png"
                 width={112}
                 height={112}
                 alt="search"
                />
                <p className="mt-4 ml-2 font-montserrat font-semibold text-[18px] text-[#272727] tracking-[-0.005em] leading-[26px] w-[907px] flex justify-center items-center">I had been dreaming to learn guitar for 4 yrs. One day I visited Peppertree.com. I clicked "Buy A Trial Session". Later all happened automatically, I kept attending the amazing tutor online and she kept me motivated. It's been 4 weeks & 40 sessions. And woohoo! I just surprised all my friends at a party with my skills! Stop desiring a skill, just start with Peppertree!</p>
                <Image className="w-[32px] h-[27px] mt-24 "
                 src="/Images/inverted.png"
                 width={32}
                 height={32}
                 alt="search"
                />
               
                </div>
                </div>
                </div>
                <div className="flex space-x-4 mt-8 justify-center items-center mb-20">
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#FC4D6D] bg-[#FC4D6D]"></div>
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#C4C4C4] bg-[#C4C4C4]"></div>
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#C4C4C4] bg-[#C4C4C4]"></div>
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#C4C4C4] bg-[#C4C4C4]"></div>
                </div> 
        </main>
    )
}
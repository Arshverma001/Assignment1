import Image from "next/image"

export default function Page1(){
    return (
        <main className="flex justify-between items-center overflow-hidden mt-28">
            <div className="flex-col flex char-spacing top-[280px] ml-[71px]">
                <span className="font-montserrat font-extrabold text-[64px] w-[634px] ">Upskill With A</span>
                <span className="font-montserrat font-extrabold text-[64px] text-[#FC4D6D] w-[634px]">Personal Touch !</span>
                <p className="font-roboto font-medium w-[575px] text-lg mt-4 text-[#5E5252]">Video learning is boring because learning gets procrastinated 9 out of 10 times. Guarantee yourself a skill in a time you decide, connect to a live tutor now!</p>
                <div className="w-[253px] h-[62px] p-1 bg-gradient-to-r custom-round from-[#FC4D6D] to-[#FDA02F] text-[22px] font-montserrat font-extrabold text-[#FFFFFF] flex justify-center mt-20"><button className="flex items-center">Book a Trial <Image className="w-[24px] h-[24px] ml-2"
                 src="/Images/arrow-right.png"
                 width={24}
                 height={24}
                 alt="search"
                /></button>
                </div>  
                <div className="flex space-x-4 mt-40 justify-start items-start">
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#FC4D6D] bg-[#FC4D6D]"></div>
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#C4C4C4] bg-[#C4C4C4]"></div>
                    <div className="rounded-full h-[14px] w-[14px] border-2 border-[#C4C4C4] bg-[#C4C4C4]"></div>
                </div>    
            </div>
            <div className="flex flex-col  font-poppins z-0">
            <div className="relative flex justify-center items-center right-[260px] bottom-8 w-[1440px] h-[704px]">

            <Image className="w-[959px] h-[704px]"

                 src="/Images/bgImg.png"
                 width={959}
                 height={704}
                 alt="search"
                />
            <div className="flex flex-row justify-between flex-1">
                <div className="flex absolute top-24 left-[290px] w-[182px] h-[53px] rounded-lg shadow justify-center items-center bg-gradient-custom ">
                <Image className="w-[25px] h-[26px] "
                 src="/Images/mail.png"
                 width={24}
                 height={24}
                 alt="search"
                />
                <div className="flex flex-col ml-4  ">
                <span className="text-[#FC4D6D] font-bold text-sm">CONGRATS!</span>
                <span className="text-[#5A5A5A] font-medium text-[9px]">FOR YOUR NEW SKILL</span>
                </div>
                     
                </div>

                <div className="flex absolute left-[670px] top-[150px] w-[121px] h-[55px] rounded-lg shadow justify-center items-center bg-gradient-custom">
                <Image className="w-[25px] h-[25px] "
                 src="/Images/users.png"
                 width={24}
                 height={24}
                 alt="search"
                />
                <div className="flex flex-col ml-4  ">
                <span className="text-[#FD8841] font-bold text-sm">100+</span>
                <span className="text-[#5A5A5A] font-medium text-[9px]">TUTORS</span>
                </div>     
                </div>
            </div>
            <div className="flex flex-row justify-between flex-1">
            <div className="flex absolute left-[250px] bottom-[170px]  w-[186px] h-[43px] rounded-2xl shadow justify-center items-center bg-gradient-custom">
                <div className="flex flex-col ml-4  ">
                <span className="text-[#FC4D6D] font-bold text-sm">10K + STUDENTS</span>
                </div>
                <Image className="w-[25px] h-[25px] ml-4 "
                 src="/Images/user.png"
                 width={24}
                 height={24}
                 alt="search"
                />     
                </div>
                <div className="flex absolute right-[600px] bottom-[40px] w-[219px] h-[96px] rounded-xl shadow justify-center items-center bg-gradient-custom">
                <Image className="w-[44px] h-[44px] ml-4 rounded-full border-white border-2"
                 src="/Images/img1.png"
                 width={44}
                 height={44}
                 alt="search"
                />     
                <div className="flex flex-col ml-4 space-y-1 ">
                <span className="text-white font-bold text-sm">COOKING <span className="text-[#FC4D6D]">CLASS</span></span>
                <span className="text-white font-medium text-[9px]">TOMORROW AT<span className="text-[#FC4D6D]">10:00AM</span></span>
                <button className="font-bold text-[9px] bg-[#FC4D6D] text-white rounded-2xl p-1 w-[74px] h-[19px]">JOIN NOW</button>
                </div>
                
                </div>
            </div>
            </div>
            </div>
            
        </main>
    )
}
import Image from "next/image"

export default function TopTutors(){
    return(
       <main className="flex justify-center items-center flex-col mx-4 h-auto w-auto ">
        <span className="font-montserrat font-bold text-[36px]">TOP <span className="text-[#FC4D6D]">TUTORS</span></span>
        <div className="flex space-x-[75px] m-4 mt-10 mb-32">
            
        <div className="h-[524px] w-[337px] rounded-2xl cardshadow z-50 bg-white">
                <div className="relative">
                <p className="font-poppins font-bold text-[10px] absolute z-0 text-[#FFFFFF] toptutor items-center justify-center flex w-[99px] h-[33px] ">TOP TUTOR</p>
                <Image className="w-[11px] h-[14px] absolute mt-[5%] ml-[90%] "
                 src="/Images/bookmark.png"
                 width={11}
                 height={14}
                 alt="search"
                />    
                <Image className="w-[337px] h-[168px] custom-round1 "
                 src="/Images/img2.jpg"
                 width={337}
                 height={168}
                 alt="search"
                />
                <div className="">
                <Image className="w-[75px] h-[75px] rounded-full mt-[-12%] ml-5 absolute border-white border-2"
                 src="/Images/img3.png"
                 width={75}
                 height={75}
                 alt="search"
                />
                <div className="flex justify-center items-center">
                <p className="font-poppins font-semibold text-sm text-[#000000] ">Radhakishan J.</p>
                <div className="w-[12px] h-[12px] rounded-full border-[#03CD0B] border-2 ml-2 flex ">
                <Image className="w-[8px] h-[6px] mt-[1px] ml-[1px]"
                 src="/Images/tick.png"
                 width={75}
                 height={75}    
                 alt="search"
                />
                <Image className="mt-0 ml-2 w-3 "
                 src="/Images/flag.png"
                 width={30}
                 height={15}
                 alt="search"
                />
                </div>
                </div>
                </div>
                </div>
                <div className="flex-col">
                <div className="flex justify-start space-x-6 mt-8 ml-4 ">
                <Image className="mt-0 ml-2 w-[17px] h-[14px]"
                 src="/Images/cap.png"
                 width={30}
                 height={30}
                 alt="search"
                />
                <p className="font-poppins font-medium text-[10px] text-[#474747]">English,Geography,+3</p>
            </div>  
            <div className="flex justify-start items-center space-x-5 mt-3 ml-[18px] ">
                <Image className="mt-0 ml-2 w-[19px] h-[13px]"
                 src="/Images/m5.png"
                 width={13}
                 height={13}
                 alt="search"
                />
                <p className="font-poppins font-medium text-[10px] text-[#474747]">English (Native), Hindi (Conversational) +1</p>
            </div>  
                </div>
                <div className="flex justify-between items-center m-4">
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                    <span className="">Active</span>
                    <span className="">Students</span>
                    <span className=" text-[#FC4D6D]">3</span>  
                </div>
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                    <span className="">Session</span>
                    <span className="">Finished</span>
                    <span className=" text-[#FC4D6D]">45</span>  
                </div>
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                <span className="flex justify-center items-center">4.5<Image className="w-[10px] h-[10px] ml-1"
                 src="/Images/star.png"
                 width={10}
                 height={10}
                 alt="search"
                /></span>
                    <span className="">Ratings</span>
                    <span className=" text-[#FC4D6D]">172</span>  
                </div>
                </div>
                <div className="flex m-4  ">
                <span className="font-montserrat font-extrabold text-[10px] flex  ">Brief:<p className="font-montserrat font-extrabold text-[10px] text-[#606060] ml-1"> dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra</p></span>
                </div>
                
                <div className="flex justify-center items-center relative ">
                <button className="w-[223px] h-[42px] rounded-3xl border-2 border-[#FC4D6D] flex justify-center items-center font-poppins font-semibold text-sm text-[#FC4D6D] p-4 absolute z-10 mt-4 bg-white ">Book Trial&nbsp; |&nbsp; $20/Hr </button>
                <div className="w-[27px] h-[27px] rounded-full bg-gradient-to-br relative z-0 bottom-2 from-[#FC4D6D] to-[#FDA02F]"></div>
                <div className="w-[27px] h-[27px] rounded-full bg-gradient-to-br relative z-0 top-6 right-[105px] from-[#FC4D6D] to-[#FDA02F]">
                </div>
                <div className="w-[35px] h-[35px] rounded-full relative z-0 top-5 right-[-80px] bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F]">
                </div> 
                </div>
                <div className="flex justify-center mt-12 space-x-20">
                    <div className="flex items-center ">
                    <Image className="w-[17px] h-[12px]"
                    src="/Images/eye.png"
                    width={17}
                    height={12}
                     alt="search"
                    />
                    <p className="font-montserrat font-semibold text-[9px] text-[#474747] ml-1">QuickView Details</p>
                    </div>
                    <div className="flex">
                    <Image className="w-[14px] h-[13px]"
                    src="/Images/pg.png"
                    width={14}
                    height={12}
                     alt="search"
                    />
                    <p className="font-montserrat font-semibold text-[9px] text-[#474747] ml-1">Chat with Tutor</p>
                    </div>
                </div>
            </div>
            
            <div className="h-[524px] w-[337px] rounded-2xl cardshadow">
                <div className="relative">
                <p className="font-poppins font-bold text-[10px] absolute z-0 text-[#FFFFFF] toptutor items-center justify-center flex w-[99px] h-[33px] ">TOP TUTOR</p>
                <Image className="w-[11px] h-[14px] absolute mt-[5%] ml-[90%] "
                 src="/Images/bookmark.png"
                 width={11}
                 height={14}
                 alt="search"
                />    
                <Image className="w-[337px] h-[168px] custom-round1 "
                 src="/Images/img2.jpg"
                 width={337}
                 height={168}
                 alt="search"
                />
                <div className="">
                <Image className="w-[75px] h-[75px] rounded-full mt-[-12%] ml-5 absolute border-white border-2"
                 src="/Images/img3.png"
                 width={75}
                 height={75}
                 alt="search"
                />
                <div className="flex justify-center items-center">
                <p className="font-poppins font-semibold text-sm text-[#000000] ">Radhakishan J.</p>
                <div className="w-[12px] h-[12px] rounded-full border-[#03CD0B] border-2 ml-2 flex ">
                <Image className="w-[8px] h-[6px] mt-[1px] ml-[1px]"
                 src="/Images/tick.png"
                 width={75}
                 height={75}    
                 alt="search"
                />
                <Image className="mt-0 ml-2 w-3 "
                 src="/Images/flag.png"
                 width={30}
                 height={15}
                 alt="search"
                />
                </div>
                </div>
                </div>
                </div>
                <div className="flex-col">
                <div className="flex justify-start space-x-6 mt-8 ml-4 ">
                <Image className="mt-0 ml-2 w-[17px] h-[14px]"
                 src="/Images/cap.png"
                 width={30}
                 height={30}
                 alt="search"
                />
                <p className="font-poppins font-medium text-[10px] text-[#474747]">English,Geography,+3</p>
            </div>  
            <div className="flex justify-start items-center space-x-5 mt-3 ml-[18px] ">
                <Image className="mt-0 ml-2 w-[19px] h-[13px]"
                 src="/Images/m5.png"
                 width={13}
                 height={13}
                 alt="search"
                />
                <p className="font-poppins font-medium text-[10px] text-[#474747]">English (Native), Hindi (Conversational) +1</p>
            </div>  
                </div>
                <div className="flex justify-between items-center m-4">
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                    <span className="">Active</span>
                    <span className="">Students</span>
                    <span className=" text-[#FC4D6D]">3</span>  
                </div>
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                    <span className="">Session</span>
                    <span className="">Finished</span>
                    <span className=" text-[#FC4D6D]">45</span>  
                </div>
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                <span className="flex justify-center items-center">4.5<Image className="w-[10px] h-[10px] ml-1"
                 src="/Images/star.png"
                 width={10}
                 height={10}
                 alt="search"
                /></span>
                    <span className="">Ratings</span>
                    <span className=" text-[#FC4D6D]">172</span>  
                </div>
                </div>
                <div className="flex m-4  ">
                <span className="font-montserrat font-extrabold text-[10px] flex  ">Brief:<p className="font-montserrat font-extrabold text-[10px] text-[#606060] ml-1"> dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra</p></span>
                </div>
                
                <div className="flex justify-center items-center relative ">
                <button className="w-[223px] h-[42px] rounded-3xl border-2 border-[#FC4D6D] flex justify-center items-center font-poppins font-semibold text-sm text-[#FC4D6D] p-4 absolute z-10 mt-4 bg-white">Book Trial&nbsp; |&nbsp; $20/Hr </button>
                <div className="w-[27px] h-[27px] rounded-full bg-gradient-to-br relative z-0 bottom-2 from-[#FC4D6D] to-[#FDA02F]"></div>
                <div className="w-[27px] h-[27px] rounded-full bg-gradient-to-br relative z-0 top-6 right-[105px] from-[#FC4D6D] to-[#FDA02F]">
                </div>
                <div className="w-[35px] h-[35px] rounded-full relative z-0 top-5 right-[-80px] bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F]">
                </div> 
                </div>
                <div className="flex justify-center mt-12 space-x-20">
                    <div className="flex items-center ">
                    <Image className="w-[17px] h-[12px]"
                    src="/Images/eye.png"
                    width={17}
                    height={12}
                     alt="search"
                    />
                    <p className="font-montserrat font-semibold text-[9px] text-[#474747] ml-1">QuickView Details</p>
                    </div>
                    <div className="flex">
                    <Image className="w-[14px] h-[13px]"
                    src="/Images/pg.png"
                    width={14}
                    height={12}
                     alt="search"
                    />
                    <p className="font-montserrat font-semibold text-[9px] text-[#474747] ml-1">Chat with Tutor</p>
                    </div>
                </div>
            </div>

            <div className="h-[524px] w-[337px] rounded-2xl cardshadow z-50 bg-white">
            <div className="blob h-[414px] w-[414px] rounded-full absolute  right-0 bottom-[-80%]"></div>
                <div className="relative">
                <p className="font-poppins font-bold text-[10px] absolute z-0 text-[#FFFFFF] toptutor items-center justify-center flex w-[99px] h-[33px] ">TOP TUTOR</p>
                <Image className="w-[11px] h-[14px] absolute mt-[5%] ml-[90%] "
                 src="/Images/bookmark.png"
                 width={11}
                 height={14}
                 alt="search"
                />    
                <Image className="w-[337px] h-[168px] custom-round1 "
                 src="/Images/img2.jpg"
                 width={337}
                 height={168}
                 alt="search"
                />
                <div className="">
                <Image className="w-[75px] h-[75px] rounded-full mt-[-12%] ml-5 absolute border-white border-2"
                 src="/Images/img3.png"
                 width={75}
                 height={75}
                 alt="search"
                />
                <div className="flex justify-center items-center">
                <p className="font-poppins font-semibold text-sm text-[#000000] ">Radhakishan J.</p>
                <div className="w-[12px] h-[12px] rounded-full border-[#03CD0B] border-2 ml-2 flex ">
                <Image className="w-[8px] h-[6px] mt-[1px] ml-[1px]"
                 src="/Images/tick.png"
                 width={75}
                 height={75}    
                 alt="search"
                />
                <Image className="mt-0 ml-2 w-3 "
                 src="/Images/flag.png"
                 width={30}
                 height={15}
                 alt="search"
                />
                </div>
                </div>
                </div>
                </div>
                <div className="flex-col">
                <div className="flex justify-start space-x-6 mt-8 ml-4 ">
                <Image className="mt-0 ml-2 w-[17px] h-[14px]"
                 src="/Images/cap.png"
                 width={30}
                 height={30}
                 alt="search"
                />
                <p className="font-poppins font-medium text-[10px] text-[#474747]">English,Geography,+3</p>
            </div>  
            <div className="flex justify-start items-center space-x-5 mt-3 ml-[18px] ">
                <Image className="mt-0 ml-2 w-[19px] h-[13px]"
                 src="/Images/m5.png"
                 width={13}
                 height={13}
                 alt="search"
                />
                <p className="font-poppins font-medium text-[10px] text-[#474747]">English (Native), Hindi (Conversational) +1</p>
            </div>  
                </div>
                <div className="flex justify-between items-center m-4">
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                    <span className="">Active</span>
                    <span className="">Students</span>
                    <span className=" text-[#FC4D6D]">3</span>  
                </div>
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                    <span className="">Session</span>
                    <span className="">Finished</span>
                    <span className=" text-[#FC4D6D]">45</span>  
                </div>
                <div className="h-[52px] w-[96px] border-2 border-[#F8F8F8] rounded-lg element flex-col flex justify-center items-center font-montserrat text-[#474747] font-bold text-[10px]">
                <span className="flex justify-center items-center">4.5<Image className="w-[10px] h-[10px] ml-1"
                 src="/Images/star.png"
                 width={10}
                 height={10}
                 alt="search"
                /></span>
                    <span className="">Ratings</span>
                    <span className=" text-[#FC4D6D]">172</span>  
                </div>
                </div>
                <div className="flex m-4  ">
                <span className="font-montserrat font-extrabold text-[10px] flex  ">Brief:<p className="font-montserrat font-extrabold text-[10px] text-[#606060] ml-1"> dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra</p></span>
                </div>
                
                <div className="flex justify-center items-center relative ">
                <button className="w-[223px] h-[42px] rounded-3xl border-2 border-[#FC4D6D] flex justify-center items-center font-poppins font-semibold text-sm text-[#FC4D6D] p-4 absolute z-10 mt-4 bg-white">Book Trial&nbsp; |&nbsp; $20/Hr</button>
                <div className="w-[27px] h-[27px] rounded-full bg-gradient-to-br relative z-0 bottom-2 from-[#FC4D6D] to-[#FDA02F]"></div>
                <div className="w-[27px] h-[27px] rounded-full bg-gradient-to-br relative z-0 top-6 right-[105px] from-[#FC4D6D] to-[#FDA02F]">
                </div>
                <div className="w-[35px] h-[35px] rounded-full relative z-0 top-5 right-[-80px] bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F]">
                </div> 
                </div>
                <div className="flex justify-center mt-12 space-x-20">
                    <div className="flex items-center ">
                    <Image className="w-[17px] h-[12px]"
                    src="/Images/eye.png"
                    width={17}
                    height={12}
                     alt="search"
                    />
                    <p className="font-montserrat font-semibold text-[9px] text-[#474747] ml-1">QuickView Details</p>
                    </div>
                    <div className="flex">
                    <Image className="w-[14px] h-[13px]"
                    src="/Images/pg.png"
                    width={14}
                    height={12}
                     alt="search"
                    />
                    <p className="font-montserrat font-semibold text-[9px] text-[#474747] ml-1">Chat with Tutor</p>
                    </div>
                </div>
            </div>
            <div className="blob h-[414px] w-[414px] rounded-full absolute left-[-4%] bottom-[-130%]">
        </div>
        </div>

        
       </main>
    )
}
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiSlidersHorizontalLight } from "react-icons/pi";
const Header = () => {
  return (
    <>
    <div class="flex justify-between items-center  bg-transparent py-4 ">
    <div class="flex items-center h-[48px] w-[60%]  px-3 space-x-2  bg-[#ffff] rounded-lg">
        <div class="flex items-center justify-center h-full  text-[#989898cc] ">
        <FiSearch />
        </div>
        <input  class="flex-1 items-center justify-center h-full pb-1 text-[#cccc] border-none" placeholder='search your courses'/>
    </div>
    <div class=" h-[48px] flex items-center justify-center px-4 space-x-6">
        <div >
        <IoHelpCircleOutline   class ='text-xl  text-[#989898cc] '  />
        </div>
        <div class='relative'>
        <div  class ='h-2  w-2 rounded-full bg-red-500  absolute top-0 right-0'></div>
        <LuMessageSquareMore   class ='text-xl  text-[#989898cc]'  />
        </div>
        <div>
        <PiSlidersHorizontalLight  class ='text-xl  text-[#989898cc]'  />
        </div>
        <div class='relative'>
        <div  class ='h-2  w-2 rounded-full bg-red-500  absolute top-0 right-0'></div>
        <IoMdNotificationsOutline  class ='text-xl  text-[#989898cc]'  />
        </div>
        <div class="h-[35px] w-[35px] overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-B4p4KbYF01UtLZdVDsTHTwiE-oDyuBBWvw&s" alt="user's image" class="object-contain w-full h-full" />
        </div>


        <div>
            <p class='font-semibold  h-[26px] w-[129px] text-[16px]  overflow-hidden text-left '>Adeline H. Dancy</p>
        </div>

    </div>
</div>

    </>
  )
}

export default Header
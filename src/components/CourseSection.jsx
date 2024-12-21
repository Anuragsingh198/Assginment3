import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
const CourseSection = () => {
  return (
<>
    <div class=" bg-transparent  my-10">
        <div class='firstline  flex justify-between  items-center   px-4'>
            <div class='flex w-[20%] justify-between '>
                <div class =' bg-[#E9EDF1]  flex justify-center items-center p-2 rounded-md text-[#3F526E] font-bold space-x-1 mr-3'>AY 2024-25  <IoMdArrowDropdown  class='text-[#3F526E] ml-1 font-bold'  /> </div> 
                <div class =' bg-[#E9EDF1]  flex justify-center items-center p-2 rounded-md text-[#3F526E] font-bold space-x-1'> CBSE 9  <IoMdArrowDropdown   class='text-[#3F526E] ml-1 font-bold '/> </div>
            </div>
            <div>
            <div class ='h-[38px] w-[200px] bg-[#E9EDF1]  flex justify-center items-center p-3 rounded-md text-[#3F526E] font-bold space-x-1'>
                         <IoAddOutline class='text-[#3F526E] mr-1 font-bold'/>    ADD NEW STUDENT</div> 
            </div>
        </div>
    </div>
</>
  )
}

export default CourseSection
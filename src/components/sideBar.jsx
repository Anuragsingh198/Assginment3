import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiDashboard3Line } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { RiSettingsLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import image  from '../assets/Vector.png'
export function SideBar() {
    const [activeLink, setActiveLink] = useState("");

    const selectedFile = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="flex  h-full  justify-around gap-1 bg-white w-[230px] mr-[15px] my-[10px]">
            <div className="w-full h-full flex flex-col  justify-start items-center py-5">
                <div className="w-full mb-5 text-left ">
                <img src={image} alt="SideBar Logo" className=" w-20" />
                </div>
                <div className="w-full space-y-2 px-1">
                    <div
                        className={`flex  justyfy-left-1 items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                            activeLink === "dashboard" ? "bg-slate-200 text-black" : "bg-transparent text-gray-500"
                        }`}
                        onClick={() => selectedFile("dashboard")}
                    >
                        <RiDashboard3Line className="text-lg" />
                        <Link to="/dashboard" className=" text-[#6F767E] text-[18px] font-semibold">
                            Dashboard
                        </Link>
                    </div>
                <div
                        className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer ${
                            activeLink === "Students" ? "bg-slate-200 text-black" : "bg-transparent text-gray-500"
                        }`}
                        onClick={() => selectedFile("Students")}
                    >
                        <FaUserGroup className="text-lg" />
                        <Link to="/students" className=" text-[#6F767E] text-[18px] font-semibold">
                            Students
                        </Link>
                    </div>

                    <div
                        className={`flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                            activeLink === "Chapter" ? "bg-slate-200 text-black" : "bg-transparent text-gray-500"
                        }`}
                        onClick={() => selectedFile("Chapter")}
                    >
                        <FaBookBookmark className="text-lg" />
                        <Link to="/chapter" className=" text-[#6F767E] text-[18px] font-semibold">
                            Chapter
                        </Link>
                    </div>

  
                    <div
                        className={`flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                            activeLink === "Help" ? "bg-slate-200 text-black" : "bg-transparent text-gray-500"
                        }`}
                        onClick={() => selectedFile("Help")}
                    >
                        <IoMdHelpCircleOutline className="text-lg" />
                        <Link to="/help" className=" text-[#6F767E] text-[18px] font-semibold">
                            Help
                        </Link>
                    </div>

         
                    <div
                        className={`flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                            activeLink === "Reports" ? "bg-slate-200 text-black" : "bg-transparent text-gray-500"
                        }`}
                        onClick={() => selectedFile("Reports")}
                    >
                        <TbReportSearch className="text-lg" />
                        <Link to="/reports" className=" text-[#6F767E] text-[18px] font-semibold">
                            Reports
                        </Link>
                    </div>

                    <div
                        className={`flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                            activeLink === "Settings" ? "bg-slate-200 text-black" : "bg-transparent text-gray-500"
                        }`}
                        onClick={() => selectedFile("Settings")}
                    >
                        <RiSettingsLine className="text-lg" />
                        <Link to="/settings" className=" text-[#6F767E] text-[18px] font-semibold">
                            Settings
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

import openDropdown from "../assets/icons/open-dropdown.svg";
import closeDropdown from "../assets/icons/close-dropdown.svg";
import cineone21 from "../assets/icons/cineone21.svg";
import QRCode from "react-qr-code";
import { useState } from "react";

function OrderHistory() {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState<boolean>(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState<boolean>(false);

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <>
            <div className="bg-white w-full h-auto rounded-3xl py-10">        
                <div className="flex justify-between items-center pb-10 border-b border-gray-300 px-10 mb-7">
                    <div>
                        <p className="text-[#AAAAAA] font-normal text-sm">Tuesday, 07 July 2020 - 04:30pm</p>
                        <p className="font-semibold text-2xl">Spider-Man: Homecoming</p>
                    </div>
                    <div>
                        <img src={cineone21} width="100" alt="" />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center px-10">
                    <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
                        <div className="bg-[#00BA8833] flex justify-center items-center w-40 rounded-sm">
                            <p className="text-[#00BA88] text-sm font-bold">Ticket in active</p>
                        </div>
                        <div className="bg-[#1D4ED833] flex justify-center items-center w-40 rounded-sm">
                            <p className="text-[#1D4ED8] text-sm font-bold">Paid</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <p>Show Details</p>
                        <img
                            src={isDropdownOpen1 ? openDropdown : closeDropdown}
                            width="20"
                            alt=""
                            onClick={toggleDropdown1}/>
                    </div>
                </div>

                {isDropdownOpen1 && (
                    <div className="mt-5 mx-10">
                        <div>
                            <p className="mb-5">Ticket Information</p>
                            <div className="flex flex-col md:flex-row items-center px-5 md:space-x-8 lg:space-x-20 space-y-10 md:space-y-0">
                                <QRCode value="https://example.com" width="100" height="100" />
                                <div className="flex flex-col space-y-5">
                                    <div className="flex flex-row space-x-5 lg:space-x-10">
                                        <div>
                                            <p className="font-semibold text-xs text-[#AAAAAA]">Category</p>
                                            <p className="font-semibold text-sm text-[#14142B]">Action</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs text-[#AAAAAA]">Time</p>
                                            <p className="font-semibold text-sm text-[#14142B]">2:00pm</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs text-[#AAAAAA]">Seats</p>
                                            <p className="font-semibold text-sm text-[#14142B]">C4, C5, C6</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-5 lg:space-x-10">
                                        <div>
                                            <p className="font-semibold text-xs text-[#AAAAAA]">Movie</p>
                                            <p className="font-semibold text-sm text-[#14142B]">Spider-Man: ..</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs text-[#AAAAAA]">Date</p>
                                            <p className="font-semibold text-sm text-[#14142B]">07 Jul</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs text-[#AAAAAA]">Count</p>
                                            <p className="font-semibold text-sm text-[#14142B]">3 pcs</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-[#000000]">Total</p>
                                    <p className="font-semibold text-lg lg:text-2xl text-[#000000]">Rp 75000</p>
                                </div>
                            </div>                
                        </div>
                    </div>
                )}            
            </div>
            <div className="bg-white w-full h-auto rounded-3xl py-10">        
                <div className="flex justify-between items-center pb-10 border-b border-gray-300 px-10 mb-7">
                    <div>
                        <p className="text-[#AAAAAA] font-normal text-sm">Tuesday, 07 July 2020 - 04:30pm</p>
                        <p className="font-semibold text-2xl">Spider-Man: Homecoming</p>
                    </div>
                    <div>
                        <img src={cineone21} width="100" alt="" />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center px-10">
                    <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
                        <div className="bg-[#6E719133] flex justify-center items-center w-40 rounded-sm">
                            <p className="text-[#6E7191] text-sm font-bold">Ticket used</p>
                        </div>
                        <div className="bg-[#1D4ED833] flex justify-center items-center w-40 rounded-sm">
                            <p className="text-[#1D4ED8] text-sm font-bold">Paid</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <p>Show Details</p>
                        <img
                            src={isDropdownOpen2 ? openDropdown : closeDropdown}
                            alt=""
                            width="20"
                            onClick={toggleDropdown2}/>
                    </div>
                </div>

                {isDropdownOpen2 && (<></>)}            
            </div>
        </>        
    )
}

export default OrderHistory
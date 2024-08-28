import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import threeDots from "../assets/icons/3_dot.svg";
import userIcon from "../assets/images/user.webp";
import star from "../assets/images/star.png";
import eyeIconClose from "../assets/icons/eye-off-icon.svg";
import eyeIconOpen from "../assets/icons/eye-icon.svg";
import OrderHistory from "../components/OrderHistory";

function Profile() {
    const [activeButton, setActiveButton] = useState<string>('accountSettings');
    const [passwordVisible1, setPasswordVisible1] = useState<boolean>(false);
    const [passwordVisible2, setPasswordVisible2] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isOrderHistory, setIsOrderHistory] = useState<boolean>(false);
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [profileImage, setProfileImage] = useState<string>(userIcon);
    const [loyaltyPoints, setLoyaltyPoints] = useState<number>(0);
    const [pointsNeeded, setPointsNeeded] = useState<number>(0);

    const Token = useSelector((state: RootState) => state.auth.token);

    const totalPoints = 500;
    const percentage = (loyaltyPoints / totalPoints) * 100;

    const url = import.meta.env.VITE_REACT_APP_API_URL;

    // useEffect(() => {
    //     // Fetch user data on component mount
    //     axios.get(`${url}/user/profile`)
    //         .then(response => {
    //             const userData = response.data;
    //             setFirstName(userData.first_name);
    //             setLastName(userData.last_name);
    //             setEmail(userData.email);
    //             setPhoneNumber(userData.phone_number);
    //             setProfileImage(userData.image || userIcon);
    //             setLoyaltyPoints(userData.points || 0);
    //             setPointsNeeded(totalPoints - userData.points);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching user data:", error);
    //         });
    // }, []);

    useEffect(() => {
        if (Token) {
            axios.get(`${url}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Token}`, 
                },
            })
            .then(response => {
                const userData = response.data;
                setFirstName(userData.first_name);
                setLastName(userData.last_name);
                setEmail(userData.email);
                setPhoneNumber(userData.phone_number);
                setProfileImage(userData.image || userIcon);
                setLoyaltyPoints(userData.points || 0);
                setPointsNeeded(totalPoints - (userData.points || 0));
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
        } else {
            console.error("Token is missing or invalid.");
        }
    }, [Token, url, totalPoints]);

    // const handleUpdateProfile = () => {
    //     const formData = new FormData();
    //     formData.append('first_name', firstName);
    //     formData.append('last_name', lastName);
    //     formData.append('email', email);
    //     formData.append('phone_number', phoneNumber);
    //     if (password === confirmPassword && password) {
    //         formData.append('password', password);
    //     }
    //     if (uploadedImage) {
    //         formData.append('image', uploadedImage);
    //     }

    //     axios.patch(`${url}/user/profile`, formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    //         .then(response => {
    //             alert("Profile updated successfully!");
    //             setProfileImage(response.data.image);
    //             setIsModalOpen(false);
    //         })
    //         .catch(error => {
    //             console.error("Error updating profile:", error);
    //         });
    // };

    const handleUpdateProfile = () => {
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('phone_number', phoneNumber);

        if (password === confirmPassword && password) {
            formData.append('password', password);
        }
        if (uploadedImage) {
            formData.append('image', uploadedImage);
        }

        axios.patch(`${url}/user/settings`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${Token}`, 
            }
        })
        .then(response => {
            alert("Profile updated successfully!");
            setProfileImage(response.data.image);
            setIsModalOpen(false);
        })
        .catch(error => {
            console.error("Error updating profile:", error);
        });
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setUploadedImage(event.target.files[0]);
        }
    };

    const togglePasswordVisibility1 = () => {
        setPasswordVisible1(!passwordVisible1);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleOrderHistory = () => {
        setIsOrderHistory(!isOrderHistory);
    };

    return (
        <main className="bg-neutral-100 px-5 sm:px-16 py-5 sm:py-12">
            <div className="flex flex-col lg:flex-row justify-between lg:space-x-10">
                <section className="w-full lg:w-[30%] pb-10 lg:pb-0">
                    <div className="bg-white flex flex-col w-full h-[783px] rounded-3xl pt-10">
                        <div className="flex flex-row justify-between pb-10 px-10">
                            <p>INFO</p>
                            <img src={threeDots} alt="Options" onClick={toggleModal} className="cursor-pointer" />
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img src={profileImage} width="150" alt="Profile" onClick={toggleModal} className="rounded-full cursor-pointer" />                            
                        </div>
                        <div className="flex flex-col items-center px-10">
                            <p className="text-xl font-semibold">{firstName} {lastName}</p>
                            <div className="pb-10 px-10">Moviegoers</div>
                        </div>
                        <div className="px-5">
                            <div className="w-full border-[#DEDEDE] border-[1px] my-14"></div>
                        </div>
                        <div className="pb-5 px-10 font-semibold text-base">Loyalty Points</div>                        
                        <div className="relative px-5 pb-5">
                            <div className="bg-primary w-full h-[125px] rounded-3xl"></div>
                            <img src={star} alt="" className="absolute top-1 right-4" />
                            <div className="absolute top-4 left-8 font-bold">
                                <p className="text-white pb-8 text-lg">Moviegoers</p>
                                <p className="text-white font-semibold text-2xl">{loyaltyPoints}<span className="font-normal text-xs"> points</span></p>
                            </div>                            
                        </div>
                        <div className="px-5">{pointsNeeded} points become a master</div>
                        <div className="px-5">
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mt-2">
                                <div
                                    className="bg-blue-500 h-full rounded-full px-10"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>                        
                    </div>
                </section>
                <section className="w-full lg:w-[70%] space-y-10">
                    <div className="bg-white flex flex-row w-full h-[84px] rounded-3xl pl-0 sm:pl-10 space-x-10 justify-center sm:justify-start items-center">
                        <button
                            onClick={() => setActiveButton('accountSettings')}
                            className={`relative pb-2 focus:outline-none ${activeButton === 'accountSettings' ? 'border-b-4 border-primary' : ''}`}
                        >
                            <p className="text-black">Account Settings</p>
                        </button>
                        <button
                             onClick={() => {
                                setActiveButton('orderHistory');
                                toggleOrderHistory();
                            }}                                
                            className={`relative pb-2 focus:outline-none ${activeButton === 'orderHistory' ? 'border-b-4 border-primary' : ''}`}
                        >
                            <p className="text-black">Order History</p>
                        </button>
                    </div>
                    <div className="bg-white w-full h-auto rounded-3xl px-10 py-10 sm:space-y-10">
                        <div className="pb-4 mb-7 sm:mb-0 border-b border-gray-300">
                            Details Information
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-8">
                            <div className="flex flex-col w-full mb-7 sm:mb-0">
                                <label htmlFor="firstName" className="mb-2">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col w-full mb-7 sm:mb-0">
                                <label htmlFor="lastName" className="mb-2">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-8">
                            <div className="flex flex-col w-full mb-7 sm:mb-0">
                                <label htmlFor="email" className="mb-2">E-mail</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full"
                                />
                            </div>
                            <div className="flex flex-col w-full mb-7 sm:mb-0">
                                <label htmlFor="phoneNumber" className="mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-auto rounded-3xl px-10 py-10 space-y-10">
                        <div className="pb-4 border-b border-gray-300">
                            Account and Privacy
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-8">
                            <div className="flex flex-col w-full relative mb-7 sm:mb-0">
                                <label htmlFor="password" className="mb-2">New Password</label>
                                <input
                                    type={passwordVisible1 ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full"
                                />
                                <img
                                    src={passwordVisible1 ? eyeIconOpen : eyeIconClose}
                                    alt="Toggle password visibility"
                                    onClick={togglePasswordVisibility1}
                                    className="absolute bottom-0 transform -translate-y-1/2 right-4 cursor-pointer"
                                />
                            </div>
                            <div className="flex flex-col w-full relative">
                                <label htmlFor="confirmPassword" className="mb-2">Confirm Password</label>
                                <input
                                    type={passwordVisible2 ? 'text' : 'password'}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full"
                                />
                                <img
                                    src={passwordVisible2 ? eyeIconOpen : eyeIconClose}
                                    alt="Toggle password visibility"
                                    onClick={togglePasswordVisibility2}
                                    className="absolute bottom-0 transform -translate-y-1/2 right-4 cursor-pointer"
                                />
                            </div>                            
                        </div>                        
                    </div>
                    <button
                            className="bg-primary text-white rounded-2xl py-3 px-10"
                            onClick={handleUpdateProfile}
                        >
                            Update Changes
                    </button>
                </section>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Profile Image</h2>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            className="mb-4" 
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-500 text-white rounded-full py-2 px-6 mr-2"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button 
                                className="bg-primary text-white rounded-full py-2 px-6"
                                onClick={handleUpdateProfile}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isOrderHistory && (
                <>
                    <OrderHistory />
                </>                
            )}
        </main>
    )
}

export default Profile;
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import threeDots from "../assets/icons/3_dot.svg";
import userIcon from "../assets/images/user.webp";
import star from "../assets/images/star.png";
import eyeIconClose from "../assets/icons/eye-off-icon.svg";
import eyeIconOpen from "../assets/icons/eye-icon.svg";
import OrderHistory from "../components/OrderHistory";
import { IProfileBody } from "../types/profile";
import { useStoreSelector } from "../redux/hooks";

function Profile() {
  const [activeButton, setActiveButton] = useState<string>("accountSettings");
  const [passwordVisible1, setPasswordVisible1] = useState<boolean>(false);
  const [passwordVisible2, setPasswordVisible2] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loyaltyPoints] = useState<number>(0);
  const [pointsNeeded] = useState<number>(500);
  const [profile, setProfile] = useState<IProfileBody>();
  const [form, setForm] = useState<IProfileBody>();
  const { token } = useStoreSelector((state) => state.auth);
  const [changeImage, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const Token = useSelector((state: RootState) => state.auth.token);

  const totalPoints = 500;
  const percentage = (loyaltyPoints / totalPoints) * 100;

  useEffect(() => {
    const asyncFunctest = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/profile`;
        var result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setProfile(result.data.data);
        setForm(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunctest();
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (form?.first_name) {
        formData.append("first_name", form.first_name);
      }
      if (form?.last_name) {
        formData.append("last_name", form.last_name);
      }
      if (form?.phone_number) {
        formData.append("address", form.phone_number);
      }
      if (form?.password) {
        formData.append("password", form.password);
      }
      if (changeImage) {
        formData.append("image", changeImage);
      }
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/settings`;
      const result = await axios.patch(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };  

  return (
    <main className="bg-neutral-100 px-5 sm:px-16 py-5 sm:py-12 font-mulish">
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-10">
        <section className="w-full lg:w-[30%] pb-10 lg:pb-0">
          <div className="bg-white flex flex-col w-full h-[783px] rounded-3xl pt-10">
            <div className="flex flex-row justify-between pb-10 px-10">
              <p>INFO</p>
              <img src={threeDots} alt="Options" onClick={handleButtonClick} className="cursor-pointer" />
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            </div>
            <div className="flex flex-col items-center pb-10">
              {changeImage ? (
                <img src={URL.createObjectURL(changeImage)} width="150" alt="Profile" className="rounded-full cursor-pointer" />
              ) : (
                <img src={profile?.image || userIcon} width="150" alt="Profile" className="rounded-full cursor-pointer" />
              )}
            </div>
            <div className="flex flex-col items-center px-10">
              <p className="text-xl font-semibold">
                {profile?.first_name || "Update Your Profile"} {profile?.last_name}
              </p>
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
                <p className="text-white font-semibold text-2xl">
                  {profile?.point || 0}
                  <span className="font-normal text-xs"> points</span>
                </p>
              </div>
            </div>
            <div className="px-5">{pointsNeeded} points become a master</div>
            <div className="px-5">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mt-2">
                <div className="bg-blue-500 h-full rounded-full px-10" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-[70%] space-y-10">        
                <div className="bg-white flex flex-row w-full h-[84px] rounded-3xl pl-0 sm:pl-10 space-x-10 justify-center sm:justify-start items-center">
            <button onClick={() => setActiveButton("accountSettings")} className={`relative pb-2 focus:outline-none ${activeButton === "accountSettings" ? "border-b-4 border-primary" : ""}`}>
              <p className="text-black">Account Settings</p>
            </button>
            <button
              onClick={() => {setActiveButton('orderHistory')}}
              className={`relative pb-2 focus:outline-none ${activeButton === 'orderHistory' ? "border-b-4 border-primary" : ""}`}
            >
              <p className="text-black">Order History</p>
            </button>
          </div>
          {activeButton === 'accountSettings' && 
            <>
          <form onSubmit={onSubmitHandler}>
            <div className="bg-white w-full h-auto rounded-3xl px-10 py-10 sm:space-y-10">
              <div className="pb-4 mb-7 sm:mb-0 border-b border-gray-300">Details Information</div>
              <div className="flex flex-col sm:flex-row sm:space-x-8">
                <div className="flex flex-col w-full mb-7 sm:mb-0">
                  <label htmlFor="firstName" className="mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    autoComplete="name"
                    value={form?.first_name}
                    onChange={onChangeHandler}
                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full mb-7 sm:mb-0">
                  <label htmlFor="lastName" className="mb-2">
                    Last Name
                  </label>
                  <input type="text" id="lastName" name="lastName" placeholder="Enter Your Last Name" autoComplete="name" value={form?.last_name} onChange={onChangeHandler} className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-8">
                <div className="flex flex-col w-full mb-7 sm:mb-0">
                  <label htmlFor="email" className="mb-2">
                    E-mail
                  </label>
                  <input type="text" id="email" name="email" placeholder="Enter Your Email" value={form?.email} onChange={onChangeHandler} className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full" />
                </div>
                <div className="flex flex-col w-full mb-7 sm:mb-0">
                  <label htmlFor="phoneNumber" className="mb-2">
                    Phone Number
                  </label>
                  <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number" value={form?.phone_number} onChange={onChangeHandler} className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full" />
                </div>
              </div>
            </div>
            <div className="bg-white w-full h-auto rounded-3xl px-10 py-10 space-y-10">
              <div className="pb-4 border-b border-gray-300">Account and Privacy</div>
              <div className="flex flex-col sm:flex-row sm:space-x-8">
                <div className="flex flex-col w-full relative mb-7 sm:mb-0">
                  <label htmlFor="password" className="mb-2">
                    New Password
                  </label>
                  <input type={passwordVisible1 ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full" />
                  <img src={passwordVisible1 ? eyeIconOpen : eyeIconClose} alt="Toggle password visibility" onClick={togglePasswordVisibility1} className="absolute bottom-0 transform -translate-y-1/2 right-4 cursor-pointer" />
                </div>
                <div className="flex flex-col w-full relative">
                  <label htmlFor="confirmPassword" className="mb-2">
                    Confirm Password
                  </label>
                  <input
                    type={passwordVisible2 ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-[#FCFDFE] p-2 border border-gray-300 rounded-lg w-full"
                  />
                  <img src={passwordVisible2 ? eyeIconOpen : eyeIconClose} alt="Toggle password visibility" onClick={togglePasswordVisibility2} className="absolute bottom-0 transform -translate-y-1/2 right-4 cursor-pointer" />
                </div>
              </div>
            </div>
            <button type="submit" className="bg-primary text-white rounded-2xl py-3 px-10">
              Update Changes
            </button>
          </form>
            </>
        }
        {activeButton === "orderHistory" && <OrderHistory />}          
        </section>
      </div>      
    </main>
  );
}

export default Profile;

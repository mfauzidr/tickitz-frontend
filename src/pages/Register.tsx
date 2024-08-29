import { Link, useNavigate } from "react-router-dom";
import tickitzIcon from "../assets/icons/tickitz_logo.svg";
import eyeIcon from "../assets/icons/eye-icon.svg";
import eyeOffIcon from "../assets/icons/eye-off-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import googleIcon from "../assets/icons/google-icon.svg";
import Input from "../components/Input";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response";

function Register() {
  const [form, setForm] = useState<{ email: string; password: string }>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (agreeToTerms) {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/register`;
      axios
        .post(url, form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result: AxiosResponse<IAuthResponse>) => {
          console.log(result.data);
          navigate("/login");
        })
        .catch((err) => console.error(err));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleAgreeToTerms = () => {
    setAgreeToTerms((prev) => !prev);
  };

  return (
    <main className="font-mulish bg-[url('/src/assets/images/auth.webp')] bg-cover h-screen">
      <section className="bg-black bg-opacity-50 py-8 h-full w-full">
        <div className="grid place-items-center mb-10">
          <img src={tickitzIcon} alt="wallet" />
        </div>
        <div className="bg-white rounded-xl w-4/5 mx-auto tbt:w-96 px-5 md:px-12 py-7">
          <div>
            <div className="mb-3">
              <h1 className="text-lg font-bold mb-2">Welcome to Tickitz👋</h1>
              <p className="text-xs text-gray-400">Registration your data that you can sign in to Tickitz</p>
            </div>
            <form onSubmit={onSubmitHandler}>
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <div className="relative mt-2">
                <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form.email, onChange: onChangeHandler }} />
              </div>
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <div className="relative mt-2">
                <img className="absolute mt-[14px] mr-3 right-0 cursor-pointer" width="15" height="15" src={showPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={togglePasswordVisibility} />
                <Input input={{ type: showPassword ? "text" : "password", name: "password", placeholder: "Enter Your Password", autocomplete: "off", value: form.password, onChange: onChangeHandler }} />
              </div>
              <div className="my-4 flex items-center">
                <input type="checkbox" id="agreeToTerms" checked={agreeToTerms} onChange={toggleAgreeToTerms} className="mr-2" />
                <label htmlFor="agreeToTerms" className="text-xs">
                  I agree to terms & conditions
                </label>
              </div>
              {!agreeToTerms && hasSubmitted && <p className="text-red-500 text-xs my-1">You must agree to the terms and conditions to register.</p>}
              <button className="text-white text-sm bg-primary hover:bg-blue-800 active:bg-blue-900 rounded-lg w-full h-12" type="submit">
                Join for free now
              </button>
              <p className="text-center text-xs my-5">
                Already have an account?
                <Link to="/login" className="text-primary hover:text-blue-800 hover:underline active:text-blue-900 active:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
          <div>
            <p className="text-center text-[10px] text-gray-300">Or</p>
            <div className="mt-2 flex gap-8 justify-center">
              <button className="w-14 h-14 md:w-2/5 md:h-12 shadow-lg hover:bg-gray-50 active:bg-gray-100">
                <div className="flex justify-center">
                  <img width="20" height="20" src={googleIcon} alt="facebook-icon" />
                  <div className="hidden md:flex items-center text-xs text-gray-400 ml-2">Google</div>
                </div>
              </button>
              <button className="w-14 h-14 md:w-2/5 md:h-12 shadow-lg hover:bg-darkwhite active:bg-darkwhite2">
                <div className="flex justify-center">
                  <img width="20" height="20" src={facebookIcon} alt="google-icon" />
                  <div className="hidden md:flex items-center  text-xs text-gray-400 ml-2">Facebook</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;

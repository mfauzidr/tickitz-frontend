import gpay from "../assets/icons/Gpay-icon.svg";
import visa from "../assets/icons/Visa-icon.svg";
import gopay from "../assets/icons/Gopay-icon.svg";
import paypal from "../assets/icons/Paypal-icon.svg";
import dana from "../assets/icons/Dana-icon.svg";
import bca from "../assets/icons/BCA-icon.svg";
import bri from "../assets/icons/BRI-icon.svg";
import ovo from "../assets/icons/ovo-icon.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios from "axios";
import { IProfileBody } from "../types/profile";

interface UserInfo {
  email: string;
  first_name: string;
  id: string;
  image: string | null;
  last_name: string | null;
  phone_number: null | number;
  point: null;
}

interface PaymentMethod {
  id: number;
  name: string;
  image: string;
}

interface SubmitOrderPayload {
  user_id: string;
  payment_method_id: number;
  movie_id?: string;
  date?: string;
  time?: string;
  seat_count: number;
  ticket_status: string;
  total: number; // Convert time to string format for API
}

const paymentMethods: PaymentMethod[] = [
  { id: 1, name: "GPay", image: gpay },
  { id: 2, name: "Visa", image: visa },
  { id: 3, name: "GoPay", image: gopay },
  { id: 4, name: "PayPal", image: paypal },
  { id: 5, name: "Dana", image: dana },
  { id: 6, name: "BCA", image: bca },
  { id: 7, name: "BRI", image: bri },
  { id: 8, name: "OVO", image: ovo },
];

function Payment() {
  const [showModal, setShowModal] = useState(false);
  const modalBgRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const paymentRedux = useSelector((state: RootState) => state.order.payment);
  const MovieRedux = useSelector((state: RootState) => state.order.movie);
  const Token = useSelector((state: RootState) => state.auth.token);
  const [UserInfo, setUserInfo] = useState<UserInfo | null>();
  const [Method, setPaymentMethod] = useState<{ name: string; id: number }>({ name: "", id: 0 });
  const [form, setForm] = useState<IProfileBody>();

  useEffect(() => {
    const GetUserinfo = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/profile`;
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setUserInfo(result.data.data);
        setForm(result.data.data);
      } catch (error) {
        console.error("Failed to fetch user info", error);
      }
    };

    GetUserinfo();
  }, [Token]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === modalBgRef.current) {
      setShowModal(false);
    }
  };

  const handleConfirmPayment = async () => {
    const orderPayload: SubmitOrderPayload = {
      user_id: UserInfo?.id as string,
      payment_method_id: Method.id,
      movie_id: MovieRedux.id,
      date: paymentRedux.date,
      time: paymentRedux.time,
      seat_count: paymentRedux.TiketsCount,
      ticket_status: "Paid",
      total: paymentRedux.Total,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/order/`, orderPayload, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      console.log("Order submitted successfully:", response.data);
      const orderId = response.data.data;
      navigate(`/result/${orderId}`);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formattedDateTime = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(`${paymentRedux.date} ${paymentRedux.time}`));
  console.log(paymentRedux.time);

  return (
    <main className="font-mulish pt-16 pb-20 px-4 md:px-52 lg:px-[450px] bg-neutral-100">
      <section className="self-center px-5 md:px-10 py-10 bg-white rounded-md">
        <h1 className="text-xl font-bold tracking-wide text-slate-900">Payment Info</h1>
        <div className="flex flex-col mt-7">
          <label className="mt-6 text-sm text-gray-600">DATE & TIME</label>
          <div className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200">{formattedDateTime}</div>

          <label className="mt-6 text-sm text-gray-600">MOVIE TITLE</label>
          <div className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200">{paymentRedux.title || "N/A"}</div>

          <label className="mt-6 text-sm text-gray-600">CINEMA NAME</label>
          <div className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200">{paymentRedux.cinema}</div>

          <label className="text-gray-600 mt-6 text-sm">NUMBER OF TICKETS</label>
          <div className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200">{paymentRedux.TiketsCount}</div>

          <label className="text-gray-600 mt-6 text-sm">TOTAL PAYMENT</label>
          <div className="pl-3 py-3 text-sm mt-3 tracking-wider text-[#1D4ED8] bg-white rounded border-b-[2px] border-solid border-neutral-200">Rp.{paymentRedux.Total}</div>

          <h1 className="text-xl font-bold tracking-wide text-slate-900 mt-6">Personal Information</h1>

          <label htmlFor="full_name" className="text-gray-600 mt-6 text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Enter Your Full Name"
            autoComplete="name"
            value={form?.first_name && form?.last_name}
            onChange={onChangeHandler}
            className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200"
          ></input>

          <label htmlFor="email" className="text-gray-600 mt-6 text-sm">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            autoComplete="email"
            value={form?.email}
            onChange={onChangeHandler}
            className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200"
          ></input>

          <label className="text-gray-600 mt-6 text-sm">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Your Phone"
            autoComplete="off"
            value={form?.phone_number}
            onChange={onChangeHandler}
            className="pl-3 py-3 text-sm mt-3 tracking-wider bg-white rounded border-b-[2px] border-solid border-neutral-200"
          ></input>
        </div>
        <h1 className="text-xl font-bold tracking-wide text-slate-900 mt-6">Payment Method</h1>

        <div className="grid grid-cols-2 gap-5 mt-6 tbt:grid-cols-4">
          {paymentMethods.map((payment) => (
            <button
              key={payment.id}
              className={`border border-solid border-neutral-300 rounded-lg py-2 ${Method.name === payment.name ? "bg-blue-500" : ""} grid place-items-center`}
              onClick={() => setPaymentMethod({ name: payment.name, id: payment.id })}
            >
              <img width="50" src={payment.image} alt={payment.name} />
            </button>
          ))}
        </div>
        <button onClick={handleSubmit} type="submit" className="w-full px-5 py-2 mt-6 text-sm font-semibold tracking-wider leading-loose text-center bg-primary rounded active:bg-blue-800 text-slate-50">
          Pay your order
        </button>
        {showModal && (
          <div ref={modalBgRef} onClick={handleBackgroundClick} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
            <div className="bg-white pb-5 px-6 rounded-lg shadow-lg max-w-md w-3/4 tbt:w-full">
              <h1 className="text-xl text-center font-bold mt-1">Payment Info</h1>
              <div className="py-5">
                <div className="inline-block md:flex justify-between w-full">
                  <h1 className="text-gray-400 text-start text-xs">No. Rekening Virtual</h1>
                  <div className="flex justify-between items-center w-full">
                    <p className="font-semibold text-xs">12321328913829724</p>
                    <button className="border border-solid border-primary text-primary text-xs px-3 py-1 rounded-md">Copy</button>
                  </div>
                </div>
                <div className="inline-block md:flex justify-between mt-3">
                  <p className="text-gray-400 text-xs">Total Payment</p>
                  <p className="font-bold text-primary">Rp {paymentRedux.Total}</p>
                </div>
              </div>
              <p className="text-gray-400 tracking-wider leading-6 text-xs">
                Pay this payment bill before it is due, on <span className="text-red-500">June 23, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited
              </p>
              <button onClick={handleConfirmPayment} type="submit" className="px-5 py-3 w-full text-sm leading-6 text-center bg-primary rounded-md text-white mt-5">
                Check Payment
              </button>
              <button
                onClick={handleCloseModal}
                type="submit"
                className="px-5 py-3 mt-3 w-full text-sm leading-6 text-center bg-white rounded-md text-primary font-bold hover:border-2 hover:border-solid hover:border-primary active:border-2 active:border-solid active:border-primary focus:border-2 focus:border-solid focus:border-primary"
              >
                Pay Later
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Payment;

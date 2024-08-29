import tickitz from "../assets/icons/tickitz-white.svg";
import down from "../assets/icons/Down-arrow-white.svg";
import right from "../assets/icons/Right-arrow-white.svg";
import download from "../assets/icons/download-icon.svg";

import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useStoreSelector } from "../redux/hooks";
import axios from "axios";
import { IOrder } from "../types/order";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import moment from "moment";

function Result() {
  const { token } = useStoreSelector((state) => state.auth);
  const { id } = useParams<{ id: string }>();
  const [orders, setOrders] = useState<IOrder | undefined>(undefined);
  const seatsRedux = useSelector((state: RootState) => state.order.seats);

  useEffect(() => {
    const getDetailOrder = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order`;
      try {
        const result = await axios.get(`${url}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setOrders(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailOrder();
  }, [id, token]);

  const layoutRef = useRef<HTMLDivElement>(null);

  const handleDownloadClick = () => {
    if (layoutRef.current === null) {
      return;
    }

    toPng(layoutRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "ticket.png";
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download image", err);
      });
  };

  const formattedDate = moment(orders?.date).format("MMM D");
  const formattedTime = moment(orders?.time).format("LT");

  return (
    <section className="font-mulish md:flex">
      <div className="bg-[url('/src/assets/images/auth.webp')] bg-cover md:w-1/2">
        <div className="bg-black bg-opacity-50 px-20 py-20 tbt:py-48 md:px-10 lg:px-32 md:h-full">
          <div className="grid place-items-center md:inline-block">
            <img src={tickitz} alt="" />
          </div>
          <h1 className="text-white text-center md:text-start text-2xl md:text-4xl font-semibold md:font-bold mt-5">Thankyou For Purchasing</h1>
          <p className="text-white text-center md:text-start text-sm mt-5">We are glad you have purchased the tickets. Please follow the rules and enjoy the movie.</p>
          <div className="md:flex mt-5 md:gap-5">
            <p className="text-white text-center md:text-start text-sm">Please Download Your Ticket</p>
            <div className="grid place-items-center mt-3 md:mt-0">
              <img src={down} width="20" alt="" className="md:hidden" />
              <img src={right} width="20" alt="" className="hidden md:grid" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-20 px-8 tbt:px-48 md:px-28 lg:px-32 bg-neutral-100 md:w-1/2">
        <div ref={layoutRef}>
          <div className="self-center px-5 md:px-10 py-10 bg-white border-b-2 border-dashed rounded-t-lg rounded-b-2xl grid place-items-center">
            <QRCode value={orders?.id || "Default Value"} size={135} />
          </div>
          <div className="pt-10 pb-5 px-8 md:px-10 py-10 bg-white rounded-t-2xl rounded-b-lg">
            <div className="flex justify-between">
              <div className="w-fit">
                <div>
                  <h1 className="text-gray-400 text-start text-xs">Movie</h1>
                  <p className="font-semibold text-sm mt-1">{orders?.movie_title}</p>
                </div>
                <div className="mt-5">
                  <h1 className="text-gray-400 text-start text-xs">Date</h1>
                  <p className="font-semibold text-sm mt-1">{formattedDate}</p>
                </div>
                <div className="mt-5">
                  <h1 className="text-gray-400 text-start text-xs">Count</h1>
                  <p className="font-semibold text-sm mt-1">{orders?.seat_count} pcs</p>
                </div>
              </div>
              <div className="w-fit">
                <div>
                  <h1 className="text-gray-400 text-start text-xs">Category</h1>
                  <p className="font-semibold text-sm mt-1">{orders?.genres}</p>
                </div>
                <div className="mt-5">
                  <h1 className="text-gray-400 text-start text-xs">Time</h1>
                  <p className="font-semibold text-sm mt-1">{formattedTime}</p>
                </div>
                <div className="mt-5">
                  <h1 className="text-gray-400 text-start text-xs">Seats</h1>
                  <p className="font-semibold text-sm mt-1">{seatsRedux.seat}</p>
                </div>
              </div>
            </div>
            <div className="flex mt-10 px-5 tbt:px-10 md:px-5 py-2 justify-between border-2 border-solid border-neutral-100">
              <h1>Total</h1>
              <p className="font-bold">Rp {orders?.total}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleDownloadClick}
            type="submit"
            className="w-full tbt:w-1/2 md:w-full lg:w-1/2 flex justify-center gap-5 px-5 py-2 text-sm mt-6 font-bold tracking-wider leading-loose text-center bg-transparent rounded border border-solid border-primary"
          >
            <div className="self-center">
              <img width="20" src={download} alt="" />
            </div>
            <p className="text-primary">Download</p>
          </button>
        </div>
        <Link to="/">
          <div className="flex justify-center">
            <button type="submit" className="w-full tbt:w-1/2 md:w-full lg:w-1/2 px-5 py-2 mt-6 text-sm font-semibold tracking-wider leading-loose text-center bg-primary rounded active:bg-blue-800 text-slate-50">
              Done
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Result;

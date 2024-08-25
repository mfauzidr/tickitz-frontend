import { useEffect, useRef, useState } from "react";
import Seat from "../components/Seat";
import downArrow from "../assets/icons/Down-arrow.svg";
import rightArrow from "../assets/icons/Right-arrow.svg";
import cine from "../assets/icons/cineone21.svg";
import step from "../assets/icons/Step.svg";
import { useNavigate } from "react-router-dom";

function Order() {
  interface Movie {
    poster: string;
    title: string;
    genres: string[];
  }

  interface Cinema {
    logo: string;
    name: string;
  }

  const movie: Movie = {
    poster: "https://cdn.builder.io/api/v1/image/assets/TEMP/0baa3093e3b791d26b72f08e2658b1d538249e02c59f4ede4e9a38108910e3d5?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    title: "The Great Adventure",
    genres: ["Action", "Adventure"],
  };

  const cinema: Cinema = {
    logo: cine,
    name: "CineOne21 Cinema",
  };
  const seatAlphabets = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
  ];
  const seatNumerics = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
    { id: 11, name: "11" },
    { id: 12, name: "12" },
    { id: 13, name: "13" },
    { id: 14, name: "14" },
  ];

  const aleft: string[] = Array.from({ length: 7 }, (_, index) => `A${index + 1}`);
  const aright: string[] = Array.from({ length: 7 }, (_, index) => `A${index + 8}`);
  const bleft: string[] = Array.from({ length: 7 }, (_, index) => `B${index + 1}`);
  const bright: string[] = Array.from({ length: 7 }, (_, index) => `B${index + 8}`);
  const cleft: string[] = Array.from({ length: 7 }, (_, index) => `C${index + 1}`);
  const cright: string[] = Array.from({ length: 7 }, (_, index) => `C${index + 8}`);
  const dleft: string[] = Array.from({ length: 7 }, (_, index) => `D${index + 1}`);
  const dright: string[] = Array.from({ length: 7 }, (_, index) => `D${index + 8}`);
  const eleft: string[] = Array.from({ length: 7 }, (_, index) => `E${index + 1}`);
  const eright: string[] = Array.from({ length: 7 }, (_, index) => `E${index + 8}`);
  const fleft: string[] = Array.from({ length: 7 }, (_, index) => `F${index + 1}`);
  const fright: string[] = Array.from({ length: 7 }, (_, index) => `F${index + 8}`);
  const gleft: string[] = Array.from({ length: 7 }, (_, index) => `G${index + 1}`);
  const gright: string[] = Array.from({ length: 7 }, (_, index) => `G${index + 8}`);

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedAlphabet, setSelectedAlphabet] = useState("A");
  const [selectedNumeric, setSelectedNumeric] = useState("1");
  const [showModal, setShowModal] = useState(false);
  const modalBgRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleAlphabetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlphabet(event.target.value);
  };

  const handleNumericChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumeric(event.target.value);
  };

  const toggleSeatSelection = (seatNumber: string) => {
    setSelectedSeats((prevSelectedSeats) => (prevSelectedSeats.includes(seatNumber) ? prevSelectedSeats.filter((seat) => seat !== seatNumber) : [...prevSelectedSeats, seatNumber]));
  };

  const handleAddNewSeat = () => {
    const newSeat = `${selectedAlphabet}${selectedNumeric}`;
    if (!selectedSeats.includes(newSeat)) {
      setSelectedSeats([...selectedSeats, newSeat]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    setShowModal(false);
    navigate("/payment");
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === modalBgRef.current) {
      setShowModal(false);
    }
  };

  return (
    <section className="pt-5 pb-20 px-4 tbt:px-10 lg:px-32 bg-indigo-100 font-mulish">
      <div className="hidden pb-8 md:grid place-items-center">
        <img width="350" src={step} alt="" />
      </div>
      <div className="md:flex md:gap-3 md:justify-between">
        <div className="bg-white p-2 rounded-lg md:w-3/4">
          <div className="p-5 border rounded-lg border-blue-700 border-solid md:flex md:justify-between">
            <div className="md:flex md:gap-5">
              <div className="grid place-items-center h-[100px] md:h-[130px] overflow-hidden">
                <img loading="lazy" width="200" src={movie.poster} alt="Movie poster" />
              </div>
              <div>
                <h1 className="text-xl text-center md:text-start font-semibold mt-3 md:mt-0">{movie.title}</h1>
                <div className="flex gap-2 justify-center md:justify-normal mt-3 md:mt-5 text-center text-gray-400">
                  {movie.genres.map((genre, index) => (
                    <div key={index} className="px-3 py-2 rounded-3xl bg-slate-400 bg-opacity-10 text-sm">
                      {genre}
                    </div>
                  ))}
                </div>
                <p className="text-center md:text-start mt-3 md:mt-5 font-semibold">Regular - 13.00 PM</p>
              </div>
            </div>
            <div className="flex justify-center mt-3 md:mt-0 md:items-end">
              <button className="text-center text-primary md:text-white px-5 py-1 rounded-3xl bg-primary bg-opacity-40 md:bg-opacity-100 text-sm md:h-10 md:rounded-lg">Change</button>
            </div>
          </div>
          <div className="py-10">
            <div>
              <h1 className="font-semibold">Choose Your Seat</h1>
              <div className="w-full my-1">
                <p className="text-xs text-center">Screen</p>
              </div>
              <div className="flex gap-1 justify-center">
                <div className="bg-green-600 w-0.5 rounded-sm"></div>
                <div>
                  <div className="flex gap-3 tbt:gap-5">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {aleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {aright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 tbt:gap-5 mt-1">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {bleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {bright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 tbt:gap-5 mt-1">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {cleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {cright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 tbt:gap-5 mt-1">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {dleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {dright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 tbt:gap-5 mt-1">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {eleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {eright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 tbt:gap-5 mt-1">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {fleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {fright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 tbt:gap-5 mt-1">
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {gleft.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 justify-center">
                      {gright.map((seat) => (
                        <Seat key={seat} seatNumber={seat} isSelected={selectedSeats.includes(seat)} onClick={toggleSeatSelection} isClickable={!isMobile} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 tbt:gap-5 mt-1">
                    <div className="bg-pink-300 w-[122px] tbt:w-[220px] h-1 rounded-sm"></div>
                    <div className="bg-pink-300 w-[122px] tbt:w-[220px] h-1 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-semibold">Seating Key</h1>
              <div className="flex flex-wrap gap-5 mt-5">
                <div className="flex gap-3">
                  <img src={downArrow} width="18.5" alt="" />
                  <p className="text-sm">A - G</p>
                </div>
                <div className="flex gap-3">
                  <img src={rightArrow} width="18.5" alt="" />
                  <p className="text-sm">1 - 14</p>
                </div>
                <div className="flex gap-3.5 items-center">
                  <div className="bg-gray-300 p-2 rounded-sm"></div>
                  <p className="text-sm">Available</p>
                </div>
                <div className="flex gap-3.5 items-center">
                  <div className="bg-gray-500 p-2 rounded-sm"></div>
                  <p className="text-sm">Sold</p>
                </div>

                <div className="flex gap-3.5 items-center">
                  <div className="bg-primary p-2 rounded-sm"></div>
                  <p className="text-sm">Selected</p>
                </div>
              </div>
            </div>
            <div className="mt-5 md:hidden">
              <div className="flex justify-between">
                <h1 className="font-semibold">Choosed</h1>
                <h1 className="font-semibold">
                  {selectedAlphabet}
                  {selectedNumeric}
                </h1>
              </div>
              <div className="flex justify-center gap-10 mt-5">
                <div className="flex w-20 px-3 py-3.5 bg-gray-100 rounded-md mt-3 md:w-48 md:h-12">
                  <select id="seatAlphabet" name="seatAlphabet" className="bg-transparent outline-none w-full" value={selectedAlphabet} onChange={handleAlphabetChange}>
                    {seatAlphabets.map((seatAlphabet) => (
                      <option key={seatAlphabet.id} value={seatAlphabet.name}>
                        {seatAlphabet.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex w-20 px-3 py-3.5 bg-gray-100 rounded-md mt-3 md:w-48 md:h-12">
                  <select id="seatNumeric" name="seatNumeric" className="bg-transparent outline-none w-full" value={selectedNumeric} onChange={handleNumericChange}>
                    {seatNumerics.map((seatNumeric) => (
                      <option key={seatNumeric.id} value={seatNumeric.name}>
                        {seatNumeric.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button className="text-center w-full text-primary font-bold px-5 py-3 rounded-3xl bg-white border border-solid border-primary text-sm" onClick={handleAddNewSeat}>
                  Add New Seat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block h-1/2 w-1/4">
          <div className="bg-white py-6 px-1.5 rounded-lg">
            <div className="grid place-items-center">
              <img width="100" src={cinema.logo} alt="" />
            </div>
            <h1 className="text-center font-bold mt-1">{cinema.name}</h1>
            <div className="py-5 border-b border-solid border-black">
              <div className="flex justify-between text-xs">
                <p className="text-gray-400">Movie selected</p>
                <p className="font-semibold text-right">{movie.title}</p>
              </div>
              <div className="flex justify-between text-xs mt-3">
                <p className="text-gray-400">Tuesday, 07 July 2020</p>
                <p className="font-semibold text-right">13:00pm</p>
              </div>
              <div className="flex justify-between text-xs mt-3">
                <p className="text-gray-400">One ticket price</p>
                <p className="font-semibold text-right">Rp 25000</p>
              </div>
              <div className="flex justify-between text-xs mt-3">
                <p className="text-gray-400">Seat Choosed</p>
                <p className="font-semibold text-right">C4, C5, C6</p>
              </div>
            </div>
            <div className="flex justify-between text-sm py-3 mt-3">
              <p className="text-black font-bold">Total Payment</p>
              <p className="text-primary font-bold text-right">Rp 75000</p>
            </div>
          </div>
          <button type="submit" className="px-5 py-4 w-full text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5">
            Checkout Now
          </button>
        </div>
      </div>
      <button onClick={handleSubmit} type="submit" className="md:hidden px-5 py-4 w-full text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5">
        Submit
      </button>
      {showModal && (
        <div ref={modalBgRef} onClick={handleBackgroundClick} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full">
            <div className="grid place-items-center">
              <img width="100" src={cinema.logo} alt="" />
            </div>
            <h1 className="text-center font-bold mt-1">{cinema.name}</h1>
            <div className="py-5 border-b border-solid border-black">
              <div className="flex justify-between text-xs">
                <p className="text-gray-400 text-start">Movie selected</p>
                <p className="font-semibold text-right">{movie.title}</p>
              </div>
              <div className="flex justify-between text-xs mt-3">
                <p className="text-gray-400">Tuesday, 07 July 2020</p>
                <p className="font-semibold">13:00pm</p>
              </div>
              <div className="flex justify-between text-xs mt-3">
                <p className="text-gray-400">One ticket price</p>
                <p className="font-semibold text-right">Rp 25000</p>
              </div>
              <div className="flex justify-between text-xs mt-3">
                <p className="text-gray-400">Seat Choosed</p>
                <p className="font-semibold text-right">C4, C5, C6</p>
              </div>
            </div>
            <div className="flex justify-between text-sm py-3 mt-3">
              <p className="text-black font-bold">Total Payment</p>
              <p className="text-primary font-bold text-right">Rp 75000</p>
            </div>
            <button onClick={handleConfirmOrder} type="submit" className="px-5 py-4 w-full text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Order;

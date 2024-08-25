import { useState } from "react";
import downArrow from "../assets/icons/Down-arrow.svg";
import rightArrow from "../assets/icons/Right-arrow.svg";

function Order() {
  interface Movie {
    poster: string;
    title: string;
    genres: string[];
  }
  const movie: Movie = {
    poster: "https://cdn.builder.io/api/v1/image/assets/TEMP/0baa3093e3b791d26b72f08e2658b1d538249e02c59f4ede4e9a38108910e3d5?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    title: "The Great Adventure",
    genres: ["Action", "Adventure"],
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
  const [selectedAlphabet, setSelectedAlphabet] = useState("A");
  const [selectedNumeric, setSelectedNumeric] = useState("1");

  const handleAlphabetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlphabet(event.target.value);
  };

  const handleNumericChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumeric(event.target.value);
  };

  return (
    <section className="py-10 px-4 tbt:px-10 bg-indigo-100 font-mulish">
      <div className="bg-white p-2 rounded-lg">
        <div className="p-5 border rounded-lg border-blue-700 border-solid md:flex md:gap-5">
          <div className="grid place-items-center h-[100px] md:h-[130px] overflow-hidden">
            <img loading="lazy" width="200" src={movie.poster} alt="Movie poster" />
          </div>
          <div>
            <h1 className="text-xl text-center font-semibold mt-3 md:mt-0">{movie.title}</h1>
            <div className="flex gap-2 justify-center md:justify-normal mt-3 md:mt-5 text-center text-gray-400">
              {movie.genres.map((genre, index) => (
                <div key={index} className="px-3 py-2 rounded-3xl bg-slate-400 bg-opacity-10 text-sm">
                  {genre}
                </div>
              ))}
            </div>
            <p className="text-center md:text-start mt-3 md:mt-5 font-semibold">Regular - 13.00 PM</p>
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
                <div className="flex items-center gap-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                      <div className="bg-gray-300 p-[7px] tbt:p-3 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-3">
                    <div className="bg-pink-300 w-[122px] tbt:w-48 h-1 rounded-sm"></div>
                    <div className="bg-pink-300 w-[122px] tbt:w-48 h-1 rounded-sm"></div>
                  </div>
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
                <select id="seatAlphabet" name="seatAlphabet" className="bg-transparent outline-none w-full" value={selectedNumeric} onChange={handleNumericChange}>
                  {seatNumerics.map((seatNumeric) => (
                    <option key={seatNumeric.id} value={seatNumeric.name}>
                      {seatNumeric.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="text-center w-full text-primary font-bold px-5 py-3 rounded-3xl bg-white border border-solid border-primary text-sm">Add New Seat</button>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="md:hidden px-5 py-4 w-full text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5">
        Submit
      </button>
    </section>
  );
}

export default Order;

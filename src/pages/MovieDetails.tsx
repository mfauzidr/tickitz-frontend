import { useState } from 'react';
import MovieBannerAndDetails from '../components/MovieBannerDetails';
import CinemaSelection from '../components/SelectCinema';
import Pagination from '../components/Pagination';
import cine1 from "../assets/icons/Ebu_Id.svg";
import cine2 from "../assets/icons/cineone21.svg";
import cine3 from "../assets/icons/hiflix.svg";
import banner from "../assets/images/Rectangle 613.jpg";
import calendar from "../assets/icons/Calendar.svg";
import location from "../assets/icons/Location.svg";
import chooseTime from "../assets/icons/ChooseTime.svg";

//interfaces for movie, cinema, and booking details
interface Movie {
  bannerImage: string;
  poster: string;
  title: string;
  genres: string[];
  releaseDate: string;
  duration: string;
  director: string;
  casts: string[];
  synopsis: string;
}

interface Cinema {
  id: string;
  logo: string;
  name: string;
  Category: {
    [categoryName: string]: {
      times: string[];
    };
  };
}

interface HeaderData {
  title: string;
  subtitle: string;
}

interface FooterData {
  contact: string;
  socialMedia: {
    facebook: string;
    twitter: string;
  };
}

// Dummy Data
const movie: Movie = {
  bannerImage: banner,
  poster: "https://cdn.builder.io/api/v1/image/assets/TEMP/0baa3093e3b791d26b72f08e2658b1d538249e02c59f4ede4e9a38108910e3d5?apiKey=b75a55b5285647ecbff457fc782c7d82&",
  title: "The Great Adventure",
  genres: ["Action", "Adventure"],
  releaseDate: "2024-05-15",
  duration: "2h 30m",
  director: "John Doe",
  casts: ["Actor A", "Actor B", "Actor C"],
  synopsis: " A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknownA thrilling adventure of a group of explorers who embark on a journey to the unknownA thrilling adventure of a group of explorers who embark on a journey to the unknown."
};


// dummy data cinemas studio
const movieData = {
  cinemas: [
    {
      id: "cinema1",
      logo: cine1,
      name: "Cinema One",
      Category: {
        primary: {
          times: ["06:00 PM", "08:00 PM", "10:00 PM"],
        },
        luxury: {
          times: ["07:00 PM", "09:00 PM"],
        },
      },
    },
    {
      id: "cinema2",
      logo: cine2,
      name: "Cinema Two",
      Category: {
        standard: {
          times: ["05:00 PM", "07:00 PM", "09:00 PM"],
        },
        premium: {
          times: ["06:30 PM", "08:30 PM", "10:30 PM"],
        },
      },
    },
    {
      id: "cinema3",
      logo: cine3,
      name: "Cinema Three",
      Category: {
        basic: {
          times: ["04:00 PM", "06:00 PM", "08:00 PM"],
        },
        deluxe: {
          times: ["07:00 PM", "09:00 PM", "11:00 PM"],
        },
      },
    },
    {
      id: "cinema4",
      logo: cine1,
      name: "Cinema Four",
      Category: {
        economy: {
          times: ["03:00 PM", "05:00 PM", "07:00 PM"],
        },
        VIP: {
          times: ["06:00 PM", "08:00 PM", "10:00 PM"],
        },
      },
    },
    {
      id: "cinema5",
      logo: "cine2.png",
      name: "Cinema Five",
      Category: {
        regular: {
          times: ["01:00 PM", "03:00 PM", "05:00 PM"],
        },
        exclusive: {
          times: ["06:00 PM", "08:00 PM"],
        },
      },
    },
  ] as Cinema[],
  headerData: {
    title: "Book Your Tickets Now!",
    subtitle: "Choose your favorite cinema and movie time",
  } as HeaderData,
  footerData: {
    contact: "contact@example.com",
    socialMedia: {
      facebook: "https://facebook.com/example",
      twitter: "https://twitter.com/example",
    },
  } as FooterData,
};

///API dummy date, location, times movises
const dates = [
  { id: 1, date: "2024-08-25" },
  { id: 2, date: "2024-08-26" },
  { id: 3, date: "2024-08-27" },
  { id: 4, date: "2024-08-28" },
];

const locations = [
  { id: 1, name: "Purwokerto" },
  { id: 2, name: "Jakarta" },
  { id: 3, name: "Bandung" },
  { id: 4, name: "Surabaya" },
];

const times = [
  { id: 1, time: "09:00 AM" },
  { id: 2, time: "12:00 PM" },
  { id: 3, time: "03:00 PM" },
  { id: 4, time: "06:00 PM" },
];


const MovieTicketBooking = () => {
  const [selectedCinemaId, setSelectedCinemaId] = useState<string>(movieData.cinemas[0].id);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCinemaSelect = (cinemaId: string) => {
    setSelectedCinemaId(cinemaId);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <><div className="flex flex-col bg-white justify">
      <div className=''>
        {movie && <MovieBannerAndDetails movie={movie} />}
      </div>
      <div className="flex z-10 flex-col p-8 self-center content-end w-full max-w-[1123px] max-md:max-w-full">
        {movieData.cinemas.length > 0 && (
          <>
            <section className="self-stretch pt-8 w-full  max-md:max-w-full">
              <h2 className="text-3xl tracking-wider leading-none text-neutral-900">Book Tickets</h2>
              <form className="flex gap-2 md:gap-5 mt-10 max-md:flex-col">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-7">
                    <label htmlFor="date" className="text-xl font-semibold tracking-wide leading-9 text-black">
                      Choose Date
                    </label>
                    <div className="flex flex-col mt-3 w-full text-base tracking-wide leading-7 text-gray-600 whitespace-nowrap max-w-[284px]">
                      <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-md max-md:px-5">
                        <div className="flex gap-6">
                          <img loading="lazy" src={calendar} alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                          <select id="date" name="date" className="bg-transparent outline-none">
                            {dates.map((date) => (
                              <option key={date.id} value={date.date}>
                                {date.date}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-7">
                    <label htmlFor="time" className="text-xl font-semibold tracking-wide leading-9 text-black">
                      Choose Time
                    </label>
                    <div className="flex flex-col mt-3 w-full text-base tracking-wide leading-7 text-gray-600 whitespace-nowrap max-w-[284px]">
                      <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-md max-md:px-5">
                        <div className="flex gap-6">
                          <img loading="lazy" src={chooseTime} alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                          <select id="time" name="time" className="bg-transparent outline-none">
                            {times.map((time) => (
                              <option key={time.id} value={time.time}>
                                {time.time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-7">
                    <label htmlFor="location" className="text-xl font-semibold tracking-wide leading-9 text-black">
                      Choose Location
                    </label>
                    <div className="flex flex-col mt-3 w-full text-base tracking-wide leading-7 text-gray-600 whitespace-nowrap max-w-[284px]">
                      <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-md max-md:px-5">
                        <div className="flex gap-6">
                          <img loading="lazy" src={location} alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                          <select id="location" name="location" className="bg-transparent outline-none">
                            {locations.map((location) => (
                              <option key={location.id} value={location.name}>
                                {location.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <button type="submit" className="grow gap-1.5 self-stretch px-5 py-4 h-4 w-full text-sm tracking-wider leading-6 text-center whitespace-nowrap bg-blue-700 rounded-md min-h-[56px] text-slate-50 ">
                    Filter
                  </button>
                </div>
              </form>
            </section>            
            <CinemaSelection
              cinemas={movieData.cinemas}
              selectedCinemaId={selectedCinemaId}
              onCinemaSelect={handleCinemaSelect}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(movieData.cinemas.length / 4)}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default MovieTicketBooking;

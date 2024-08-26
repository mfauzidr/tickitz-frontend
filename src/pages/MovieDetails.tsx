import { useEffect, useState } from "react";
import MovieBannerAndDetails from "../components/MovieBannerDetails";
import CinemaSelection from "../components/SelectCinema";
// import Pagination from "../components/Pagination";
import cine1 from "../assets/icons/Ebu_Id.svg";
import cine2 from "../assets/icons/cineone21.svg";
import cine3 from "../assets/icons/hiflix.svg";
import calendar from "../assets/icons/Calendar.svg";
import location from "../assets/icons/Location.svg";
import chooseTime from "../assets/icons/ChooseTime.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Movie } from "../types/moviesData";


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
      logo: cine2,
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
  const { id } = useParams<{ id: string }>();
  const [selectedCinemaId, setSelectedCinemaId] = useState<string>(movieData.cinemas[0].id);
  const [movies, setMovies] = useState<Movie | undefined>( undefined )

  // const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCinemaSelect = (cinemaId: string) => {
    setSelectedCinemaId(cinemaId);
  };

  useEffect(()=>{
    const asyncFunctest = async ()  =>{
      try {
        const url = `http://localhost:8080/movie/${id}`
        var result = await axios.get(url);
        setMovies(result.data.data)
      } catch (error) {
          console.log(error);
      }
    }
    asyncFunctest();
  },[])

  return (
    <>
      <div className="flex flex-col bg-white justify">
        <div className="">{movies && <MovieBannerAndDetails movie={movies} />}</div>
        <div className="py-8 px-4 tbt:px-10 lg:px-32">
          {movieData.cinemas.length > 0 && (
            <>
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-center md:text-start">Book Tickets</h2>
                <form className="mt-5">
                  <div className="md:flex md:gap-10">
                    <div>
                      <label htmlFor="date" className="hidden md:block text-xl font-semibold">
                        Choose Date
                      </label>
                      <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 md:w-48 md:h-12">
                        <img loading="lazy" width="18" src={calendar} alt="" />
                        <select id="date" name="date" className="bg-transparent outline-none w-full">
                          {dates.map((date) => (
                            <option key={date.id} value={date.date}>
                              {date.date}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="hidden md:block text-xl font-semibold">
                        Choose Time
                      </label>
                      <div className="hidden md:flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 md:w-48 md:h-12">
                        <img loading="lazy" width="18" src={chooseTime} alt="" />
                        <select id="time" name="time" className="bg-transparent outline-none w-full">
                          {times.map((time) => (
                            <option key={time.id} value={time.time}>
                              {time.time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="location" className="hidden md:block text-xl font-semibold">
                        Choose Location
                      </label>
                      <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md mt-3 md:w-48 md:h-12">
                        <img loading="lazy" width="18" src={location} alt="" />
                        <select id="location" name="location" className="bg-transparent outline-none w-full">
                          {locations.map((location) => (
                            <option key={location.id} value={location.name}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="md:self-end px-5 md:h-12 md:py-1 py-4 w-full md:w-44 text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5 md:mt-0">
                      Filter
                    </button>
                  </div>
                </form>
              </div>
              <CinemaSelection cinemas={movieData.cinemas} selectedCinemaId={selectedCinemaId} onCinemaSelect={handleCinemaSelect} />
              {/* <Pagination currentPage={currentPage} totalPages={Math.ceil(movieData.cinemas.length / 4)} onPageChange={handlePageChange} /> */}
              <button type="submit" className="px-5 py-4 w-full text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5">
                Book now
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieTicketBooking;

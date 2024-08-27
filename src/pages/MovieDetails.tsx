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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Movie } from "../types/moviesData";
import { useDispatch } from "react-redux";
import { setCinema, setMovieOrder } from "../redux/slices/MovieOrder";

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
  ] as Cinema[]
};


// Fungsi untuk menghasilkan rentang tanggal
const generateDateRange = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates: string[] = [];

  while (start <= end) {
    dates.push(new Date(start).toISOString().split('T')[0]); // Format YYYY-MM-DD
    start.setDate(start.getDate() + 1);
  }

  return dates;
};


const MovieTicketBooking = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCinemaId, setSelectedCinemaId] = useState<string>('');
  const [movies, setMovies] = useState<Movie | undefined>(undefined)

  const Navi = useNavigate()
  const [TimeOrder, setTime] = useState('')
  const [LocOrder, SetLocation] = useState('')
  const [DateOrder , setDate] = useState('')

  const dispatch = useDispatch();
  // const moviesRedux = useSelector((state: RootState) => state.order.movie);
  // const cinemasRedux = useSelector((state: RootState) => state.order.cinema);

  const [startDate, endDate] = movies?.airing_dates ? movies.airing_dates.split(` - `).map((date) => date.trim()) : ["", ""];
  const dateRange = generateDateRange(startDate, endDate);
  const locations = movies?.locations ? movies.locations.split(",").map((g) => g.trim()) : [];
  const times = movies?.airing_times ? movies.airing_times.split(",").map((g) => g.trim()) : [];

  // const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCinemaSelect = (cinemaId: string, cinemaName: string) => {
    setSelectedCinemaId(cinemaId);
    dispatch(setCinema(cinemaName))
  };

  useEffect(() => {
    const asyncFunctest = async () => {
      try {
        const url = `http://localhost:8080/movie/${id}`
        var result = await axios.get(url);
        setMovies(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    asyncFunctest();
  }, [id])


  const handleBookNow = () => {
    const idMovie = id;
    dispatch(setMovieOrder({ idMovie, DateOrder, TimeOrder, LocOrder }));
    dispatch(setCinema({  }));

    Navi(`/order/${id}`)
  };

  return (
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
                        <select id="date" name="date" className="bg-transparent outline-none w-full" onChange={(e)=>{setDate(e.target.value)}} >
                          {dateRange.map((date) => (
                            <option key={date} value={date}>
                              {date}
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
                        <select id="time" name="time" className="bg-transparent outline-none w-full" onChange={(e)=>{setTime(e.target.value)}}>
                          {times.map((time) => (
                            <option key={time} value={time}>
                              {time}
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
                        <select id="location" name="location" className="bg-transparent outline-none w-full" onChange={(e)=>{SetLocation(e.target.value)}}>
                          {locations.map((location) => (
                            <option key={location} value={location}>
                              {location}
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
              <button type="submit" className="px-5 py-4 w-full text-sm leading-6 text-center bg-blue-700 rounded-md text-white mt-5" onClick={handleBookNow}>
                Book now
              </button>
            </>
          )}
        </div>
      </div>
  );
};

export default MovieTicketBooking;

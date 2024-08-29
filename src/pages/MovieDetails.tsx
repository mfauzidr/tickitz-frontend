import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCinema, setMovieOrder } from "../redux/slices/MovieOrder";
import { RootState } from "../redux/store";
import MovieBannerAndDetails from "../components/MovieBannerDetails";
import calendar from "../assets/icons/Calendar.svg";
import location from "../assets/icons/Location.svg";
import chooseTime from "../assets/icons/ChooseTime.svg";
import dropdown from "../assets/icons/DropdownArrow.svg";
import cine1 from "../assets/icons/Ebu_Id.svg";
import cine2 from "../assets/icons/cineone21.svg";
import cine3 from "../assets/icons/hiflix.svg";
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

const movieData = {
  cinemas: [
    {
      id: "cinema1",
      logo: cine1,
      name: "Ebu Id",
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
      name: "CineOne 21",
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
      name: "Hiflix",
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
      name: "Ebu Id",
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
      name: "Cine One",
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
};

const generateDateRange = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates: string[] = [];
  while (start <= end) {
    dates.push(new Date(start).toISOString().split("T")[0]); // Format YYYY-MM-DD
    start.setDate(start.getDate() + 1);
  }
  return dates;
};

const MovieTicketBooking = () => {

  const { id } = useParams<{ id: string }>();
  const [selectedCinemaId, setSelectedCinemaId] = useState<string>("");
  const [movies, setMovies] = useState<Movie | undefined>(undefined);
  const Token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/${id}`;
        const result = await axios.get(url, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        setMovies(result.data.data);
        const times = result.data.data.airing_times ? result.data.data.airing_times.split(",").map((g: string) => g.trim()) : [''];
        const locations = result.data.data.locations ? result.data.data.locations.split(",").map((g: string) => g.trim()) : [''];
        const startDate = result.data.data.airing_dates?.split(" - ")[0] || "";
        setLocOrder(locations[0]);
        setTimeOrder(times[0]);
        setDateOrder(startDate);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [])

  const startDate = movies?.airing_dates?.split(" - ")[0] || "";
  const endDate = movies?.airing_dates?.split(" - ")[1] || "";
  const dateRange = generateDateRange(startDate, endDate);
  const locations = movies?.locations ? movies.locations.split(",").map((g) => g.trim()) : [];
  const times = movies?.airing_times ? movies.airing_times.split(",").map((g) => g.trim()) : [];
  const [TimeOrder, setTimeOrder] = useState<string>('');
  const [LocOrder, setLocOrder] = useState<string>('');
  const [DateOrder, setDateOrder] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleBookNow = () => {
    console.log(id, ". date order :" + DateOrder, ". time order :" + TimeOrder, ". location order :" + LocOrder)
    dispatch(setMovieOrder({ idMovie: id, DateOrder, TimeOrder, LocOrder }));
    navigate(`/order/${id}`);
  };

  const handleCinemaSelect = (cinemaId: string, cinemaName: string, logo: string) => {
    setSelectedCinemaId(cinemaId);
    dispatch(setCinema({ logo, name: cinemaName }));
  };

  const handleTimeSelection = (time: string, cinema: Cinema) => {
    setSelectedTime(time);
    handleCinemaSelect(cinema.id, cinema.name, cinema.logo);
  };

  return (
    <div className="flex flex-col bg-white font-mulish">
      {movies && <MovieBannerAndDetails movie={movies} />}
      <div className="py-8 px-4 tbt:px-10 lg:px-32">
        {movieData.cinemas.length > 0 && (
          <>
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-center md:text-start">Book Tickets</h2>
              <form className="mt-5">
                <div className="md:flex md:gap-10">
                  <div>
                    <label htmlFor="date" className="hidden md:block text-xl font-semibold">Choose Date</label>
                    <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 md:w-48 md:h-12">
                      <img loading="lazy" width="18" src={calendar} alt="" />
                      <select
                        id="date"
                        name="date"
                        value={DateOrder}
                        className="bg-transparent outline-none w-full"
                        onChange={(e) => setDateOrder(e.target.value)}
                      >
                        {dateRange.map((date) => (
                          <option key={date} value={date}>{date}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="hidden md:block text-xl font-semibold">Choose Time</label>
                    <div className="hidden md:flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 md:w-48 md:h-12">
                      <img loading="lazy" width="18" src={chooseTime} alt="" />
                      <select
                        id="time"
                        name="time"
                        value={TimeOrder}
                        className="bg-transparent outline-none w-full"
                        onChange={(e) => setTimeOrder(e.target.value)}
                      >
                        {times.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="location" className="hidden md:block text-xl font-semibold">Choose Location</label>
                    <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md mt-3 md:w-48 md:h-12">
                      <img loading="lazy" width="18" src={location} alt="" />
                      <select
                        id="location"
                        name="location"
                        className="bg-transparent outline-none w-full"
                        onChange={(e) => setLocOrder(e.target.value)}
                      >
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
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
            <section className="mt-10 max-md:max-w-full font-mulish">
              <div className="flex gap-9 mb-10">
                <h2 className="text-xl font-semibold tracking-wide leading-9 text-black">Choose Cinema</h2>
                <span className="my-auto text-lg font-bold tracking-wider leading-none text-slate-400">
                  {movieData.cinemas.length} Result{movieData.cinemas.length !== 1 && "s"}
                </span>
              </div>
              <div className="flex gap-5 flex-col md:flex-row md:justify-center">
                {movieData.cinemas.map((cinema) => (
                  <div key={cinema.id} className={`flex flex-col ${cinema.id === selectedCinemaId ? "border-2 md:border-none rounded-lg border-solid border-neutral-200 md:bg-blue-500" : ""}`}>
                    <button
                      onClick={() => handleCinemaSelect(cinema.id, cinema.name, cinema.logo)}
                      className={`hidden md:flex flex-col grow justify-center px-8 py-9 rounded-lg items-center border-2 border-solid border-neutral-200 max-md:px-5 max-md:mt-4`}
                    >
                      <img loading="lazy" src={cinema.logo} alt={cinema.name} className="object-contain w-full" />
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(isDropdownOpen === cinema.name ? "" : cinema.name)}
                      className={`flex px-8 py-9 rounded-lg justify-between items-center md:hidden ${cinema.id === selectedCinemaId ? "" : "border-2 rounded-lg border-solid border-neutral-200"}`}
                    >
                      <img loading="lazy" src={cinema.logo} alt={cinema.name} />
                      <img loading="lazy" width="80" src={dropdown} alt={`${cinema.name} dropdown arrow`} />
                    </button>
                    <div className="md:hidden">
                      {Object.entries(cinema.Category).map(([categoryName, categoryData]) => (
                        <div className={`flex flex-col p-4 gap-4 ${isDropdownOpen === cinema.name ? "" : "hidden"} md:block md:border-t-2 md:border-neutral-200 md:border-solid`} key={categoryName}>
                          <div className="hidden md:flex items-center justify-between pb-4">
                            <h3 className="text-xl font-semibold">{categoryName}</h3>
                          </div>
                          <ul className="grid grid-cols-3 gap-4 ">
                            {categoryData.times.map((time) => (
                              <li key={time} className={`px-6 py-2 border-2 rounded-lg border-solid border-neutral-200 ${selectedTime === time ? "bg-red-500 text-white" : ""}`}>
                                <button className="w-full h-full" onClick={() => handleTimeSelection(time, cinema)}>{time}</button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
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

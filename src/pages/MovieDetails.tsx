import { useState } from 'react';
import MovieBannerAndDetails from '../components/MovieBannerDetails';
import CinemaSelection from '../components/SelectCinema';
import Pagination from '../components/Pagination';
import cine1 from "../assets/icons/Ebu_Id.svg";
import cine2 from "../assets/icons/cineone21.svg";
import cine3 from "../assets/icons/hiflix.svg";
import banner from "../assets/images/Rectangle 613.jpg";
import BookingForm from '../components/ChooseDateDetailsMovies';

// Define interfaces for movie, cinema, and booking details
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

const movieData = {
  cinemas: [
    {
      id: "cinema1",
      logo: cine1,
      name: "Cinema One"
    },
    {
      id: "cinema2",
      logo: cine2,
      name: "Cinema Two"
    },
    {
      id: "cinema3",
      logo: cine3,
      name: "Cinema Three"
    },
    {
      id: "cinema4",
      logo: cine1,
      name: "Cinema Four"
    },
    {
      id: "cinema5",
      logo: cine2,
      name: "Cinema Five"
    }
  ] as Cinema[],
  headerData: {
    title: "Book Your Tickets Now!",
    subtitle: "Choose your favorite cinema and movie time"
  } as HeaderData,
  footerData: {
    contact: "contact@example.com",
    socialMedia: {
      facebook: "https://facebook.com/example",
      twitter: "https://twitter.com/example"
    }
  } as FooterData
};

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
            <BookingForm/>
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

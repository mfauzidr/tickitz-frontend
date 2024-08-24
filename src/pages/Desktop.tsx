import HeroImage from "../assets/images/AvangerHero.png";
import searchLight from "../assets/icons/SearchLight.svg";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import Newsletter from "../components/NewsLetter";

interface genresType {
  genre: string;
}

function Home() {
  const movies = [
    // dummy data
    {
      title: "The Witches",
      genres: ["Comedy", "Adventure"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
    {
      title: "Black Widow",
      genres: ["Action", "Adventure"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0baa3093e3b791d26b72f08e2658b1d538249e02c59f4ede4e9a38108910e3d5?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
    {
      title: "The Witches",
      genres: ["Comedy", "Adventure"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
    {
      title: "Tenet",
      genres: ["Action", "Sci-Fi"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d06f79220dc2fd696c44433de9c72fa995307901cf63a687ecb45c05071f956d?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
    {
      title: "The Witches",
      genres: ["Comedy", "Adventure"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
    {
      title: "Spiderman",
      genres: ["Action", "Adventure"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4335b7ea525a6e1ab2c85d667bcb27ddb40aff71b7b9620647b37e440c5a6707?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
    {
      title: "The Witches",
      genres: ["Comedy", "Adventure"],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    },
  ];

  const genreListes = ["Thriller", "Horror", "Romantic", "Adventure", "Sci-Fi"];
  var [genres, setGenres] = useState<genresType[]>([]);
  // genres bakal dikrim jadi parameter

  const SetgenreMoviecards = (genre: string) => {
    if (genres.some((g) => g.genre === genre)) {
      setGenres(genres.filter((g) => g.genre !== genre));
    } else {
      setGenres([...genres, { genre }]);
    }
  };

  return (
    <section className="font-mulish">
      {/* hero desktop MD */}
      <div className="hidden md:flex relative flex-col items-start pt-16 sm:pt-28 pb-7 w-full min-h-[462px]">
        <img loading="lazy" src={HeroImage} alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col max-w-full w-full">
          <div className="text-white pl-4 tbt:pl-10 lg:pl-32">
            <h2 className="font-bold">LIST MOVIE OF THE WEEK</h2>
            <h1 className="mt-2.5 text-5xl sm:leading-[70px] md:w-[700px]">Experience the Magic of Cinema: Book Your Tickets Today</h1>
          </div>
          <div className="flex gap-3 justify-center items-center mt-8 sm:mt-16">
            <div className="flex my-auto bg-blue-700 rounded-3xl min-h-[6px] w-[43px]" />
          </div>
        </div>
      </div>

      {/* Filter Desktop */}
      <div className="hidden md:flex flex-row self-center mt-10 w-full gap-10 px-4 tbt:px-10 lg:px-32">
        <div>
          <div className="text-gray-600">Cari Event</div>
          <div className=" flex-wrap gap-5 mt-3">
            <div className="flex gap-4 p-3 tracking-wider bg-white rounded border border-solid border-neutral-200 text-slate-400">
              <img loading="lazy" src={searchLight} alt="" className="object-contain shrink-0 w-6 aspect-square" />
              <input type="text" className="flex-auto" placeholder="New Born Expert" />
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold">Filter</div>
          <div className="flex flex-wrap mt-3 max-w-full w-full ">
            <div className="flex flex-wrap flex-auto gap-3 items-center my-auto text-xs font-medium leading-none text-gray-600 whitespace-nowrap">
              {genreListes.map((genre, index) => (
                <button onClick={() => SetgenreMoviecards(genre)} key={index} className={`px-3 sm:px-6 py-2 sm:py-2.5 my-auto text-center ${genres.some((g) => g.genre === genre) ? "font-semibold text-white bg-blue-700 rounded-xl" : ""}`}>
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 tbt:px-10 md:hidden">
        <h2 className="self-center text-3xl font-bold tracking-wider leading-9 text-center text-blue-700">MOVIES</h2>
        <h3 className="self-center mt-3.5 text-3xl tracking-wider leading-10 text-center text-neutral-900">Exciting Movies That Should Be Watched Today</h3>
      </div>
      <MovieCard props={movies} />
      {/* <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(movieData.cinemas.length / 4)}
              onPageChange={handlePageChange}
            /> */}
      <Newsletter />
    </section>
  );
}

export default Home;

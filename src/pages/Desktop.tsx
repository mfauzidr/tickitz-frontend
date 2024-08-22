import HeroImage from "../assets/images/AvangerHero.png"
import searchLight from "../assets/icons/SearchLight.svg"
import { useState } from "react";
import MovieCard from '../components/MovieCard';
import Newsletter from "../components/NewsLetter";

interface genresType {
  genre: string
}

function Home() {
  const movies = [
    {
      title: 'The Witches',
      genres: ['Comedy', 'Adventure'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    },
    {
      title: 'Black Widow',
      genres: ['Action', 'Adventure'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0baa3093e3b791d26b72f08e2658b1d538249e02c59f4ede4e9a38108910e3d5?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    },
    {
      title: 'The Witches',
      genres: ['Comedy', 'Adventure'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    },
    {
      title: 'Tenet',
      genres: ['Action', 'Sci-Fi'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d06f79220dc2fd696c44433de9c72fa995307901cf63a687ecb45c05071f956d?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    }, {
      title: 'The Witches',
      genres: ['Comedy', 'Adventure'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    },
    {
      title: 'Spiderman',
      genres: ['Action', 'Adventure'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4335b7ea525a6e1ab2c85d667bcb27ddb40aff71b7b9620647b37e440c5a6707?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    },
    {
      title: 'The Witches',
      genres: ['Comedy', 'Adventure'],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&',
    },
  ];

  const genreListes = ['Thriller', 'Horror', 'Romantic', 'Adventure', 'Sci-fi'];
  var [genres, setGenres] = useState<genresType[]>([])
  // genres bakal dikrim jadi parameter

  const SetgenreMoviecards = (genre: string) => {
    if (genres.some(g => g.genre === genre)) {
      setGenres(genres.filter(g => g.genre !== genre));
    } else {
      setGenres([...genres, { genre }]);
    }
  }

  return (
    <div>
      <section className="flex relative flex-col items-start px-4 sm:px-8 lg:px-20 pt-16 sm:pt-28 pb-7 w-full min-h-[462px]">
        <img
          loading="lazy"
          src={HeroImage}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-full sm:w-[638px]">
          <div className="flex flex-col text-white">
            <h2 className="self-start text-base sm:text-lg font-bold tracking-wider leading-9 text-center">
              LIST MOVIE OF THE WEEK
            </h2>
            <h1 className="mt-2.5 text-3xl sm:text-5xl font-medium tracking-wider leading-tight sm:leading-[70px]">
              Experience the Magic of Cinema: Book Your Tickets Today
            </h1>
          </div>
          <div className="flex gap-3 justify-center items-center self-end mt-8 sm:mt-16 mr-4 sm:mr-12">
            <div className="flex self-stretch my-auto bg-blue-700 rounded-3xl min-h-[6px] w-[43px]" />
          </div>
        </div>
      </section>
      <section className="flex flex-row self-center mt-10 sm:mt-20 w-full px-4 sm:px-8 gap-8">
        <div>
          <div className="flex gap-5 justify-between ml-0 sm:ml-3 max-w-full text-base font-semibold text-gray-600 w-full sm:w-[398px]">
            <div>Cari Event</div>
          </div>
          <div className="flex flex-wrap gap-5 mt-3 ml-0 sm:ml-3 max-w-full w-full  justify-between	">
            <div className="flex flex-auto gap-4 px-3 sm:px-5 py-3 sm:py-5 text-base tracking-wider bg-white rounded border border-solid border-neutral-200 text-slate-400">
              <img
                loading="lazy"
                src={searchLight}
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto">New Born Expert</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-between ml-0 sm:ml-3 max-w-full text-base font-semibold text-gray-600 w-full sm:w-[398px]">
            <div>Filter</div>
          </div>
          <div className="flex flex-wrap gap-5 mt-3 ml-0 sm:ml-3 max-w-full w-full ">
            <div className="flex flex-wrap flex-auto gap-3 sm:gap-9 items-center my-auto text-sm font-medium leading-none text-gray-600 whitespace-nowrap">
              {genreListes.map((genre, index) => (
                <button
                  onClick={() => SetgenreMoviecards(genre)}
                  key={index}
                  className={`self-stretch px-3 sm:px-6 py-2 sm:py-2.5 my-auto text-center ${genres.some(g => g.genre === genre)
                      ? 'font-semibold text-white bg-blue-700 rounded-xl'
                      : ''
                    }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>
        <MovieCard props={movies} />
        <Newsletter/>
    </div>
  );
}

export default Home;
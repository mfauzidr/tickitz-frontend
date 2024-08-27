import { useState } from "react";
import { Movie } from "../types/moviesData";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movies: Movie[] | undefined; // Menerima props movies dari parent component
}

function MovieCard({ movies }: MovieCardProps) {
  const [isHovered, setHover] = useState<number | null>(null);

  if (!movies || !Array.isArray(movies)) {
    return <div className="justify-center items-center text-3xl text-center font-bold p-8">No movies available</div>; // Menangani kondisi null atau undefined
  }

  return (
    <section className="mt-10 sm:mt-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 px-4 tbt:px-10 lg:px-32">
      {movies.map((movie, index) => {
          // Split genres into an array
          const genres = movie.genres ? movie.genres.split(',').map(g => g.trim()) : [];

          return (
            <div key={index} className="flex flex-col w-full pb-2">
              <div className="flex flex-col items-start w-full tracking-wider">
                <div
                  className="relative w-full pb-[152%] rounded-md overflow-hidden"
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    loading="lazy"
                    src={movie.image}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {isHovered === index && (
                    <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 py-8 sm:py-36 rounded-md bg-black bg-opacity-40">
                      <div className="flex flex-col w-full">
                        <Link
                          className="gap-1.5 self-stretch px-3 sm:px-5 py-2 sm:py-3 w-full text-white whitespace-nowrap rounded-md border border-white border-solid"
                          to={`/details/${movie.id}`}
                        >
                          Details
                        </Link>
                        <Link
                          className="gap-1.5 self-stretch px-3 sm:px-5 py-2 sm:py-3 mt-3 w-full bg-blue-700 rounded-md text-slate-50"
                          to={``}
                        >
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-wider leading-none text-slate-900">
                  {movie.title}
                </h3>
                <div className="flex flex-wrap gap-2 items-start mt-3 sm:mt-5 text-sm leading-8 text-center whitespace-nowrap text-slate-700">
                  {genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="gap-2.5 self-stretch px-3 sm:px-5 rounded-3xl bg-slate-400 bg-opacity-10 h-[31px]"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MovieCard;

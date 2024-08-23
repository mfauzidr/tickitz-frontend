import { useState } from "react";

interface ImagesBody {
  image: string;
  title: string;
  genres: string[];
}

function MovieCard({ props }: { props: ImagesBody[] }) {
  var [isHovered, Sethover] = useState<number | null>(null);

  return (
    <section className="mt-10 sm:mt-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 px-4 tbt:px-10 lg:px-32">
        {props.map((movie, index) => (
          <div key={index} className="flex flex-col w-full pb-2">
            <div className="flex flex-col items-start w-full tracking-wider">
              <div className="relative w-full pb-[152%] rounded-md overflow-hidden" onMouseEnter={() => Sethover(index)} onMouseLeave={() => Sethover(null)}>
                <img loading="lazy" src={movie.image} alt={movie.title} className="absolute inset-0 w-full h-full object-cover" />
                {isHovered === index && (
                  <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 py-8 sm:py-36 rounded-md bg-black bg-opacity-40">
                    <div className="flex flex-col w-full">
                      <button className="gap-1.5 self-stretch px-3 sm:px-5 py-2 sm:py-3 w-full text-white whitespace-nowrap rounded-md border border-white border-solid">Details</button>
                      <button className="gap-1.5 self-stretch px-3 sm:px-5 py-2 sm:py-3 mt-3 w-full bg-blue-700 rounded-md text-slate-50">Buy Ticket</button>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="mt-5 text-xl sm:text-2xl font-bold tracking-wider leading-none text-slate-900">{movie.title}</h3>
              <div className="flex flex-wrap gap-2 items-start mt-3 sm:mt-5 text-sm leading-8 text-center whitespace-nowrap text-slate-700">
                {movie.genres.map((genre, index) => (
                  <span key={index} className="gap-2.5 self-stretch px-3 sm:px-5 rounded-3xl bg-slate-400 bg-opacity-10 h-[31px]">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieCard;

import React from "react";

interface Movie {
  bannerImage?: string;
  poster: string;
  title: string;
  genres: string[];
  releaseDate: string;
  duration: string;
  director: string;
  casts: string[];
  synopsis: string;
}

interface MovieBannerAndDetailsProps {
  movie: Movie;
}

const MovieBannerAndDetails: React.FC<MovieBannerAndDetailsProps> = ({ movie }) => {
  return (
    <section className="relative">
      <div className="flex relative flex-col">
        <img loading="lazy" srcSet={movie.bannerImage} className="object-cover absolute inset-0 size-full" />
        <div className="flex relative w-full rounded-md bg-black bg-opacity-40 min-h-[415px] max-md:max-w-full" />
      </div>
      <div className="relative z-[3] -mt-64 md:-mt-44">
        <div className="px-4 tbt:px-10 lg:px-32 md:flex md:gap-5">
          <div className="grid place-items-center">
            <img loading="lazy" width="250" src={movie.poster} alt="Movie poster" className="rounded-md" />
          </div>
          <div className="mt-10 md:mt-44">
            <h1 className="text-2xl text-center md:text-start font-bold">{movie.title}</h1>
            <div className="flex gap-2 justify-center md:justify-normal mt-6 text-center text-gray-400">
              {movie.genres.map((genre, index) => (
                <div key={index} className="px-3 py-2 rounded-3xl bg-slate-400 bg-opacity-10 text-sm">
                  {genre}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-around md:justify-normal md:gap-10 mt-5">
              <div className="leading-6">
                <div className="text-sm text-gray-400">Release date</div>
                <div>{movie.releaseDate}</div>
                <div className="text-sm mt-4 text-gray-400">Duration</div>
                <div>{movie.duration}</div>
              </div>
              <div className="leading-6">
                <div className="text-sm text-gray-400">Directed by</div>
                <div>{movie.director}</div>
                <div className="text-sm mt-4 text-gray-400">Casts</div>
                <div>{movie.casts.join(", ")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 px-4 tbt:px-10 lg:px-32">
          <p className="font-bold text-lg">Synopsis</p>
          <p className="mt-3 leading-8 text-gray-400">{movie.synopsis}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieBannerAndDetails;

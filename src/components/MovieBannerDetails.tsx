import React from 'react';

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

interface MovieBannerAndDetailsProps {
  movie: Movie;
}

const MovieBannerAndDetails: React.FC<MovieBannerAndDetailsProps> = ({ movie }) => {
  return (
    <section className="relative">
      <div className="flex relative -z-[0] flex-col w-full min-h-[415px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={movie.bannerImage}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative w-full rounded-md bg-black bg-opacity-40 min-h-[415px] max-md:max-w-full" />
      </div>
      <div className="flex relative z-[3] flex-col items-center self-center -mt-44 w-full max-w-[1123px] max-md:max-w-full top-0 ">
        <div className="max-w-full w-[888px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-semibold tracking-wide leading-9 text-black whitespace-nowrap max-md:mt-4">
                <img loading="lazy" src={movie.poster} alt="Movie poster" className="object-contain w-full rounded-md aspect-[0.65]" />
                <h2 className="self-start mt-8">Synopsis</h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-48 w-full max-md:mt-10 max-md:max-w-full">
                <h1 className="text-3xl font-bold tracking-wider leading-none text-black">
                  {movie.title}
                </h1>
                <div className="flex gap-2 items-start mt-6 max-w-full text-base tracking-wider leading-8 text-center whitespace-nowrap text-black w-[205px]">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="gap-2 self-stretch px-5 rounded-3xl bg-white bg-opacity-10 h-[31px]">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="self-stretch mt-3 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-sm tracking-wider leading-6 text-black max-md:mt-10">
                        <div>Release date</div>
                        <div className="text-base leading-8 text-black">
                          {movie.releaseDate}
                        </div>
                        <div className="mt-4">Duration</div>
                        <div className="self-stretch text-base leading-8 text-black">
                          {movie.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-sm tracking-wider leading-6 text-black max-md:mt-10">
                        <div>Directed by</div>
                        <div className="text-base leading-8 text-black">
                          {movie.director}
                        </div>
                        <div className="mt-4">Casts</div>
                        <div className="self-stretch text-base leading-8 text-black">
                          {movie.casts.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-1 text-base tracking-wider leading-8 text-black w-[821px] max-md:max-w-full ">
          {movie.synopsis}
        </p>
      </div>
    </section>
  );
};

export default MovieBannerAndDetails;

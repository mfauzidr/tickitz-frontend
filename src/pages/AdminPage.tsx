import calendar from "../assets/icons/Calendar.svg";
import eye from "../assets/icons/Eye.svg";
import edit from "../assets/icons/Edit.svg";
import deleteIcon from "../assets/icons/Delete.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie } from "../types/moviesData";
import axios from "axios";

// const movieData = [
//   {
//     id: 1,
//     name: "Spiderman HomeComing",
//     thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/db8310b416dc4ba164fc7ef6d67b54affc36d71866943c15e954e5f6df649a70?apiKey=b75a55b5285647ecbff457fc782c7d82&",
//     category: "Action, Adventure",
//     releaseDate: "07/05/2023",
//     duration: "2 Hours 15 Minute",
//   },
//   {
//     id: 2,
//     name: "Avengers End Game",
//     thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0a1fc7cb47ac3f156a6be7bddc07d51158c99096efa04c42111672231545f93?apiKey=b75a55b5285647ecbff457fc782c7d82&",
//     category: "Sci-fi, Adventure",
//     releaseDate: "10/06/2023",
//     duration: "2 Hours 15 Minute",
//   },
//   {
//     id: 3,
//     name: "Spiderman HomeComing",
//     thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/af67c0e83dea01d6909c89371fe6143541a80a4296a7bc2a730b7be6f6d86355?apiKey=b75a55b5285647ecbff457fc782c7d82&",
//     category: "Action, Adventure",
//     releaseDate: "02/03/2023",
//     duration: "2 Hours 15 Minute",
//   },
//   {
//     id: 4,
//     name: "Avengers End Game",
//     thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0a1fc7cb47ac3f156a6be7bddc07d51158c99096efa04c42111672231545f93?apiKey=b75a55b5285647ecbff457fc782c7d82&",
//     category: "Sci-fi, Adventure",
//     releaseDate: "01/09/2023",
//     duration: "2 Hours 15 Minute",
//   },
//   {
//     id: 5,
//     name: "Spiderman HomeComing",
//     thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/af67c0e83dea01d6909c89371fe6143541a80a4296a7bc2a730b7be6f6d86355?apiKey=b75a55b5285647ecbff457fc782c7d82&",
//     category: "Action, Adventure",
//     releaseDate: "07/08/2023",
//     duration: "2 Hours 15 Minute",
//   },
// ];

function MovieList() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/`;
        var result = await axios.get(url);
        setMovies(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  const deleteMovie = async (id: string) => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/${id}`;
      await axios.delete(url);
      setMovies(movies?.filter((movie) => movie.id !== id));
    } catch (error) {
      console.log("Error saat menghapus film:", error);
    }
  };

  return (
    <main className="flex flex-col pb-16 px-4 tbt:px-10 lg:px-32 bg-neutral-100">
      <section className="flex flex-col self-center mt-16 w-full bg-white rounded-3xl max-w-[1105px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-14 pt-6 pb-10 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <h1 className="my-auto text-2xl font-bold text-slate-900">List Movie</h1>
            <Link to="/admin/movie-create">
              <button className=" md:hidden bg-blue-700 rounded-md fill-blue-700 px-6 py-1 font-bold tracking-wider leading-loose text-center text-slate-50">+ Add</button>
            </Link>
            <div className="flex gap-3.5 text-base w-full md:w-auto">
              <div className="flex flex-col grow shrink-0 font-semibold tracking-wide leading-7 text-gray-600 basis-0 md:w-fit">
                <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-lg max-md:px-5">
                  <div className="flex gap-6">
                    <img loading="lazy" src={calendar} alt="Calendar" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                    <span className="basis-auto">November 2023</span>
                  </div>
                </div>
              </div>
              <Link to="/admin/movie-create" className="self-center">
                <button className="text-sm hidden items-center md:flex p-2 bg-blue-700 rounded-lg fill-blue-700 max-md:px-5 font-bold tracking-wider leading-loose text-center text-slate-50">Add Movies</button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="bg-white">
              <thead>
                <tr className="text-left text-xs font-bold text-sky-900">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Thumbnail</th>
                  <th className="px-4 py-2">Movie Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Released Date</th>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {movies?.map((movie, index) => (
                  <tr key={movie.id} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                      <img src={movie.image} alt={movie.title} className="w-16 h-16 object-cover rounded-2xl" />
                    </td>
                    <td className="px-4 py-2 text-sm text-primary">{movie.title}</td>
                    <td className="px-4 py-2 text-sm">{movie.genres}</td>
                    <td className="px-4 py-2 text-sm">{movie.release_date}</td>
                    <td className="px-4 py-2 text-sm">{movie.duration}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="bg-blue-500 text-white p-2 rounded w-8 h-8">
                          <img src={eye} alt="" />
                        </button>
                        <button className="bg-[#5D5FEF] text-white p-2  rounded w-8 h-8">
                          <img src={edit} alt="" />
                        </button>
                        <button onClick={() => deleteMovie(movie.id)} className="bg-red-500 text-white p-2 rounded w-8 h-8">
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieList;

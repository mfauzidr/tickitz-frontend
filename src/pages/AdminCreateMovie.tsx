import { useEffect, useState } from "react";
import dropdown from "../assets/icons/DropdownArrow.svg";
import calendar from "../assets/icons/Calendar.svg";
import plus from "../assets/icons/PurplePlus.svg";
// import { Movie } from "../types/moviesData";
import axios from "axios";
// import { IAuthResponse } from "../types/response";
import { useStoreSelector } from "../redux/hooks";

export default function AdminCreateMovie() {
  const [form, setForm] = useState<{ title?: string; category?: string; release_date?: string; duration?: string; director?: string; casts?: string; synopsis?: string; location?: string; airing_date?: string[]; airing_time?: string }>({
    title: "",
    category: "",
    release_date: "",
    duration: "",
    director: "",
    casts: "",
    synopsis: "",
    location: "",
    airing_date: [""],
    airing_time: "",
  });



  const { token } = useStoreSelector((state) => state.auth);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [genreId, setGenreId] = useState<number[]>([]);
  const [inputGenreNama, setInputGenreNama] = useState<string[]>([]); // Update state to hold genre names


const toggleGenreId = (id: number, name: string) => {
  setGenreId(prevGenreIds =>
    prevGenreIds.includes(id)
      ? prevGenreIds.filter(genreId => genreId !== id) // Remove if already exists
      : [...prevGenreIds, id] // Add if not exists
  );

  setInputGenreNama(prevGenreNames =>
    prevGenreNames.includes(name)
      ? prevGenreNames.filter(genreName => genreName !== name) // Remove if already exists
      : [...prevGenreNames, name] // Add if not exists
  );
};

  useEffect(() => {
    // Update form.category setiap kali genreId berubah
    setForm((prevForm) => ({
      ...prevForm,
      category: genreId.join(", "), // Gabungkan genreId menjadi string, dipisahkan dengan koma
    }));
  }, [genreId]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCreateMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/new`;
    try {
      const result = await axios.post(url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getGenres = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/genres`;
        const result = await axios.get(url);
        setGenres(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  return (
    <main className="pt-16 pb-20 px-4 tbt:px-10 md:px-52 lg:px-[450px] bg-neutral-100">
      <section className="self-center px-5 md:px-10 py-10 bg-white rounded-md">
        <h1 className="text-xl font-bold tracking-wide text-slate-900">Add New Movie</h1>
        <form className="flex flex-col mt-7" onSubmit={handleCreateMovie}>
          <label className="text-base tracking-wide text-gray-500">Upload Image</label>
          <div className="flex flex-col mt-3.5 text-sm tracking-wider leading-loose text-center text-slate-50 w-[106px]">
            <button type="button" className="px-8 py-2 bg-blue-700 rounded-lg fill-blue-700 max-md:px-5">
              Upload
            </button>
          </div>

          <label className="mt-6 text-gray-600">Movie Name</label>
          <input type="text" name="title" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" value={form.title} onChange={onChangeHandler} />

          <label className="mt-6 text-gray-600">Category</label>
          <input type="text" name="category" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" value={inputGenreNama} readOnly />

          <div className="mt-4 gap-2">
            {genres.map((genre) => (
              <button
                type="button"
                key={genre.id}
                onClick={() => toggleGenreId(genre.id, genre.name)}
                className={`text-sm p-2  rounded-lg ${genreId.includes(genre.id) ? "bg-blue-700" : "bg-gray-300"} fill-blue-700 max-md:px-5 font-bold tracking-wider leading-loose text-center text-slate-50`}
              >
                {genre.name}
              </button>
            ))}
          </div>

          <div className="md:flex md:justify-between">
            <div className="mt-6 md:w-2/5">
              <label className="text-gray-600">Release Date</label>
              <input type="text" name="release_date" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form.release_date} onChange={onChangeHandler} />
            </div>

            <div className="mt-6 md:w-2/5">
              <label className="text-gray-600">
                Duration <span className="font-semibold">(hour / minute)</span>
              </label>
              <input type="text" name="duration" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form.duration} onChange={onChangeHandler} />
            </div>
          </div>

          <label className="text-gray-600 mt-6">Director Name</label>
          <input type="text" name="director" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form.director} onChange={onChangeHandler} />

          <label className="text-gray-600 mt-6">Cast</label>
          <input type="text" name="casts" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form.casts} onChange={onChangeHandler} />

          <label className="mt-6 text-gray-600">Synopsis</label>
          <input name="synopsis" className="pt-3 text-wrap px-3 pb-10 mt-3 tracking-wider leading-8 text-gray-600 bg-white rounded border border-solid border-neutral-200" value={form.synopsis} onChange={onChangeHandler} />

          <label className="mt-6 text-gray-600">Add Location</label>
          <input type="text" name="location" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" onChange={onChangeHandler} />

          <div className="mt-6">
            <label className="text-gray-600">Set Date & Time</label>
            <div className="flex justify-between mt-3 tbt:justify-center gap-7 px-3 py-2 items-center bg-gray-100 rounded-md tbt:w-fit">
              <img loading="lazy" width="18" src={calendar} alt="Calendar Icon" />
              <span>Set a date</span>
              <img loading="lazy" src={dropdown} alt="Dropdown Icon" className="object-contain self-stretch my-auto w-10" />
            </div>
          </div>

          <div className="flex gap-8 justify-between tbt:justify-normal items-center mt-6 text-sm font-semibold text-center text-gray-600">
            <button>
              <img src={plus} className="px-4 border-violet-800 text-3xl border rounded-lg justify-center items-center" />
            </button>
            <span className="self-stretch my-auto">08:30am</span>
            <span className="self-stretch my-auto">10:30pm</span>
          </div>

          <hr className="shrink-0 mt-6 w-full h-px border border-solid border-neutral-200" />

          <button type="submit" className="px-5 py-2 mt-6 text-sm font-semibold tracking-wider leading-loose text-center bg-primary rounded active:bg-blue-800 text-slate-50">
            Save Movie
          </button>
        </form>
      </section>
    </main>
  );
}

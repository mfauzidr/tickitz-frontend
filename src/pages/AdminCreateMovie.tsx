import { useState } from "react";
import dropdown from "../assets/icons/DropdownArrow.svg";
import calendar from "../assets/icons/Calendar.svg";
import plus from "../assets/icons/PurplePlus.svg";

interface MovieData {
  title: string;
  image: string;
  director: string;
  casts: string;
  duration: string;
  price: number;
  release_date: string;
  synopsis: string;
}

export default function AdminCreateMovie() {
  const [formData, setFormData] = useState<MovieData>({
    title: "Spider-Man: Homecoming",
    image: "",
    director: "Jon Watts",
    casts: "Tom Holland, Michael Keaton, Robert Downey Jr.",
    duration: "2h 13m",
    price: 100000, // Example price
    release_date: "2020-07-05", // Example date
    synopsis: "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May.",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://yourapiendpoint.com/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save the movie");
      }

      const result = await response.json();
      console.log("Movie saved successfully:", result);
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

  return (
    <main className="pt-16 pb-20 px-4 md:px-52 lg:px-[450px] bg-neutral-100">
      <section className="self-center px-5 md:px-10 py-10 bg-white rounded-md">
        <h1 className="text-xl font-bold tracking-wide text-slate-900">Add New Movie</h1>
        <form className="flex flex-col mt-7" onSubmit={handleSubmit}>
          <label className="text-base tracking-wide text-gray-500">Upload Image</label>
          <div className="flex flex-col mt-3.5 text-sm tracking-wider leading-loose text-center text-slate-50 w-[106px]">
            <button type="button" className="px-8 py-2 bg-blue-700 rounded-lg fill-blue-700 max-md:px-5">
              Upload
            </button>
          </div>

          <label className="mt-6 text-gray-600">Movie Name</label>
          <input type="text" name="title" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" value={formData.title} onChange={handleInputChange} />

          <label className="mt-6 text-gray-600">Category</label>
          <input type="text" name="category" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" value={formData.casts} onChange={handleInputChange} />

          <div className="md:flex md:justify-between">
            <div className="mt-6 md:w-2/5">
              <label className="text-gray-600">Release Date</label>
              <input
                type="text"
                name="release_date"
                className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full"
                value={formData.release_date}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-6 md:w-2/5">
              <label className="text-gray-600">
                Duration <span className="font-semibold">(hour / minute)</span>
              </label>
              <input type="text" name="duration" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={formData.duration} onChange={handleInputChange} />
            </div>
          </div>

          <label className="text-gray-600 mt-6">Director Name</label>
          <input type="text" name="director" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={formData.director} onChange={handleInputChange} />

          <label className="text-gray-600 mt-6">Cast</label>
          <input type="text" name="casts" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={formData.casts} onChange={handleInputChange} />

          <label className="mt-6 text-gray-600">Synopsis</label>
          <textarea name="synopsis" className="pt-3 px-3 pb-10 mt-3 tracking-wider leading-8 text-gray-600 bg-white rounded border border-solid border-neutral-200" value={formData.synopsis} onChange={handleInputChange} />

          <label className="mt-6 text-gray-600">Add Location</label>
          <input type="text" name="location" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" onChange={handleInputChange} />

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

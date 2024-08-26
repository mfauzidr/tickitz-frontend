import { useState } from "react";
import dropdown from "../assets/icons/DropdownArrow.svg";
import calendar from "../assets/icons/Calendar.svg";
import plus from "../assets/icons/PurplePlus.svg";

// Define the interface for the API contract
interface MovieData {
  title: string;
  image: string;
  director: string;
  casts: string;
  duration: string;
  price: number;
  release_date: string; // You can use Date if you handle date formatting properly
  synopsis: string;
}

export default function AdminMovie() {
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
    <main className="flex overflow-hidden flex-col pb-11 bg-neutral-100">
      <section className="flex flex-col items-start self-center px-12 py-12 mt-14 max-w-full bg-white rounded-md w-[90%] md:w-[732px] max-md:px-5 max-md:mt-10">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">Add New Movie</h1>

        <form className="flex flex-col mt-7 max-md:m-2.5 w-full" onSubmit={handleSubmit}>
          <label className="text-base tracking-wide text-gray-500">Upload Image</label>
          <div className="flex flex-col mt-3.5 max-w-full text-xs font-bold tracking-wider leading-loose text-center whitespace-nowrap text-slate-50 w-[106px]">
            <button type="button" className="px-8 py-3 bg-blue-700 rounded-lg fill-blue-700 max-md:px-5">
              Upload
            </button>
          </div>

          <label className="mt-6 text-base text-gray-600 max-md:ml-2.5">Movie Name</label>
          <input type="text" name="title" className="px-9 py-6 mt-3 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5" value={formData.title} onChange={handleInputChange} />

          <label className="mt-6 text-base text-gray-600 max-md:ml-2.5">Category</label>
          <input type="text" name="category" className="px-9 py-6 mt-3 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5" value={formData.casts} onChange={handleInputChange} />

          <div className="flex z-10 flex-wrap gap-10 items-start mt-6 text-base text-gray-600 max-md:max-w-full">
            <div className="flex flex-col py-px min-w-[240px] w-[275px]">
              <label className="self-start">Release date</label>
              <input
                type="date"
                name="release_date"
                className="px-6 py-6 mt-3 tracking-wider whitespace-nowrap bg-white rounded border border-solid border-neutral-200 max-md:px-5"
                value={formData.release_date}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col py-px w-full">
              <label className="self-start">
                Duration <span className="font-semibold">(hour / minute)</span>
              </label>
              <input
                type="text"
                name="duration"
                className="px-9 py-6 mt-3 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
                value={formData.duration}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label className="mt-14 text-base text-gray-600 max-md:mt-10 ">Director Name</label>
          <input
            type="text"
            name="director"
            className="px-9 py-6 mt-3.5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
            value={formData.director}
            onChange={handleInputChange}
          />

          <label className="mt-6 text-base text-gray-600 max-md:ml-2.5">Cast</label>
          <input type="text" name="casts" className="px-9 py-6 mt-3.5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5" value={formData.casts} onChange={handleInputChange} />

          <label className="mt-6 text-base text-gray-600 ">Synopsis</label>
          <textarea
            name="synopsis"
            className="px-6 pt-6 pb-24 mt-3 text-base tracking-wider leading-8 text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:pl-5 max-md:max-w-full"
            value={formData.synopsis}
            onChange={handleInputChange}
          />

          <label className="mt-8 text-base text-gray-600 max-md:ml-2.5">Add Location</label>
          <input type="text" name="location" className="px-9 py-6 mt-3 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5" onChange={handleInputChange} />

          <div className="flex flex-col mt-6 max-w-full text-base text-gray-600 w-[207px] ">
            <label>Set Date & Time</label>
            <div className="flex flex-col mt-3 w-full font-semibold tracking-wide leading-7 rounded-none">
              <div className="flex flex-col justify-center px-4 py-2 w-full bg-gray-100 rounded-md">
                <div className="flex gap-7 items-center">
                  <img loading="lazy" src={calendar} alt="Calendar Icon" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
                  <span className="self-stretch my-auto text-nowrap">Set a date</span>
                  <img loading="lazy" src={dropdown} alt="Dropdown Icon" className="object-contain self-stretch my-auto w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 items-center mt-6 text-sm font-semibold tracking-wider leading-loose text-center text-gray-600 whitespace-nowrap ">
            <button>
              <img src={plus} className="px-4 py-2 border-violet-800 text-3xl border rounded-2xl justify-center items-center" />
            </button>
            <span className="self-stretch my-auto">08:30am</span>
            <span className="self-stretch my-auto">10:30pm</span>
          </div>

          <hr className="shrink-0 mt-6 w-full h-px border border-solid border-neutral-200" />

          <button type="submit" className="px-16 py-6 mt-6 text-base font-bold tracking-wider leading-loose text-center bg-blue-700 rounded fill-blue-700 text-slate-50 max-md:px-5 max-md:max-w-full">
            Save Movie
          </button>
        </form>
      </section>
    </main>
  );
}

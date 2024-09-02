import { useEffect, useState, useRef, ChangeEvent } from "react";
// import dropdown from "../assets/icons/DropdownArrow.svg";
// import calendar from "../assets/icons/Calendar.svg";
import plus from "../assets/icons/PurplePlus.svg";
// import { Movie } from "../types/moviesData";
import axios from "axios";
// import { IAuthResponse } from "../types/response";
import { useStoreSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { ICreateMovies } from "../types/createMovie";
import Swal from "sweetalert2";


export default function AdminCreateMovie() {
  const [form, setForm] = useState<ICreateMovies>();
  const [imageFile, setImageFile] = useState<File>();

  const { token } = useStoreSelector((state) => state.auth);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [genreId, setGenreId] = useState<number[]>([]);
  const [inputGenreNama, setInputGenreNama] = useState<string[]>([]);

  const [locations, setLocations] = useState<{ id: number; name: string }[]>([]);
  const [locationId, setLocationId] = useState<number[]>([]);
  const [inputLocation, setInputLocation] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [selectedDateRange, setSelectedDateRange] = useState<string>("");

  const [times, setTimes] = useState<{ id: number; time: string }[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<{ id: number; time: string }[]>([]);
  const [showDropTime, setShowDropTime] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const toggleGenreId = (id: number, name: string) => {
    setGenreId((prevGenreIds) => (prevGenreIds.includes(id) ? prevGenreIds.filter((genreId) => genreId !== id) : [...prevGenreIds, id]));

    setInputGenreNama((preLocName) => (preLocName.includes(name) ? preLocName.filter((locName) => locName !== name) : [...preLocName, name]));
  };

  useEffect(() => {
    const getLocations = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/locations`;
        const result = await axios.get(url);
        setLocations(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLocations();
  }, []);

  const toggleLocId = (id: number, name: string) => {
    setLocationId((prevLocId) => (prevLocId.includes(id) ? prevLocId.filter((locationId) => locationId !== id) : [...prevLocId, id]));

    setInputLocation((PrevLocName) => (PrevLocName.includes(name) ? PrevLocName.filter((loationName) => loationName !== name) : [...PrevLocName, name]));
  };

  useEffect(() => {
    if (datepickerRef.current) {
      flatpickr(datepickerRef.current, {
        dateFormat: "Y-m-d",
        mode: "range",
        onChange: (selectedDates) => {
          if (datepickerRef.current) {
            let dateRange = "";
            if (selectedDates.length === 1) {
              dateRange = flatpickr.formatDate(selectedDates[0], "Y-m-d");
            } else if (selectedDates.length === 2) {
              dateRange = `${flatpickr.formatDate(selectedDates[0], "Y-m-d")} - ${flatpickr.formatDate(selectedDates[1], "Y-m-d")}`;
            }
            setSelectedDateRange(dateRange);
            datepickerRef.current.value = dateRange; // Update the input field value
          }
        },
      });
    }
  }, []);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/times`;
        const result = await axios.get(url);
        setTimes(result.data.data);
      } catch (error) {
        console.error("Error fetching times:", error);
      }
    };

    fetchTimes();
  }, []);

  const handleToggleDropTime = () => {
    setShowDropTime((prev) => !prev);
  };

  const handleSelectTime = (time: { id: number; time: string }) => {
    setSelectedTimes((prev) => [...prev, time]);
    setTimes((prev) => prev.filter((t) => t.id !== time.id));
    setShowDropTime(false); // Hide dropdown after selection
  };

  const handleRemoveTime = (time: { id: number; time: string }) => {
    setSelectedTimes((prev) => prev.filter((t) => t.id !== time.id));
    setTimes((prev) => [...prev, time].sort((a, b) => a.time.localeCompare(b.time)));
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setShowDropTime(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const datepickerRef = useRef<HTMLInputElement>(null);

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

    try {
      const formData = new FormData()

      formData.append("title", form?.title || "");
      formData.append("genres", genreId.join(","));
      formData.append("release_date", form?.release_date || "");
      formData.append("duration", form?.duration || "");
      formData.append("director", form?.director || "");
      formData.append("casts", form?.casts || "");
      formData.append("synopsis", form?.synopsis || "");
      formData.append("locations", locationId.join(","));
      formData.append("airing_date", selectedDateRange.split(" - ").join(","));
      formData.append("airing_time", selectedTimes.map((time) => time.id).join(","));
      if (imageFile) {
        formData.append("image", imageFile);
      }


      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/movie/insert`;
      const result = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: "Success!",
        text: "Create Movie Success!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      console.log(result.data);
      setTimeout(() => {
        navigate("/admin/movie");
      }, 3000);
    } catch (err) {
      Swal.fire({
        title: "Failed!",
        text: "Update Failed!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      console.error("Error creating movie:", err);
    }
  };

  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setImageFile(e.target.files?.[0])
    } else {
      setFileName('');
    }
  };

  return (
    <main className="pt-16 pb-20 px-4 tbt:px-10 md:px-52 lg:px-[450px] bg-neutral-100 font-mulish">
      <section className="self-center px-5 md:px-10 py-10 bg-white rounded-md">
        <h1 className="text-xl font-bold tracking-wide text-slate-900">Add New Movie</h1>
        <form className="flex flex-col mt-7" onSubmit={handleCreateMovie}>
          <label className="text-base tracking-wide text-gray-500">Upload Image</label>
          <div className="flex flex-col mt-3.5 text-sm tracking-wider leading-loose text-center text-slate-50 w-[106px]">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="px-8 py-2 bg-blue-700 rounded-lg fill-blue-700 max-md:px-5"
              onClick={() => {
                const fileInput = document.getElementById('fileInput');
                if (fileInput) {
                  fileInput.click();
                }
              }}
            >
              Upload
            </button>
          </div>
          {fileName && (
            <div className="flex w-full mt-2 border text-gray-600">
              <p className="truncate-text tooltip">Selected file: {fileName}</p>
            </div>
          )}

          <label className="mt-6 text-gray-600">Movie Name</label>
          <input type="text" name="title" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" value={form?.title} onChange={onChangeHandler} />

          <label className="mt-6 text-gray-600">Category</label>
          <input type="text" name="genres" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" value={inputGenreNama} readOnly />

          <div className="mt-4 flex flex-wrap gap-5">
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
              <input type="text" name="release_date" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form?.release_date} onChange={onChangeHandler} />
            </div>

            <div className="mt-6 md:w-2/5">
              <label className="text-gray-600">
                Duration <span className="font-semibold">(hour / minute)</span>
              </label>
              <input type="text" name="duration" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form?.duration} onChange={onChangeHandler} />
            </div>
          </div>

          <label className="text-gray-600 mt-6">Director Name</label>
          <input type="text" name="director" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form?.director} onChange={onChangeHandler} />

          <label className="text-gray-600 mt-6">Cast</label>
          <input type="text" name="casts" className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full" value={form?.casts} onChange={onChangeHandler} />

          <label className="mt-6 text-gray-600">Synopsis</label>
          <input name="synopsis" className="pt-3 text-wrap px-3 pb-10 mt-3 tracking-wider leading-8 text-gray-600 bg-white rounded border border-solid border-neutral-200" value={form?.synopsis} onChange={onChangeHandler} style={{ whiteSpace: "nowrap", overflowX: "auto" }} />

          <div className="relative" ref={dropdownRef}>
            <label className="mt-6 text-gray-600">Add Location</label>
            <div className="px-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 w-full cursor-pointer" onClick={() => setShowDropdown((prevShow) => !prevShow)}>
              {inputLocation.length > 0 ? inputLocation.join(", ") : "Select locations..."}
            </div>

            {showDropdown && (
              <ul className="absolute z-10 border border-neutral-200 rounded bg-white mt-1 max-h-60 w-full overflow-auto">
                {locations.map((location) => (
                  <li key={location.id} className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${locationId.includes(location.id) ? "bg-gray-200" : ""}`} onClick={() => toggleLocId(location.id, location.name)}>
                    {location.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6">
            <label className="text-gray-600">Set Date & Time</label>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input id="datepicker-format" ref={datepickerRef} type="text" className=" border text-sm rounded-lg text-gray-600 block w-full ps-10 p-2.5 " placeholder="Select date" readOnly value={selectedDateRange} />
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-2 flex-wrap justify-between items-center mt-6 text-sm font-semibold text-center text-gray-600">
              <button type="button" onClick={handleToggleDropTime} className="relative">
                <img src={plus} className="px-4 border-violet-800 text-3xl border rounded-lg" alt="Add Time" />
                {showDropTime && (
                  <div ref={dropdownRef} className="absolute top-full left-0 mt-2 border border-gray-300 bg-white shadow-lg rounded-lg max-w-xs max-h-48 overflow-scroll z-10">
                    <ul>
                      {times.map((time) => (
                        <li key={time.id} className="flex p-2 hover:bg-gray-200 cursor-pointer w-full" onClick={() => handleSelectTime(time)}>
                          {time.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
              <div className="flex gap-2 flex-wrap">
                {selectedTimes.map((time) => (
                  <span key={time.id} className="cursor-pointer px-2 py-1 border rounded bg-gray-200" onClick={() => handleRemoveTime(time)}>
                    {time.time}
                  </span>
                ))}
              </div>
            </div>
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

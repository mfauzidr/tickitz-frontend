import { useState } from "react";
import dropdown from "../assets/icons/DropdownArrow.svg";

interface Cinema {
  id: string;
  logo: string;
  name: string;
  Category: {
    [categoryName: string]: {
      times: string[];
    };
  };
}

interface CinemaSelectionProps {
  cinemas: Cinema[];
  selectedCinemaId: string;
  onCinemaSelect: (cinemaId: string) => void;
}

const CinemaSelection = ({ cinemas, selectedCinemaId, onCinemaSelect }: CinemaSelectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState("");

  const openDropdown = (name: string, id: string) => {
    if (isDropdownOpen === name) {
      setIsDropdownOpen("");
    } else {
      setIsDropdownOpen(name);
      onCinemaSelect(id);
    }
  };

  return (
    <section className="mt-10 max-md:max-w-full">
      <div className="flex gap-9 mb-10">
        <h2 className="text-xl font-semibold tracking-wide leading-9 text-black">Choose Cinema</h2>
        <span className="my-auto text-lg font-bold tracking-wider leading-none text-slate-400">
          {cinemas.length} Result{cinemas.length !== 1 && "s"}
        </span>
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:justify-center">
        {cinemas.map((cinema) => (
          <div key={cinema.id} className={` flex flex-col ${cinema.id === selectedCinemaId ? "border-2 rounded-lg border-solid border-neutral-200" : ""} `}>
            <button onClick={() => onCinemaSelect(cinema.id)} className={`hidden md:flex flex-col grow justify-center px-8 py-9 rounded-lg items-center border-2 border-solid border-neutral-200 max-md:px-5 max-md:mt-4`}>
              <img loading="lazy" src={cinema.logo} alt={cinema.name} className="object-contain w-full" />
            </button>
            <button
              onClick={() => openDropdown(cinema.name, cinema.id)}
              className={`flex px-8 py-9 rounded-lg justify-between items-center md:hidden ${cinema.id === selectedCinemaId ? "" : "border-2 rounded-lg border-solid border-neutral-200"}`}
            >
              <img loading="lazy" src={cinema.logo} alt={cinema.name} />
              <img loading="lazy" width="80" src={dropdown} alt={cinema.name + " dropdown arrow "} />
            </button>
            {/* isi dropdown */}
            <div className="">
              {Object.entries(cinema.Category).map(([categoryName, categoryData]) => (
                <div className={` flex flex-col p-4 gap-4 ${isDropdownOpen === cinema.name ? "" : "hidden"} `} key={categoryName}>
                  <h3 className="flex flex-wrap gap-4 text-lg font-semibold">{categoryName}</h3>
                  {categoryData.times.map((time, index) => (
                    <div className="gap-2.5 self-stretch px-3 sm:px-5 rounded-3xl bg-slate-400 bg-opacity-10 h-[31px] w-fit p-2" key={index}>
                      {time}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* akhir isi dropdown */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CinemaSelection;

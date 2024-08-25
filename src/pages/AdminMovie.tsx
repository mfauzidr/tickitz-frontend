import dropdown from "../assets/icons/DropdownArrow.svg";
import calendar from "../assets/icons/Calendar.svg";

export default function AdminMovie() {
  return (
    <main className="flex overflow-hidden flex-col pb-11 bg-neutral-100">
      <section className="flex flex-col items-start self-center px-12 py-12 mt-14 max-w-full bg-white rounded-md w-[732px] max-md:px-5 max-md:mt-10">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">
          Add New Movie
        </h1>

        <form className="flex flex-col mt-7 ml-5 max-md:ml-2.5">
          <label className="text-base tracking-wide text-gray-500">
            Upload Image
          </label>
          <div className="flex flex-col mt-3.5 max-w-full text-xs font-bold tracking-wider leading-loose text-center whitespace-nowrap text-slate-50 w-[106px]">
            <button type="button" className="px-8 py-3 bg-blue-700 rounded-lg fill-blue-700 max-md:px-5">
              Upload
            </button>
          </div>

          <label className="mt-6 ml-5 text-base text-gray-600 max-md:ml-2.5">
            Movie Name
          </label>
          <input
            type="text"
            className="px-9 py-6 mt-3 ml-5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
            defaultValue="Spider-Man: Homecoming"
          />

          <label className="mt-6 ml-5 text-base text-gray-600 max-md:ml-2.5">
            Category
          </label>
          <input
            type="text"
            className="px-9 py-6 mt-3 ml-5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
            defaultValue="Action, Adventure, Sci-Fi"
          />

          <div className="flex z-10 flex-wrap gap-10 items-start mt-6 ml-5 text-base text-gray-600 max-md:max-w-full">
            <div className="flex flex-col py-px min-w-[240px] w-[275px]">
              <label className="self-start">Release date</label>
              <input
                type="text"
                className="px-6 py-6 mt-3 tracking-wider whitespace-nowrap bg-white rounded border border-solid border-neutral-200 max-md:px-5"
                defaultValue="07/05/2020"
              />
            </div>

            <div className="flex flex-col py-px min-w-[240px] w-[296px]">
              <label className="self-start">
                Duration <span className="font-semibold">(hour / minute)</span>
              </label>
              <div className="flex gap-5 justify-between mt-3 tracking-wider text-center whitespace-nowrap">
                <input
                  type="number"
                  className="px-16 py-6 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
                  defaultValue="2"
                />
                <input
                  type="number"
                  className="px-16 py-6 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
                  defaultValue="13"
                />
              </div>
            </div>
          </div>

          <img
            loading="lazy"
            src={dropdown}
            alt="Dropdown Icon"
            className="object-contain self-center -mt-10 aspect-[2.12] w-[17px]"
          />

          <label className="mt-14 ml-5 text-base text-gray-600 max-md:mt-10 max-md:ml-2.5">
            Director Name
          </label>
          <input
            type="text"
            className="px-9 py-6 mt-3.5 ml-5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
            defaultValue="Jon Watts"
          />

          <label className="mt-6 ml-5 text-base text-gray-600 max-md:ml-2.5">
            Cast
          </label>
          <input
            type="text"
            className="px-9 py-6 mt-3.5 ml-5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
            defaultValue="Tom Holland, Michael Keaton, Robert Downey Jr."
          />

          <label className="mt-6 ml-5 text-base text-gray-600 max-md:ml-2.5">
            Synopsis
          </label>
          <textarea
            className="px-6 pt-6 pb-24 mt-3 ml-5 text-base tracking-wider leading-8 text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:pl-5 max-md:max-w-full"
            defaultValue="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May."
          />

          <label className="mt-8 ml-5 text-base text-gray-600 max-md:ml-2.5">
            Add Location
          </label>
          <input
            type="text"
            className="px-9 py-6 mt-3 ml-5 w-full text-base tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200 max-md:px-5"
            defaultValue="Purwokerto, Bandung, Bekasi"
          />

          <div className="flex flex-col mt-6 ml-5 max-w-full text-base text-gray-600 w-[207px] max-md:ml-2.5">
            <label>Set Date & Time</label>
            <div className="flex flex-col mt-3 w-full font-semibold tracking-wide leading-7 rounded-none">
              <div className="flex flex-col justify-center px-4 py-2 w-full bg-gray-100 rounded-md">
                <div className="flex gap-7 items-center">
                  <img
                    loading="lazy"
                    src={calendar}
                    alt="Calendar Icon"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  />
                  <span className="self-stretch my-auto">Set a date</span>
                  <img
                    loading="lazy"
                    src={dropdown}
                    alt="Dropdown Icon"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.31] w-[17px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 items-center mt-6 ml-5 text-sm font-semibold tracking-wider leading-loose text-center text-gray-600 whitespace-nowrap max-md:ml-2.5">
            <button type="button" className="px-4 py-2 text-center">+</button>
            <span className="self-stretch my-auto">08:30am</span>
            <span className="self-stretch my-auto">10:30pm</span>
          </div>

          <hr className="shrink-0 mt-6 ml-5 w-full h-px border border-solid border-neutral-200" />

          <button
            type="submit"
            className="px-16 py-6 mt-6 ml-5 text-base font-bold tracking-wider leading-loose text-center bg-blue-700 rounded fill-blue-700 text-slate-50 max-md:px-5 max-md:max-w-full"
          >
            Save Movie
          </button>
        </form>
      </section>
    </main>
  );
}

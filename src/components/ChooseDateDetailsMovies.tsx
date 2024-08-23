import calendar from "../assets/icons/Calendar.svg";
import location from "../assets/icons/Location.svg";
import chooseTime from "../assets/icons/ChooseTime.svg";

// Dummy API response
const dates = [
  { id: 1, date: "2024-08-25" },
  { id: 2, date: "2024-08-26" },
  { id: 3, date: "2024-08-27" },
  { id: 4, date: "2024-08-28" },
];

const locations = [
  { id: 1, name: "Purwokerto" },
  { id: 2, name: "Jakarta" },
  { id: 3, name: "Bandung" },
  { id: 4, name: "Surabaya" },
];

const times = [
  { id: 1, time: "09:00 AM" },
  { id: 2, time: "12:00 PM" },
  { id: 3, time: "03:00 PM" },
  { id: 4, time: "06:00 PM" },
];

const BookingForm = () => {
  return (
    <section className="self-stretch pt-8 w-full  max-md:max-w-full">
      <h2 className="text-3xl tracking-wider leading-none text-neutral-900">Book Tickets</h2>
      <form className="flex gap-2 md:gap-5 mt-10 max-md:flex-col">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-7">
            <label htmlFor="date" className="text-xl font-semibold tracking-wide leading-9 text-black">
              Choose Date
            </label>
            <div className="flex flex-col mt-3 w-full text-base tracking-wide leading-7 text-gray-600 whitespace-nowrap max-w-[284px]">
              <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-md max-md:px-5">
                <div className="flex gap-6">
                  <img loading="lazy" src={calendar} alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                  <select id="date" name="date" className="bg-transparent outline-none">
                    {dates.map((date) => (
                      <option key={date.id} value={date.date}>
                        {date.date}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-7">
            <label htmlFor="time" className="text-xl font-semibold tracking-wide leading-9 text-black">
              Choose Time
            </label>
            <div className="flex flex-col mt-3 w-full text-base tracking-wide leading-7 text-gray-600 whitespace-nowrap max-w-[284px]">
              <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-md max-md:px-5">
                <div className="flex gap-6">
                  <img loading="lazy" src={chooseTime} alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                  <select id="time" name="time" className="bg-transparent outline-none">
                    {times.map((time) => (
                      <option key={time.id} value={time.time}>
                        {time.time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-7">
            <label htmlFor="location" className="text-xl font-semibold tracking-wide leading-9 text-black">
              Choose Location
            </label>
            <div className="flex flex-col mt-3 w-full text-base tracking-wide leading-7 text-gray-600 whitespace-nowrap max-w-[284px]">
              <div className="flex gap-5 justify-between px-6 py-3.5 w-full bg-gray-100 rounded-md max-md:px-5">
                <div className="flex gap-6">
                  <img loading="lazy" src={location} alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
                  <select id="location" name="location" className="bg-transparent outline-none">
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <button type="submit" className="grow gap-1.5 self-stretch px-5 py-4 h-4 w-full text-sm tracking-wider leading-6 text-center whitespace-nowrap bg-blue-700 rounded-md min-h-[56px] text-slate-50 ">
            Filter
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;

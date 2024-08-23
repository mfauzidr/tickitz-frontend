interface Cinema {
  id: string;
  logo: string;
  name: string;
}

interface CinemaSelectionProps {
  cinemas: Cinema[];
  selectedCinemaId: string;
  onCinemaSelect: (cinemaId: string) => void;
}

const CinemaSelection = ({ cinemas, selectedCinemaId, onCinemaSelect }: CinemaSelectionProps) => {
  return (
    <section className="mt-10 max-md:max-w-full">
      <div className="flex gap-9 mb-10">
        <h2 className="text-xl font-semibold tracking-wide leading-9 text-black">Choose Cinema</h2>
        <span className="my-auto text-lg font-bold tracking-wider leading-none text-slate-400">
          {cinemas.length} Result{cinemas.length !== 1 && 's'}
        </span>
      </div>
      <div className="flex gap-5 flex-row max-md:flex-col">
        {cinemas.map((cinema) => (
          <div key={cinema.id} className="flex flex-col w-3/12 max-md:w-full">
            <button
              onClick={() => onCinemaSelect(cinema.id)}
              className={`flex flex-col grow justify-center px-8 py-9 rounded-lg ${
                cinema.id === selectedCinemaId ? 'bg-blue-700 text-white' : 'border-2 border-solid border-neutral-200'
              } max-md:px-5 max-md:mt-4`}
            >
              <img
                loading="lazy"
                src={cinema.logo}
                alt={cinema.name}
                className="object-contain w-full"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CinemaSelection;

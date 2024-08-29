interface SeatProps {
  seatNumber: string;
  isSelected: boolean;
  onClick: (seatNumber: string) => void;
  isClickable: boolean;
}

const Seat = ({ seatNumber, isSelected, onClick, isClickable }: SeatProps) => {
  const handleClick = () => {
    if (isClickable) {
      onClick(seatNumber);
    }
  };
  return (
    <div className={`bg-gray-300 font-mulish w-3.5 h-3.5 tbt:w-7 tbt:h-7 rounded text-center text-[0px] cursor-pointer ${isSelected ? "bg-primary" : "bg-gray-300"}`} onClick={handleClick}>
      {seatNumber}
    </div>
  );
};

export default Seat;

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (Props: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Props.totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex font-mulish gap-2 items-start self-center mt-9 text-lg tracking-wider leading-9 text-gray-600 whitespace-nowrap" aria-label="Pagination">
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => Props.onPageChange(number)} className={`flex flex-col w-10 rounded-lg ${Props.currentPage === number ? "text-white" : ""}`} aria-current={Props.currentPage === number ? "page" : undefined}>
          <span className={`px-3.5 w-10 h-10 rounded-lg ${Props.currentPage === number ? "bg-blue-700 shadow-[0px_8px_16px_rgba(95,46,234,0.24)]" : "bg-white border-solid border-[0.5px] border-neutral-200"}`}>{number}</span>
        </button>
      ))}
    </nav>
  );
};

export default Pagination;

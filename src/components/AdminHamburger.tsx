import dropdown from "../assets/icons/dropdown.svg";

function AdminHamburger() {
  return (
    <div className="md:hidden gap-3 items-center">
      <img width="15" src={dropdown} />
    </div>
  );
}

export default AdminHamburger;

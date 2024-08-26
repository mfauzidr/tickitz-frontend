import gpay from "../assets/icons/Gpay-icon.svg";

function Payment() {
  return (
    <main className="pt-16 pb-20 px-4 md:px-52 lg:px-[450px] bg-neutral-100">
      <section className="self-center px-5 md:px-10 py-10 bg-white rounded-md">
        <h1 className="text-xl font-bold tracking-wide text-slate-900">Payment Info</h1>
        <form className="flex flex-col mt-7">
          <label className="mt-6 text-sm text-gray-600">DATE & TIME</label>
          <input type="text" name="title" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <label className="mt-6 text-sm text-gray-600">MOVIE TITLE</label>
          <input type="text" name="category" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <label className="mt-6 text-sm text-gray-600">CINEMA NAME</label>
          <input type="text" name="category" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <label className="text-gray-600 mt-6 text-sm">NUMBER OF TICKETS</label>
          <input type="text" name="director" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <label className="text-gray-600 mt-6 text-sm">TOTAL PAYMENT</label>
          <input type="text" name="casts" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <h1 className="text-xl font-bold tracking-wide text-slate-900 mt-6">Personal Information</h1>

          <label className="text-gray-600 mt-6 text-sm">Full Name</label>
          <input type="text" name="casts" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <label className="text-gray-600 mt-6 text-sm">Email</label>
          <input type="text" name="casts" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <label className="text-gray-600 mt-6 text-sm">Phone Number</label>
          <input type="text" name="casts" className="pl-3 py-3 text-sm mt-3 tracking-wider text-gray-600 bg-white rounded border border-solid border-neutral-200" />

          <h1 className="text-xl font-bold tracking-wide text-slate-900 mt-6">Payment Method</h1>

          <div>
            <button className="border border-solid border-black">
              <img src={gpay} alt="" />
            </button>
          </div>

          <button type="submit" className="px-5 py-2 mt-6 text-sm font-semibold tracking-wider leading-loose text-center bg-primary rounded active:bg-blue-800 text-slate-50">
            Pay your order
          </button>
        </form>
      </section>
    </main>
  );
}

export default Payment;

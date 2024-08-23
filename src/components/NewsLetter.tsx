
function Newsletter() {
  return (
    <section className="flex relative flex-col justify-center items-center p-20 mt-16 w-full text-white bg-[#2563EB] min-h-[318px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col max-w-full w-[702px] rounded ">
        <h2 className="self-center text-5xl tracking-wider leading-none text-center max-md:max-w-full max-md:text-4xl">
          Subscribe to our newsletter
        </h2>
        <form className="flex flex-wrap gap-3 mt-12 text-base leading-loose max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 justify-center rounded-lg min-h-[60px]">
            <label htmlFor="firstName" className="sr-only">First name</label>
            <input
              id="firstName"
              type="text"
              className="flex-1 gap-3.5 self-stretch py-4 pl-5 bg-blue-600 rounded-md border border-solid border-zinc-300 size-full"
              placeholder="First name"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center rounded-lg min-h-[60px]">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              className="flex-1 gap-3.5 self-stretch py-4 pl-5 bg-blue-600 rounded-md border border-solid border-zinc-300 size-full"
              placeholder="Email address"
            />
          </div>
          <button type="submit" className="flex flex-col flex-1 justify-center items-center p-4 text-lg font-bold tracking-normal leading-loose text-blue-700 bg-white rounded-lg min-h-[60px]">
            <span className=" self-stretch">Subscribe Now</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
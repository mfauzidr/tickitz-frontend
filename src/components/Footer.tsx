
function Footer() {
  return (
    <footer className="flex flex-col items-start px-20 pt-24 pb-12 mt-7 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1029px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-base text-slate-500 max-md:max-w-full">
          <div className="flex flex-col tracking-wider leading-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b07a783998823fa01b7bc3a6ae529a608e48b62ca6d3468794c380d3a22543?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="Tickitz Logo" className="object-contain max-w-full aspect-[2.59] w-[184px]" />
            <p className="mt-4">
              Stop waiting in line. Buy tickets <br /> conveniently, watch movies quietly.
            </p>
          </div>
          <nav className="flex flex-col items-start mt-3.5 text-sm text-gray-600">
            <h3 className="text-base font-bold text-black">Explore</h3>
            <ul className="mt-8">
              <li className="mt-3.5">Cinemas</li>
              <li className="mt-3.5">Movies List</li>
              <li className="mt-4">My Ticket</li>
              <li className="mt-4">Notification</li>
            </ul>
          </nav>
          <div className="flex flex-col items-start self-stretch my-auto max-w-full font-bold text-black w-[174px]">
            <h3>Our Sponsor</h3>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ea245eb98509c3d8413aa5a675efb75a2846455bd3f6e1adf539d4c284b5b7?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="Sponsor 1" className="object-contain mt-8 max-w-full aspect-[2.71] w-[122px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad646967b5b0563b3be0240cef57d2224cb71bd1eb609bd3358df6211dced2a0?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="Sponsor 2" className="object-contain self-stretch mt-6 w-full aspect-[6.21]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9398f95751d1847e4c44a1bb76c718a91ecf6c9734e3124b4fb4707ce01b5d00?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="Sponsor 3" className="object-contain mt-6 w-20 aspect-[3.08]" />
          </div>
          <div className="flex flex-col items-start mt-3.5 text-sm font-semibold">
            <h3 className="text-base font-bold text-black">Follow us</h3>
            <ul className="mt-8">
              <li className="flex gap-4 self-stretch mt-0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d611821ee8467f49494551ba82c57c820e1d5d9c98c8890a4e8fe5cc2b7b787?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="" className="object-contain shrink-0 w-6 aspect-[1.04]" />
                <span className="grow shrink w-[115px]">Tickitz Cinema id</span>
              </li>
              <li className="flex gap-4 mt-6 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffbeb37a375caea7de37e49bd8ad9bb9e1ef1aaec39e154e1c0215bc342de36?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                <span className="my-auto">tickitz.id</span>
              </li>
              <li className="flex gap-4 mt-6 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9a831efaaa10f65db4d61cc2283360273472dff298a4fe1128d2d2b35905c9e?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="" className="object-contain shrink-0 w-6 aspect-[1.04]" />
                <span className="my-auto">tickitz.id</span>
              </li>
              <li className="flex gap-4 self-stretch mt-6">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dab3274919d0984190b64ccacbfaf95bfc9b2183705d1f735b4dfae6d49bb33c?apiKey=b75a55b5285647ecbff457fc782c7d82&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                <span className="grow shrink my-auto w-[115px]">Tickitz Cinema id</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="self-center mt-12 ml-9 text-sm text-gray-600 max-md:mt-10">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
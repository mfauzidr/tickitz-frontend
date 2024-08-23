import Logo from "../assets/icons/logoNavar.svg"
import Ebu_id from "../assets/icons/Ebu_Id.svg"
import cineone21 from "../assets/icons/cineone21.svg"
import hiflix from "../assets/icons/hiflix.svg"
import FacebookSmall from "../assets/icons/FacebookSmall.svg"
import InstaSmall from "../assets/icons/InstaSmall.svg"
import TwitterSmall from "../assets/icons/TwitterSmall.svg"
import YoutubeSmall from "../assets/icons/Youtube.svg"


function Footer() {
  return (
    <footer className="flex flex-col items-start px-20  pb-12 mt-7 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full bottom-0">
      <div className="flex flex-col w-full justify-center  max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-base text-slate-500 max-md:max-w-full">
          <div className="flex flex-col tracking-wider leading-8">
            <img loading="lazy" src={Logo} alt="Tickitz Logo" className="object-contain max-w-full aspect-[2.59] w-[184px]" />
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
            <img loading="lazy" src={Ebu_id} alt="Sponsor 1" className="object-contain mt-8 max-w-full aspect-[2.71] w-[122px]" />
            <img loading="lazy" src={cineone21} alt="Sponsor 2" className="object-contain self-stretch mt-6 w-full aspect-[6.21]" />
            <img loading="lazy" src={hiflix} alt="Sponsor 3" className="object-contain mt-6 w-20 aspect-[3.08]" />
          </div>
          <div className="flex flex-col items-start mt-3.5 text-sm font-semibold">
            <h3 className="text-base font-bold text-black">Follow us</h3>
            <ul className="mt-8">
              <li className="flex gap-4 self-stretch mt-0">
                <img loading="lazy" src={FacebookSmall} alt="" className="object-contain shrink-0 w-6 aspect-[1.04]" />
                <span className="grow shrink w-[115px]">Tickitz Cinema id</span>
              </li>
              <li className="flex gap-4 mt-6 whitespace-nowrap">
                <img loading="lazy" src={InstaSmall} alt="" className="object-contain shrink-0 w-6 aspect-square" />
                <span className="my-auto">tickitz.id</span>
              </li>
              <li className="flex gap-4 mt-6 whitespace-nowrap">
                <img loading="lazy" src={TwitterSmall} alt="" className="object-contain shrink-0 w-6 aspect-[1.04]" />
                <span className="my-auto">tickitz.id</span>
              </li>
              <li className="flex gap-4 self-stretch mt-6">
                <img loading="lazy" src={YoutubeSmall} alt="" className="object-contain shrink-0 w-6 aspect-square" />
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
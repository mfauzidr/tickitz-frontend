import Logo from "../assets/icons/logoNavar.svg";
import Ebu_id from "../assets/icons/Ebu_Id.svg";
import cineone21 from "../assets/icons/cineone21.svg";
import hiflix from "../assets/icons/hiflix.svg";
import FacebookSmall from "../assets/icons/FacebookSmall.svg";
import InstaSmall from "../assets/icons/InstaSmall.svg";
import TwitterSmall from "../assets/icons/TwitterSmall.svg";
import YoutubeSmall from "../assets/icons/Youtube.svg";

function Footer() {
  return (
    <footer className="items-start px-4 tbt:px-10 lg:px-32 py-12 tracking-wide bg-gray-50 bottom-0 gap-5 justify-between text-slate-500">
      <div className="md:flex md:justify-between">
        <div className="md:max-w-60">
          <img loading="lazy" width="150" src={Logo} alt="Tickitz Logo" className="object-contain aspect-[2.59]" />
          <p className="mt-4 text-sm">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
        </div>
        <div className="items-start my-10 md:my-0 text-gray-600">
          <h3 className="font-semibold text-black">Explore</h3>
          <ul className="flex md:grid flex-wrap gap-3 mt-3">
            <li>Cinemas</li>
            <li>Movies List</li>
            <li>Notification</li>
            <li>My Ticket</li>
          </ul>
        </div>
        <div className="mb-10 md:mb-0 font-bold text-black">
          <h3>Our Sponsor</h3>
          <div className="flex md:grid gap-5 mt-3">
            <img loading="lazy" width="80" src={Ebu_id} alt="Sponsor 1" className="md:w-32" />
            <img loading="lazy" width="80" src={cineone21} alt="Sponsor 2" className="md:w-32" />
            <img loading="lazy" width="80" src={hiflix} alt="Sponsor 3" className="md:w-32" />
          </div>
        </div>
        <div className="items-start font-semibold">
          <h3 className="font-bold text-black">Follow us</h3>
          <ul className="flex md:grid mt-3 gap-10 md:gap-3">
            <li className="flex gap-4">
              <img loading="lazy" width="25" height="25" src={FacebookSmall} alt="" />
              <div className="hidden md:flex">Tickitz Cinema id</div>
            </li>
            <li className="flex gap-4">
              <img loading="lazy" width="25" height="25" src={InstaSmall} alt="" />
              <div className="hidden md:flex my-auto">tickitz.id</div>
            </li>
            <li className="flex gap-4">
              <img loading="lazy" width="25" height="25" src={TwitterSmall} alt="" />
              <div className="my-auto hidden md:flex">tickitz.id</div>
            </li>
            <li className="flex gap-4">
              <img loading="lazy" width="25" height="25" src={YoutubeSmall} alt="" />
              <div className="hidden md:flex my-auto">Tickitz Cinema id</div>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-sm text-gray-600 md:text-center">© 2020 Tickitz. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

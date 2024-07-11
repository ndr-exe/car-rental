import { poppins } from '@/app/fonts';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <div className="container">
      <footer className="grid py-24 px-6 text-center gap-20 sm:grid-cols-2 sm:text-left lg:grid-cols-[minmax(min-content,7fr),4fr,6fr,7fr] 2xl:grid-cols-[minmax(min-content,6fr),5fr,5fr,7fr] 2xl:px-0">
        <div className="">
          <h4 className={`${poppins.className} text-2xl mb-3.5`}>
            <span className="font-bold">CAR</span>
            &nbsp;Rental
          </h4>
          <p className={`${poppins.className} text-secondary leading-relaxed mb-7`}>
            We offers a big range of vehicles for all your driving needs. We have the perfect car to
            meet your needs.
          </p>
          <ul className="grid gap-2.5 place-items-center sm:place-items-start">
            <a
              href="tel:12345678"
              className="font-medium transition-colors hover:text-primary flex items-center gap-1.5"
            >
              <span>
                <CallIcon className="text-primary" />
              </span>
              (123)-456-789
            </a>
            <a
              href="mailto:carrental@gmail.com"
              className="font-medium transition-colors hover:text-primary flex items-center gap-1.5"
            >
              <span>
                <MailIcon className="text-primary" />
              </span>
              carrental@gmail.com
            </a>
            <a
              href="https://xpeedstudio.com/"
              rel="noreferrer nofollow"
              target="_blank"
              className="font-light transition-colors hover:text-primary flex items-center"
            >
              Design by XpeedStudio
            </a>
          </ul>
        </div>
        <div className={`${poppins.className}`}>
          <h4 className="text-2xl font-bold mb-2.5">COMPANY</h4>
          <ul className="grid gap-2.5">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                New York
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Mobile
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                How we work
              </a>
            </li>
          </ul>
        </div>
        <div className={`${poppins.className}`}>
          <h4 className="text-2xl font-bold mb-2.5">WORKING HOURS</h4>
          <ul className="grid gap-2.5">
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        <form className={`${poppins.className}  `}>
          <h4 className="text-2xl font-bold mb-2.5">SUBSCRIPTION</h4>
          <label htmlFor="subscribe" className="!text-left block mb-5">
            Subscribe your Email address for latest news & updates.
          </label>

          <input
            type="email"
            name="subscribe"
            id="subscribe"
            placeholder="Enter Email Address"
            className="bg-[#ececec] text-sm py-3 block w-full px-6 outline-none leading-loose mb-2.5"
          />
          <button type="button" className="button-primary py-4 block w-full font-semibold">
            Submit
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Footer;

import ContactForm from '@/app/components/Contact/ContactForm';
import { poppins } from '@/app/fonts';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/EmailOutlined';
import LocationIcon from '@mui/icons-material/NearMeOutlined';
import { Metadata } from 'next';
import { pageDescriptions } from '@/lib/pageDescriptions';

export const metadata: Metadata = {
  title: 'Car Rental | Contact',
  description: pageDescriptions.contact,
};

const ContactPage = () => {
  return (
    <div className="container py-24 xs:py-28 sm:py-32 md:py-36 lg:py-40 xl:py-48 px-5 flex flex-col items-center gap-12 lg:flex-row lg:justify-around contactUsBg">
      <div className="grid gap-7 text-center max-w-[26rem] xl:text-left">
        <h2 className={`${poppins.className} text-[42px] font-bold leading-[1.3] `}>
          Need additional information?
        </h2>
        <p className="text-secondary leading-relaxed ">
          A multifaceted professional skilled in multiple fields of research, development as well as
          a learning specialist. Over 15 years of experience.
        </p>

        <ul
          className={`${poppins.className} grid gap-3.5 justify-center sm:place-items-start xl:justify-start`}
        >
          <li>
            <a
              href="tel:12345678"
              className="font-medium transition-colors hover:text-primary flex items-center gap-1.5"
            >
              <span>
                <CallIcon className="text-primary" />
              </span>
              (123)-456-789
            </a>
          </li>

          <li>
            <a
              href="mailto:carrental@gmail.com"
              className="font-medium transition-colors hover:text-primary flex items-center gap-1.5"
            >
              <span>
                <MailIcon className="text-primary" />
              </span>
              carrental@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/L4jujR82fZFhUzYo6"
              target="_blank"
              className="font-medium transition-colors hover:text-primary flex items-center gap-1.5"
            >
              <span>
                <LocationIcon className="text-primary" />
              </span>
              Tbilisi, Georgia
            </a>
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

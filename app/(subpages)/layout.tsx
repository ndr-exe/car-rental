import { poppins } from '../fonts';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';

const subpagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[20rem] lg:h-[26rem] subpageHeaderBg"></div>
      <div className="mt-[20rem] lg:mt-[26rem]">{children}</div>
      <div
        className={`${poppins.className} subpageBanner min-h-[12.5rem] grid place-content-center py-5 px-2 xs:px-5 `}
      >
        <h2 className="container text-[2rem] text-white font-bold flex flex-col gap-2.5 items-center text-center lg:flex-row lg:gap-12 ">
          Book a car by getting in touch with us
          <a href="tel:123456789" className="text-primary hover:text-white transition-colors">
            <PhoneIcon className="w-9 h-auto font-bold" /> (123) 456-7869
          </a>
        </h2>
      </div>
    </>
  );
};

export default subpagesLayout;

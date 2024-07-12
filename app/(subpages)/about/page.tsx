import Image from 'next/image';
import mainImg from '@/public/about/about-main.jpg';
import icon1 from '@/public/about/icon1.png';
import icon2 from '@/public/about/icon2.png';
import icon3 from '@/public/about/icon3.png';
import { poppins } from '@/app/fonts';
import StepsSection from '@/app/components/Steps/StepsSection';

const AboutPage = () => {
  return (
    <div className="pb-12 sm:pb-20 xl:pb-32">
      <div className="container px-6 pt-24 flex flex-col items-center gap-12 xs:pb-5 sm:pb-10 sm:pt-32  lg:flex-row lg:justify-center 2xl:gap-20  ">
        <Image src={mainImg} alt="company members" width={400} height={415} className="" />

        <div className="text-center max-w-[30rem] lg:text-left">
          <h3 className="text-[1.4rem] font-medium mb-2.5 ">About Company</h3>
          <h2 className={`${poppins.className} text-[2.64rem] font-bold leading-tight mb-5`}>
            You start the engine and your adventure begins
          </h2>
          <p className="text-secondary leading-normal mb-10 xs:mb-12">
            Certain but she but shyness why cottage. Guy the put instrument sir entreaties
            affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose.
            Motionless if no to affronting imprudence no precaution. My indulged as disposal
            strongly attended.
          </p>
          <ul className="flex flex-col gap-10 xs:flex-row xs:items-center xs:justify-center lg:justify-start ">
            <li className="flex flex-col items-center">
              <Image src={icon1} alt="car icon" className="h-[39px] w-auto" />
              <span className={`${poppins.className} text-[2.9rem] font-bold `}>20</span>
              <span className="text-secondary">Car Types</span>
            </li>
            <li className="flex flex-col items-center">
              <Image src={icon2} alt="car in garage icon" />
              <span className={`${poppins.className} text-[2.9rem] font-bold`}>85</span>
              <span className="text-secondary">Rental Outlets</span>
            </li>
            <li className="flex flex-col items-center">
              <Image src={icon3} alt="car in repair shop" />
              <span className={`${poppins.className} text-[2.9rem] font-bold`}>75</span>
              <span className="text-secondary">Repair Shop</span>
            </li>
          </ul>
        </div>
      </div>
      <StepsSection />
    </div>
  );
};

export default AboutPage;

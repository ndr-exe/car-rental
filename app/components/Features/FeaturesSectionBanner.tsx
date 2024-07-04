import { poppins } from '@/app/fonts';

const FeaturesSectionBanner = () => {
  return (
    <div className={`${poppins.className} py-[60px] px-6 bg-[#2d2d2d] text-white text-center  `}>
      <h2 className="text-[42px] font-bold leading-[1.3] mb-4 sm:text-[52px]">
        Save big with our cheap car rental!
      </h2>
      <p className="text-xl leading-normal sm:text-2xl ">
        Top Airports. Local Suppliers. <span className="text-primary font-medium">24/7</span>{' '}
        Support.
      </p>
    </div>
  );
};

export default FeaturesSectionBanner;

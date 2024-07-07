import { poppins } from '@/app/fonts';
import FeaturesSectionBanner from './FeaturesSectionBanner';
import NextArrow from '@mui/icons-material/NavigateNextSharp';
import Image from 'next/image';
import main from '@/public/FeaturesSection/main.png';
import { features } from '@/lib/features';
import Feature from './Feature';

const FeaturesSection = () => {
  return (
    <div className="">
      <FeaturesSectionBanner />
      <div className="FeaturesSection ">
        <section className="pt-20 container lg:px-6">
          <div className="py-28 flex flex-col gap-14 lg:flex-row lg:flex-wrap lg:gap-x-0 lg:justify-around 2xl:bg-none">
            <div className="mx-auto max-w-[900px] w-full ">
              <Image src={main} alt="three cars showcase" className="w-full h-auto object-cover" />
            </div>
            <div className="text-center px-6 max-w-[500px] mx-auto sm:px-0 lg:text-left lg:mx-0">
              <h4 className="text-[22px] font-semibold mb-2">Why Choose Us</h4>
              <h2 className={`${poppins.className} text-[42px] font-bold leading-tight mb-5 `}>
                Best valued deals you will ever find
              </h2>
              <p className="text-secondary leading-normal mb-8">
                Discover the best deals you &apos;ll ever find with our unbeatable offers.
                We&apos;re dedicated to providing you with the best value for your money, so you can
                enjoy top-quality services and products without breaking the bank. Our deals are
                designed to give you the ultimate renting experience, so don&apos;t miss out on your
                chance to save big.
              </p>
              <button className="button-primary font-bold px-6 py-4">
                Find Details <NextArrow />
              </button>
            </div>
            <ul className="px-6 flex flex-col gap-11 items-center lg:px-0">
              {features.map((feature, idx) => {
                return (
                  <Feature
                    key={idx}
                    icon={feature.icon}
                    feature={feature.feature}
                    description={feature.description}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesSection;

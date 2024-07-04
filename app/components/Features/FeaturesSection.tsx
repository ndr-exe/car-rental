import { poppins } from '@/app/fonts';
import FeaturesSectionBanner from './FeaturesSectionBanner';
import NextArrow from '@mui/icons-material/NavigateNextSharp';
import Image from 'next/image';
import main from '@/public/FeaturesSection/main.png';
import { features } from '@/lib/features';
import Feature from './Feature';

const FeaturesSection = () => {
  return (
    <section className="pt-20">
      <FeaturesSectionBanner />
      <div className="py-28 flex flex-col gap-14 FeaturesSection">
        <div className="">
          <Image src={main} alt="three cars showcase" />
        </div>
        <div className="text-center px-6">
          <h4 className="text-[22px] font-semibold mb-2">Why Choose Us</h4>
          <h2 className={`${poppins.className} text-[42px] font-bold leading-tight mb-5 `}>
            Best valued deals you will ever find
          </h2>
          <p className="text-secondary leading-normal mb-8">
            Discover the best deals you &apos;ll ever find with our unbeatable offers. We&apos;re
            dedicated to providing you with the best value for your money, so you can enjoy
            top-quality services and products without breaking the bank. Our deals are designed to
            give you the ultimate renting experience, so don&apos;t miss out on your chance to save
            big.
          </p>
          <button className="button-primary font-bold px-6 py-4">
            Find Details <NextArrow />
          </button>
        </div>
        <ul className="px-6 flex flex-col gap-11 items-center">
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
  );
};

export default FeaturesSection;

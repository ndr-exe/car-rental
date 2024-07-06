import Image, { StaticImageData } from 'next/image';
import { poppins } from '@/app/fonts';
const Feature = ({
  icon,
  feature,
  description,
}: {
  icon: StaticImageData;
  feature: string;
  description: string;
}) => {
  return (
    <li className="flex flex-col items-center max-w-[440px] sm:grid sm:grid-cols-[100xp,1fr] sm:grid-rows-[fit,1fr] sm:justify-items-center sm:gap-2.5 ">
      <div className="w-[100px] aspect-square relative  sm:col-start-1 sm:col-end-2 sm:row-span-2">
        <Image
          src={icon}
          alt={feature}
          sizes="100px"
          fill
          quality={100}
          className="w-auto absolute"
        />
      </div>
      <h4
        className={`${poppins.className} text-2xl font-bold mb-2.5 sm:col-start-2 sm:text-center sm:mb-0 lg:justify-self-start`}
      >
        {feature}
      </h4>
      <p className="text-secondary leading-[1.3] text-center sm:col-start-2 lg:text-left ">
        {description}
      </p>
    </li>
  );
};

export default Feature;

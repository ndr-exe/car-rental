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
    <li className="flex flex-col items-center max-w-[440px]">
      <div className="w-[100px] aspect-square relative">
        <Image src={icon} alt={feature} fill quality={100} className="w-auto absolute" />
      </div>
      <h4 className={`${poppins.className} text-2xl font-bold mb-2.5`}>{feature}</h4>
      <p className="text-secondary leading-[1.3] text-center ">{description}</p>
    </li>
  );
};

export default Feature;

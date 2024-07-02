import Image, { StaticImageData } from 'next/image';
import { poppins } from '@/app/fonts';

const Step = ({
  img,
  heading,
  description,
}: {
  img: StaticImageData;
  heading: string;
  description: string;
}) => {
  return (
    <li className="p-2.5 max-w-[400px] medPlus:max-w-none lg:px-14 medPlus:w-2/5 last:medPlus:mx-auto">
      <Image src={img} alt={heading} width={170} height={170} className="mx-auto" />
      <div>
        <h3 className={`${poppins.className} text-2xl font-bold text-center mb-2.5`}>{heading}</h3>
        <p className="text-secondary text-center leading-normal">{description}</p>
      </div>
    </li>
  );
};

export default Step;
<li></li>;

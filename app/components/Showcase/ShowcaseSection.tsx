import { poppins } from '@/app/fonts';
import Showcase from './Showcase';

const ShowcaseSection = () => {
  return (
    <div className="container">
      <section className="px-6 py-24">
        <div className="text-center mb-[50px] max-w-[500px] mx-auto">
          <h3 className="text-2xl font-medium ">Vehicle Models</h3>
          <h2 className={`${poppins.className} font-bold text-[2.65rem] mt-1.5 mb-2.5`}>
            Our rental fleet
          </h2>
          <p className="text-secondary leading-normal ">
            Choose from a variety of our amazing vehicles to rent for your next adventure or
            business trip
          </p>
        </div>
        <div>
          <Showcase />
        </div>
      </section>
    </div>
  );
};

export default ShowcaseSection;

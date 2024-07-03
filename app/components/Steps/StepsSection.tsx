import { poppins } from '@/app/fonts';
import Step from './Step';
import stepOneIcon from '@/public/StepsSection/icon1.png';
import stepTwoIcon from '@/public/StepsSection/icon2.png';
import stepThreeIcon from '@/public/StepsSection/icon3.png';

const StepsSection = () => {
  return (
    <section className="container pt-36 pb-14 px-6">
      <div>
        <h3 className="font-medium text-2xl text-center">Plan your trip now</h3>
        <h2
          className={`${poppins.className} text-[2.6rem] font-bold text-center mt-3 mb-10 medPlus:mb-[4.25rem]`}
        >
          Quick & easy car rental
        </h2>
      </div>
      <ul className="flex flex-col items-center gap-5 px-[30px] medPlus:flex-row medPlus:flex-wrap medPlus:justify-between lg:flex-nowrap">
        <Step
          img={stepOneIcon}
          heading="Select Car"
          description="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
        />
        <Step
          img={stepTwoIcon}
          heading="Contact Operator"
          description="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
        />
        <Step
          img={stepThreeIcon}
          heading="Let's Drive"
          description="Whether you're hitting the open road, we've got you covered with our wide range of cars"
        />
      </ul>
    </section>
  );
};

export default StepsSection;

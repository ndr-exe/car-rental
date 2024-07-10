import Image from 'next/image';
import appStoreIcon from '@/public/DownloadApp/appstore.svg';
import playStoreIcon from '@/public/DownloadApp/googleapp.svg';
import { poppins } from '@/app/fonts';

const DownloadAppSection = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="fullHDWrapper DownloadMobileAppSectionBg ">
        <section className="container ">
          <div
            className="py-24 px-6 flex flex-col gap-5 text-center max-w-[34rem] mx-auto sm:px-0 
          md:mx-0 md:pl-6 md:max-w-[calc(34rem+24px)] md:text-left md:items-start "
          >
            <h2 className={`${poppins.className} text-[2.65rem] font-bold`}>
              Download our app to get most out of it
            </h2>
            <p className="text-secondary leading-normal">
              Thrown shy denote ten ladies though ask saw. Or by to he going think order event
              music. Incommode so intention defective at convinced. Led income months itself and
              houses you.
            </p>
            <div className="flex flex-col items-center gap-7 pt-5 sm:flex-row sm:justify-center">
              <Image
                src={playStoreIcon}
                alt="Google Play Store Icon"
                width={220}
                height={67}
                className="w-[13.5rem] h-auto"
              />
              <Image
                src={appStoreIcon}
                alt="App Store Icon"
                width={220}
                height={67}
                className="w-[13.5rem] h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DownloadAppSection;

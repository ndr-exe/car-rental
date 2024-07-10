import Image from 'next/image';
import appStoreIcon from '@/public/DownloadApp/appstore.svg';
import playStoreIcon from '@/public/DownloadApp/googleapp.svg';
import { poppins } from '@/app/fonts';

const DownloadAppSection = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <section className="container">
        <div className="py-24 px-6 flex flex-col gap-5 text-center">
          <h2 className={`${poppins.className} text-[2.65rem] font-bold`}>
            Download our app to get most out of it
          </h2>
          <p className="text-secondary leading-normal">
            Thrown shy denote ten ladies though ask saw. Or by to he going think order event music.
            Incommode so intention defective at convinced. Led income months itself and houses you.
          </p>
          <div className="flex flex-col items-center gap-7 pt-5">
            <Image src={playStoreIcon} alt="Google Play Store Icon" width={220} height={67} />
            <Image src={appStoreIcon} alt="App Store Icon" width={220} height={67} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadAppSection;

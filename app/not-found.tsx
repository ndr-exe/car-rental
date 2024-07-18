import Link from 'next/link';
import SadFaceIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFoundPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] grid place-content-center ">
      <h2 className="flex flex-col justify-center items-center gap-1.5 text-secondary">
        <span className="">
          <SadFaceIcon className="text-5xl" />
        </span>
        <span className="text-xl">Page Not Found</span>
        <span className="text-2xl flex gap-2">
          GO TO
          <Link href="/" className="text-primary hover:text-primary-dark">
            Homepage
          </Link>
        </span>
      </h2>
    </div>
  );
};

export default NotFoundPage;

import { poppins } from '@/app/fonts';

const SelectCarButton = ({
  carModel,
  setCar,
  isActive,
}: {
  carModel: string;
  setCar: () => void;
  isActive: boolean;
}) => {
  const styles = isActive
    ? 'bg-primary text-white'
    : 'bg-secondary-light hover:bg-primary  hover:text-white';

  return (
    <button
      onClick={() => setCar()}
      className={`${poppins.className} w-full text-xl font-semibold px-6 py-4 text-left transition-colors ${styles} `}
    >
      {carModel}
    </button>
  );
};

export default SelectCarButton;

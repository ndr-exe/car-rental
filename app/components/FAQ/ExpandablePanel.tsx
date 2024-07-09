import { poppins, rubik } from '@/app/fonts';
import ArrowIcon from '@mui/icons-material/ArrowForwardIosSharp';

const ExpandablePanel = ({
  isExpanded,
  handleExpand,
  panel,
  question,
  answer,
}: {
  isExpanded: Panels;
  handleExpand: () => void;
  panel: 'panel1' | 'panel2' | 'panel3';
  question: string;
  answer: string;
}) => {
  return (
    <li>
      <div
        onClick={() => handleExpand()}
        className={` ${isExpanded === panel && 'bg-primary !text-white '}
        ${panel === 'panel1' && '!border-t-0'}
         text-blackish px-5 sm:px-11 py-[1.15rem] transition-shadow border-t flex items-center justify-between min-h-24  sm:min-h-0`}
      >
        <p
          className={` ${poppins.className} ${
            isExpanded === panel && 'shadow-[0_10px_50px_10px_rgba(255,83,48,.35)]'
          } text-lg font-medium  `}
        >
          {question}
        </p>
        <span className={`${isExpanded === panel && 'rotate-90'} transition-transform `}>
          <ArrowIcon className="text-xs" />
        </span>
      </div>
      <div className={`FaqPanel ${isExpanded === panel && 'PanelExpanded'}`}>
        <div className="overflow-hidden">
          <p className={` ${rubik.className} leading-relaxed text-secondary px-5 sm:px-11 py-7 `}>
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ExpandablePanel;

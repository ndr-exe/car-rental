import { poppins } from '@/app/fonts';
import Image, { StaticImageData } from 'next/image';

const TeamMember = ({
  teamMemberInfo,
}: {
  teamMemberInfo: { fullName: string; position: string; photo: StaticImageData };
}) => {
  return (
    <li className="shadow-lg max-w-[20rem]">
      <div className="">
        <Image src={teamMemberInfo.photo} alt={teamMemberInfo.fullName} className="bg-[#f6f6f6]" />
      </div>
      <div className="p-8 text-center">
        <h3 className={`${poppins.className} text-[1.4rem] font-bold`}>
          {teamMemberInfo.fullName}
        </h3>
        <p className={`${poppins.className} text-primary-dark font-medium`}>
          {teamMemberInfo.position}
        </p>
      </div>
    </li>
  );
};

export default TeamMember;

import TeamMember from '@/app/components/Team/TeamMember';
import { team } from '@/lib/team';

const TeamPage = () => {
  return (
    <div className="container pb-40 pt-24 mx-auto md:pt-32 xl:pt-40">
      <ul className="grid gap-y-10 justify-center px-5 md:grid-cols-2 md:justify-items-center md:w-fit md:mx-auto md:gap-x-20 xl:grid-cols-3 xl:gap-y-12">
        {team.map((teamMember, idx) => (
          <TeamMember key={idx} teamMemberInfo={teamMember} />
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;

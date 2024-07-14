import HalfStar from '@mui/icons-material/StarHalfRounded';
import EmptyStar from '@mui/icons-material/StarOutlineRounded';
import FullStar from '@mui/icons-material/StarRounded';

const Rating = ({ rating }: { rating: number }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i] = i + 0.5 === rating ? <HalfStar key={i} /> : <FullStar key={i} />;
    } else {
      stars[i] = <EmptyStar key={i} />;
    }
  }

  return <div className="text-primary-dark">{stars}</div>;
};

export default Rating;

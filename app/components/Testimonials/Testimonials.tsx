'use client';

import { testimonials } from '@/lib/testimonials';
import { useState } from 'react';
import Testimonial from './Testimonial';
import { timeout } from '@/lib/helperFunctions';
import CircleIcon from '@mui/icons-material/Circle';

const Testimonials = () => {
  const [selectedTestimonialPage, setSelectedTestimonialPage] = useState([1, 2]);

  const handleChange = async (page: number[]) => {
    setSelectedTestimonialPage(page);
  };

  const activeButton = selectedTestimonialPage[0] === 1 ? 'firstPage' : 'secondPage';
  return (
    <div>
      <ul className="flex flex-col gap-14">
        {testimonials.map(testimonial => {
          return (
            <Testimonial
              key={testimonial.id}
              active={selectedTestimonialPage.includes(testimonial.id)}
              testimonial={testimonial}
            />
          );
        })}
      </ul>
      <div className="flex justify-center gap-1 mt-4">
        <button
          disabled={activeButton === 'firstPage'}
          onClick={() => selectedTestimonialPage[0] !== 1 && handleChange([1, 2])}
          className={`${
            activeButton === 'firstPage' ? 'text-primary opacity-100' : 'text-secondary opacity-30'
          }`}
        >
          <CircleIcon className="w-4 h-4 " />
        </button>
        <button
          disabled={activeButton === 'secondPage'}
          onClick={() => selectedTestimonialPage[0] !== 3 && handleChange([3, 4])}
          className={`${
            activeButton === 'secondPage' ? 'text-primary opacity-100' : 'text-secondary opacity-30'
          }`}
        >
          <CircleIcon className="w-4 h-4 " />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

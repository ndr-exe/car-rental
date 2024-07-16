'use client';

const ScrollToBookingFormButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      onClick={() => {
        const element = document.querySelector('#bookingForm');
        element?.scrollIntoView({ block: 'center' });
      }}
    >
      {children}
    </button>
  );
};

export default ScrollToBookingFormButton;

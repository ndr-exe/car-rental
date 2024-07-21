export const timeout = (delay: number) => {
  return new Promise(res => setTimeout(res, delay));
};

export const displaySubpageName = (subpage: string) => {
  const subpages = {
    '/about': 'About',
    '/cars': 'Vehicle Models',
    '/testimonials': 'Testimonials',
    '/team': 'Our Team',
    '/contact': 'Contact',
  };
  return subpages[subpage as keyof typeof subpages];
};

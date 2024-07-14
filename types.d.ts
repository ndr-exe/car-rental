type ReservationDetails = {
  car:
    | 'Audi A1 S-Line'
    | 'VW Golf 6'
    | 'Toyota Camry'
    | 'BMW 320 ModernLine'
    | 'Mercedes-Benz GLK'
    | 'VW Passat CC';
  pickUpCity: 'Tbilisi' | 'Rustavi' | 'Kuraisi' | 'Batumi' | 'Zugdidi' | 'Sokhumi';
  dropOffCity: 'Tbilisi' | 'Rustavi' | 'Kuraisi' | 'Batumi' | 'Zugdidi' | 'Sokhumi';
  pickUpDate: string;
  dropOffDate: string;
};

type Car =
  | 'Audi A1 S-Line'
  | 'VW Golf 6'
  | 'Toyota Camry'
  | 'BMW 320 ModernLine'
  | 'Mercedes-Benz GLK'
  | 'VW Passat CC';

type CarDetails = {
  fullTitle: string;
  shortTitle?: string;
  model: string;
  mark: string;
  year: number;
  doors: string;
  ac: boolean;
  transmission: string;
  fuel: string;
  rent: number;
  showcaseImg: StaticImageData;
  image: StaticImageData;
  rating: number;
  id: number;
};

type Testimonial = {
  text: string;
  author: string;
  authorPhoto: StaticImageData;
  location: string;
  id: number;
};

type Panels = 'panel1' | 'panel2' | 'panel3' | false;

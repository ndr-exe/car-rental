import audi from '@/public/showcase/audi.jpg';
import toyota from '@/public/showcase/toyota.jpg';
import mercedes from '@/public/showcase/mercedes.jpg';
import bmw from '@/public/showcase/bmw.jpg';
import vwGolf from '@/public/showcase/vw-golf.jpg';
import vwPassat from '@/public/showcase/vw-passat.jpg';

export function getShowcaseCarImg(car: Car) {
  switch (car) {
    case 'Audi A1 S-Line':
      return audi;
    case 'BMW 320 ModernLine':
      return bmw;
    case 'Mercedes-Benz GLK':
      return mercedes;
    case 'Toyota Camry':
      return toyota;
    case 'VW Golf 6':
      return vwGolf;
    case 'VW Passat CC':
      return vwPassat;
    // default:
    //   return audi;
  }
}

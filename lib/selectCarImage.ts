import audiShowcase from '@/public/showcase/audi.jpg';
import toyotaShowcase from '@/public/showcase/toyota.jpg';
import mercedesShowcase from '@/public/showcase/mercedes.jpg';
import bmwShowcase from '@/public/showcase/bmw.jpg';
import vwGolfShowcase from '@/public/showcase/vw-golf.jpg';
import vwPassatShowcase from '@/public/showcase/vw-passat.jpg';
import audi from '@/public/carModels/audi.jpeg';
import toyota from '@/public/carModels/toyota.jpeg';
import mercedes from '@/public/carModels/mercedes.jpeg';
import bmw from '@/public/carModels/bmw.jpeg';
import vwGolf from '@/public/carModels/vw-golf.jpeg';
import vwPassat from '@/public/carModels/vw-passat.jpeg';

export function getCarImage(car: Car, showcase?: boolean) {
  switch (car) {
    case 'Audi A1 S-Line':
      return showcase ? audiShowcase : audi;
    case 'BMW 320 ModernLine':
      return showcase ? bmwShowcase : bmw;
    case 'Mercedes-Benz GLK':
      return showcase ? mercedesShowcase : mercedes;
    case 'Toyota Camry':
      return showcase ? toyotaShowcase : toyota;
    case 'VW Golf 6':
      return showcase ? vwGolfShowcase : vwGolf;
    case 'VW Passat CC':
      return showcase ? vwPassatShowcase : vwPassat;
  }
}

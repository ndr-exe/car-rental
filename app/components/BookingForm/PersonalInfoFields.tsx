import ModalInput from './ModalInput';

const PersonalInfoFields = () => {
  return (
    <>
      <ModalInput label="First Name" placeholder="Enter your first name" inputType="text" />
      <ModalInput label="Last Name" placeholder="Enter your last name" inputType="text" />
      <ModalInput label="Phone Number" placeholder="Enter your phone number" inputType="tel" />
      <ModalInput label="Age" placeholder="18" inputType="number" />
      <ModalInput label="Email" placeholder="Enter your email address" inputType="email" />
      <ModalInput label="Address" placeholder="Enter your street address" inputType="text" />
      <ModalInput label="City" placeholder="Enter your City" inputType="text" />
      <ModalInput label="Zip Code" placeholder="Enter zip code" inputType="text" />
    </>
  );
};

export default PersonalInfoFields;

import { poppins } from '@/app/fonts';
import MailIcon from '@mui/icons-material/MailOutlineRounded';

const ContactForm = () => {
  return (
    <form
      action=""
      className={`${poppins.className} xs:px-5 min-w-[min(100%,40rem)] flex flex-col gap-5 lg:min-w-[min(60%,40rem)] `}
    >
      <div className="flex flex-col gap-2.5 infoInput">
        <label htmlFor="fullName" className="font-medium  ">
          Full Name&nbsp;
          <span className="text-primary text-xl">*</span>
        </label>
        <input
          type="text"
          placeholder="E.G. John Doe"
          name="fullName"
          id="fullName"
          className="bg-[#f2f2f2] text-[#555] text-[15px] font-medium px-4 py-3.5 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2.5 infoInput">
        <label htmlFor="e-mail" className="font-medium  ">
          Email&nbsp;
          <span className="text-primary text-xl">*</span>
        </label>
        <input
          type="eamil"
          placeholder="E.G. youremail@example.com"
          name="e-mail"
          id="e-mail"
          className="bg-[#f2f2f2] text-[#555] text-[15px] font-medium px-4 py-3.5 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2.5 infoInput">
        <label htmlFor="message" className="font-medium  ">
          Tell us about it&nbsp;
          <span className="text-primary text-xl">*</span>
        </label>
        <textarea
          rows={9}
          placeholder="Write here..."
          name="message"
          id="message"
          className="bg-[#f2f2f2] text-[#555] text-[15px] font-medium px-4 py-3.5 outline-none resize-none "
        />
      </div>
      <button
        type="button"
        className="button-primary font-bold text-lg py-4 flex items-center justify-center gap-1.5"
      >
        <MailIcon />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

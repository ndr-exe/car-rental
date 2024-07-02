const ModalInput = ({
  label,
  placeholder,
  inputType,
}: {
  label: string;
  placeholder: string;
  inputType: string;
}) => {
  return (
    <div className="flex flex-col gap-1 infoInput">
      <label htmlFor={label} className="text-blackish-light font-medium  ">
        {label}&nbsp;
        <span className="text-primary text-xl">*</span>
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        name={label}
        id={label}
        className="bg-[#dbdbdb] text-[#555] text-[15px] font-medium px-4 py-3.5 outline-none"
      />
      <p className="text-[10px]">This field is required</p>
    </div>
  );
};

export default ModalInput;

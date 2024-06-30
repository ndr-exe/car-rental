import Close from '@mui/icons-material/CloseRounded';

const FormError = ({ handleCloseError }: { handleCloseError: () => void }) => {
  return (
    <div className="text-error-text bg-error-background text-[16px] font-medium px-4 py-3 rounded-md mb-[18px] -mt-2.5 flex justify-between items-center">
      <p>All fields required!</p>
      <button onClick={handleCloseError}>
        <Close className="text-lg" />
      </button>
    </div>
  );
};

export default FormError;

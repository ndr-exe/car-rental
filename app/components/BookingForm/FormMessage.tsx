import Close from '@mui/icons-material/CloseRounded';

const FormMessage = ({
  messageType,
  message,
  closeMessage,
}: {
  messageType: string;
  message: string;
  closeMessage: () => void;
}) => {
  const messageTheme =
    messageType === 'error'
      ? 'text-error-text bg-error-background'
      : 'text-success-text bg-success-background';
  return (
    <div
      className={`${messageTheme} text-[16px] font-medium px-4 py-3 rounded-md mb-[18px] -mt-2.5 flex justify-between items-center`}
    >
      <p>{message}</p>
      <button onClick={closeMessage}>
        <Close className="text-lg" />
      </button>
    </div>
  );
};

export default FormMessage;

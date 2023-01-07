type Props = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const MyButton: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button
      className="mt-4 rounded-lg border border-solid border-cyan-500 bg-cyan-500 p-1 font-medium text-white hover:bg-cyan-600 active:border-blue-300"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

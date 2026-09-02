type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition hover:bg-rose-900 active:scale-95"
    >
      {children}
    </button>
  );
}

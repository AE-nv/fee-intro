import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
};

const base =
  "cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition has-focus-visible:ring-2 has-focus-visible:ring-orange-400/60";
const checkedClasses = "border-black bg-black text-white";
const uncheckedClasses =
  "border-stone-200 bg-white text-stone-700 hover:bg-stone-100";

export function RadioPill({ children, name, value, checked, onChange }: Props) {
  return (
    <label className={clsx(base, checked ? checkedClasses : uncheckedClasses)}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {children}
    </label>
  );
}

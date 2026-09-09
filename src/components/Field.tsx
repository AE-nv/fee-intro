import clsx from "clsx";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel" | "time";
  placeholder?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
};

const base =
  "w-full rounded-lg border bg-stone-50 px-3.5 py-3 text-sm text-black outline-none transition placeholder:text-stone-400 focus:bg-white focus:ring-2";
const normal =
  "border-stone-200 focus:border-orange-400 focus:ring-orange-400/20";
const invalid = "border-red-500 focus:border-red-500 focus:ring-red-500/20";

export function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  multiline = false,
  rows = 3,
}: Props) {
  const errorId = `${name}-error`;
  const className = clsx(base, error ? invalid : normal);

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-black tracking-wider text-stone-700 uppercase"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={className}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={className}
        />
      )}

      {!!error && (
        <span id={errorId} className="text-xs font-bold text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

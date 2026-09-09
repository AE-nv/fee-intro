import clsx from "clsx";

const steps = [
  { label: "Ontvangen", done: true },
  { label: "Wordt belegd", done: false },
  { label: "Onderweg naar je bureau", done: false },
];

export function OrderStatus() {
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="text-xs font-black tracking-wider text-stone-500 uppercase">
        Status
      </h2>
      <ol className="flex flex-col gap-3 text-sm">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={clsx(
                "h-2.5 w-2.5 flex-none rounded-full",
                step.done ? "bg-red-500" : "bg-stone-300",
              )}
            />
            <span className={step.done ? "font-bold" : "text-stone-500"}>
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

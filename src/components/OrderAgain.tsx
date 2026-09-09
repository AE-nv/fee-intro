import { LinkButton } from "@/components/LinkButton";

export function OrderAgain() {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-2xl bg-black p-6 text-white">
      <div className="flex flex-col gap-2">
        <h2 className="text-xs font-black tracking-wider text-orange-400 uppercase">
          Nog honger?
        </h2>
        <p className="text-sm leading-relaxed text-white/80">
          De duivel bestelt nooit één keer. Terug naar het menu.
        </p>
      </div>
      <div>
        <LinkButton href="/">Opnieuw bestellen</LinkButton>
      </div>
    </div>
  );
}

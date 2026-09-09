import { LinkButton } from "@/components/LinkButton";

export function NoOrder() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 lg:px-8 lg:py-10">
      <h1 className="text-3xl font-black lg:text-4xl">Geen bestelling</h1>
      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-8">
        <p className="font-black">We hebben hier geen recente bestelling.</p>
        <p className="mt-1 text-sm text-stone-500">
          Stel een zakje samen en reken af, dan zie je hier je bevestiging.
        </p>
        <div className="mt-5">
          <LinkButton href="/" variant="ghost">
            Naar het menu
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-soft"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

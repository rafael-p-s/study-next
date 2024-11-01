import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Link href="/pages/admin">Tela do admin</Link>
      <Link href="/admin">ADM</Link>
      <Link href="/coach">COACH</Link>
      <Link href="/athlete">ATHLETE</Link>
      <Link href="/modelo">Modelo</Link>
    </main>
  );
}

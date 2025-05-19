import { parisienne } from "@/app/fonts";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2 p-4 bg-gray-800 text-white">
      <h1 className={`${parisienne.className} text-6xl`}>CineFiles</h1>
      <div className="flex justify-center">
        <p>Movie reviews and essays</p>
      </div>
    </header>
  );
}

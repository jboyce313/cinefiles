import { parisienne } from '@/app/fonts';

export default function Header() {
  return (
    <header>
      <h1 className={parisienne.className}>CineFiles</h1>
      <p>Movie reviews and essays</p>
    </header>
  );
}
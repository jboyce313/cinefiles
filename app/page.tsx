import { parisienne } from '@/app/fonts';

export default function Home() {
  return (
    <main>
      <h1 className={`${parisienne.className}`}>CineFiles</h1>
      <p>Movie reviews and essays</p>
    </main>
  );
}

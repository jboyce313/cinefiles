import { parisienne } from '@/app/fonts';
import SectionHeader from './ui/section-header';

export default function Home() {
  return (
    <main>
      <h1 className={`${parisienne.className}`}>CineFiles</h1>
      <p>Movie reviews and essays</p>
      <SectionHeader title="Latest Reviews" />
    </main>
  );
}

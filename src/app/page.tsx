import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Hero from '@Components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

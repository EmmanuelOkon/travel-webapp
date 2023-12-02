import {
  Hero,
  Services,
  TopDestination,
  BookingSteps,
  Testimonials,
  Partners,
  NewsLetter,
} from '../components/elements';

export default function Home() {
  return (
    <div className="maxwidth">
      <Hero />
      <Services />
      <TopDestination />
      <BookingSteps />
      <Testimonials />
      <Partners />
      <NewsLetter />
    </div>
  );
}

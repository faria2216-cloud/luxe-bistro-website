import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { AboutSection } from "@/components/AboutSection";
import { SpecialOffers } from "@/components/SpecialOffers";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Reservation } from "@/components/Reservation";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <SpecialOffers />
      <TestimonialsSection />
      <Reservation />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;

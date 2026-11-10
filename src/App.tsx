import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { VisionValues } from "./components/VisionValues";
import { Clients } from "./components/Clients";
import { OrgChart } from "./components/OrgChart";
import { ConsultationForm } from "./components/ConsultationForm";
import { Footer } from "./components/Footer";
import { Roadmap } from "./components/RoadMap";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main id="top">
        <Hero />
        <Services />
        <VisionValues />
        <Clients />
        <Roadmap />
        <OrgChart />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}

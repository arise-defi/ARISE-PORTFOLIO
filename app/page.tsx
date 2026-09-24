import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import CharacterFile from "@/components/CharacterFile";
import SystemInventory from "@/components/SystemInventory";
import Journey from "@/components/Journey";
import ReviewStats from "@/components/ReviewStats";
import FinalTransmission from "@/components/FinalTransmission";
import Footer from "@/components/Footer";
import BootLoader from "@/components/BootLoader";

export default function Home() {
  return (
    <>
      <BootLoader />
      <Sidebar />
      <div className="page-shell">
        <TopBar />
        <main>
          <Hero />
          <CharacterFile />
          <SystemInventory />
          <Journey />
          <ReviewStats />
          <FinalTransmission />
        </main>
        <Footer />
      </div>
    </>
  );
}

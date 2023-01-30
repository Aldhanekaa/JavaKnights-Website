import AboutPage from "@/pages/about";
import NavbarGlobal from "components/global/navbar";
import Aboutus from "components/home/aboutus";
import HeroSection from "components/home/hero";
import MissionSection from "components/home/mission";

export default function Page() {
  return (
    <div
      className="w-screen bg-contain bg-repeat-y py-9"
      style={{
        backgroundImage: "url(/img/Background.png)",
      }}
    >
      <NavbarGlobal />
      <HeroSection />
      <Aboutus />
      <MissionSection />
    </div>
  );
}

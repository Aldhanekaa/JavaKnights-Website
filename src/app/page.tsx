import NavbarGlobal from "components/global/navbar";
import HeroSection from "components/home/hero";

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
    </div>
  );
}

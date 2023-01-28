import HeroSection from "components/home/hero";

export default function Page() {
  return (
    <div
      className="w-screen bg-contain bg-repeat-y"
      style={{
        backgroundImage: "url(/img/Background.png)",
      }}
    >
      <HeroSection />
    </div>
  );
}

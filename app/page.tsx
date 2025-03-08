import FAQ from "./components/FAQ";
import Hardfacts from "./components/Hardfacts";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Tickets from "./components/Tickets";

export default function Home() {
  return (
    <>
      <Hero/>
      <Hardfacts/>
      <Tickets/>
      <Images/>
      <FAQ/>
    </>
  );
}

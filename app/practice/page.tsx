import AboutBanner from "../components/banners/practice";
// import PracticeFooter from "../components/banners/practicefooter";
import Resources from "../components/practiceresource/resource";
import Logos from "../components/logos";
export default function Home() {
  return (
    <div>
      <AboutBanner />
      <Resources />
          {/* <PracticeFooter /> */}
          <Logos/>
    </div>
  );
}

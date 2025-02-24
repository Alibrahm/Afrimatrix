import History from "../components/history";
import AboutBanner from "../components/banners/about"
import Resources from "../components/resources/resources";
export default function Home() {
  return (
    <div>
      <AboutBanner />
      <div className="hidden md:block">
        <History />
      </div>
      <Resources />
    </div>
  );
}

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="relative">
      {/* Bg on += md screens */}
      <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:-z-10 md:w-screen md:h-screen md:overflow-hidden">
        <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:w-full md:h-full md:bg-gray-200  " />
      </div>

      <Banner />
    </div>
  );
}

import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import JobCategories from "./components/JobCategories/JobCategories";
import WholeBanner from "./components/WholeBanner";

export default function Home() {
  return (
    <>
      <WholeBanner />
      <div className="px-8 md:px-20 pt-20 bg-[#FBFBFB]">
        <HowItWorks />
      </div>
      <div className="px-8 md:px-20 pt-20 bg-[#F2F2F2]">
        <JobCategories />
      </div>
      <div className="mx-8 md:mx-20">home</div>
    </>
  );
}

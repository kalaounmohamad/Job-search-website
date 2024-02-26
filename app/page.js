import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import JobCategories from "./components/JobCategories/JobCategories";
import WholeBanner from "./components/WholeBanner";

export default function Home() {
  return (
    <>
      <WholeBanner />
      <div className="px-8 md:px-20 pt-20 bg-gray-100">
        <HowItWorks />
      </div>
      <div className="px-8 md:px-20 pt-20 bg-gray-200">
        <JobCategories />
      </div>
      <div className="mx-8 md:mx-20">home</div>
    </>
  );
}

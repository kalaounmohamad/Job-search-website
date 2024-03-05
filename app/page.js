import Feedback from "./components/Feedback/Feedback";
import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import JobCategories from "./components/JobCategories/JobCategories";
import RecentlyAdded from "./components/RecentlyAddedJobs/RecentlyAdded";
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
      <div className="px-8 md:px-20 pt-28 bg-[#FBFBFB]">
        <RecentlyAdded />
      </div>
      <div className="px-8 md:px-20 pt-20 pb-80 bg-[#FBFBFB]">
        <Feedback />
      </div>
    </>
  );
}

import Carousel from "@/components/Home/Carousel";
import HomeContact from "@/components/Home/Contact";
import HomeProjects from "@/components/Home/Projects";
import Reason from "@/components/Home/Reason";
import Review from "@/components/Home/Review";
import HomeServices from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Carousel />
      <HomeServices />
      <HomeContact />
      <Reason />
      <HomeProjects />
      <Review />
    </div>
  );
}

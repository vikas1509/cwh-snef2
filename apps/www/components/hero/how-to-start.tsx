import StartCard from "@/components/card/start-card";
import Followers from "@/public/logo/followers.png";
import Link from "@/public/logo/link.png";
import Cart from "@/public/logo/logo4.png";
import Pen from "@/public/logo/pen.png";

const HowToStartSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-11/12 mt-16 mx-12 ">
      <h2 className="font-sans text-4xl font-bold text-primary">
        How to start with <span className="text-secondary-foreground">Snef</span>
      </h2>
      <div className="flex gap-8 w-full flex-wrap justify-center ">
        <StartCard
          logo={Pen}
          text="Create your Snef and connect it to your social accounts."
        />
        <StartCard
          logo={Link}
          text="Add products to your store and manage them easily."
        />
        <StartCard
          logo={Cart}
          text="Boost your online presence by automating tasks."
        />
        <StartCard
          logo={Followers}
          text="Monitor your store's performance with detailed analytics."
        />
      </div>
    </div>
  );
};

export default HowToStartSection;


import StartCard from './Cards/StartCard';
import logoOne from '../app/public/pen.png';
import logoTwo from '../app/public/link.png';
import logoThree from '../app/public/logo4.png';
import logoFour from '../app/public/followers.png';

const HowToStartSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-11/12 mt-16 mx-12 ">
      <h2 className="font-sans text-4xl font-bold text-primary-green-10">How to start with Snef</h2>
      <div className="flex gap-8 w-full flex-wrap justify-center ">
        <StartCard logo={logoOne} text="Create your Snef and connect it to your social accounts." />
        <StartCard logo={logoTwo} text="Add products to your store and manage them easily." />
        <StartCard logo={logoThree} text="Boost your online presence by automating tasks." />
        <StartCard logo={logoFour} text="Monitor your store's performance with detailed analytics." />
      </div>
    </div>
  );
}

export default HowToStartSection;

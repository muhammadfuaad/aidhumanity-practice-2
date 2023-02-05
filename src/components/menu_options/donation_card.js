import Mobile_header from "./mobile_header";
import Zakat_calculator from './zakat_calculator';
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import Apple from "./images/apple.svg";
import Google from "./images/google.svg";
import Toggle from "../dashboard/toggle"
import Category from './../category';

function Donation_card() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[13rem] h-[17rem] rounded-3xl hover:border hover:border-primary">
        <div className="w-full h-1/2 rounded-t-3xl relative">
          <img src="./images/water-hand-pumps.png" className="h-full rounded-t-3xl"></img>
          <div className="absolute -bottom-4 right-[45%]">< Category category="Z" /></div>
        </div>
        <div className="flex flex-col w-full h-1/2 px-4 bg-white rounded-b-3xl">
          <div className="h-[60%] border-bottom-light">
            <p className="text-[1rem] font-bold tracking-[-0.27px] text-black mt-7">Pakistan Floods</p>
          </div>
          <div className="h-[40%] self-center flex justify-center items-center">
            <p className="text-[1rem] font-bold tracking-[-0.27px] text-primary uppercase">Donate</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Donation_card;
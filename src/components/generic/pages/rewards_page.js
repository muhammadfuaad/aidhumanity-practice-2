import Page_header from "../components/page_header";
import Icon_1 from "../images/yellow-quotes.svg"
import Image_2 from "../images/child-watching-1.png"
import User_rank from "../components/user_rank";
import User_badge from './../components/user_badge';
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';

function Rewards_page() {
  return (
    <section className="flex flex-col">
      <div className="hidden sm:block">< Generic_header /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Page_header heading="Our Rewards" icon="hidden" />
        <div className="pl-12 sm:pl-64">
          <p className="hidden sm:block text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Our Rewards</p>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="pr-12 flex flex-col w-full sm:w-1/2">
                <p className="generic-heading mb-16 mt-20">Our Rewards</p>
                <p className="generic-body mb-24">We’ve always believed that raising money for charity is reward in itself, but we also recognise the need to incentivise everyone to help spread the word.</p>
                <p className="mb-16 generic-body">Here’s how you can get an additional <span className="font-semibold">morale boost</span> and <span className="font-semibold">take pride in the work</span> you’ve done:</p>
                <ul className="flex flex-col gap-12 generic-list mb-16 sm:mb-0">
                  <li className="list-disc list-outside marker:text-primary ml-8 leading-[2.5rem]">Get rewards based on how many appeals you’ve created and the money raised</li>
                  <li className="list-disc list-outside marker:text-primary ml-8 leading-[2.5rem]">Earn recognition based on the number of people who donate to your appeal</li>
                  <li className="list-disc list-outside marker:text-primary ml-8 leading-[2.5rem]">Be recognised for contributing to the wider Aid Humanity community online</li>
                </ul>
              </div>
              <div className="w-full sm:w-[45%]"><img src={Image_2} className="rounded-l-3xl h-[60rem] w-full"></img></div>
            </div>     
          </div>
        </div>
        
        <div className="flex flex-col px-12 pb-40 mt-28 sm:px-64">
          <div className="self-center w-full sm:w-[40%] flex flex-col mb-6">
            <div className="self-start sm:self-center flex justify-between items-center">
              <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-primary">By putting all of these together, we hope to empower you to achieve more than anyone else thought possible. With you by your side, we know anything is possible.</p>
              <img src={Icon_1} className="self-end sm:self-center"></img>
            </div>
            <button className="mt-12 self-center w-full sm:w-auto sm:px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
              Start Fundraising Now
            </button>
          </div>
          <div className="flex flex-col gap-24 mb-40">
            <p className="self-center text-center text-[3rem] font-bold tracking-[-0.75px] text-black">Why wait to give back to those in need?</p>
            <div className="flex flex-col gap-24 sm:flex-row sm:justify-between sm:gap-16">
              <User_badge title="I'm in" badge="./icons/badge-first.png" slogan="First step in giving" description="(when user makes their first donation)" number="01" />
              <User_badge title="Bronze" badge="./icons/badge-bronze.png" slogan="Your making a crowd, keep going!" description="(when user makes total donation of £100)" number="02" />
              <User_badge title="Silver" badge="./icons/badge-silver.png" slogan="Your making a difference" description="(when user makes total donation of £1000)" number="03" />
              <User_badge title="Gold" badge="./icons/badge-gold.png" slogan="Your part of the Aid Humanity team" description="(when user makes total donation of £5000)" number="04" />
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <p className="self-center text-center text-[3rem] font-bold tracking-[-0.75px] text-black">When users who also create fundraisers</p>
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-16">
              <div className="h-[29rem]"><User_rank title="Your first project" description="(users create their first fundraising page)" number="01" /></div>        
              <div className="h-[29rem]"><User_rank title="Green" description="(user completes their first fundraiser and reaches their goal)" number="02" /></div>        
              <div className="h-[29rem]"><User_rank title="Purple" description="(user reaches a total of £5000 from the total of all their fundraising campaign, eg if they have 2/3 their fundraising or even one)" number="03" /></div>        
              <div className="h-[29rem]"><User_rank title="Blue" description="(have raised over £10.000 of funds in total)" number="04" /></div>        

            </div>
          </div>
        </div>
        <Footer/>
    </section>
  );
}
export default Rewards_page;
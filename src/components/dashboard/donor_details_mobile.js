function Donor_details_mobile(props) {
  return (
    <div className="p-8 bg-white sm:bg-[#f9f9f9] rounded-3xl">
      <div className="flex justify-between items-center"> 
        <div className="flex space-x-4">
          <img src="./Icons/user-circle.svg" className=""></img>
          <p className="text-[1.5rem] font-semibold tracking-[-0.38px] text-primary-dark">{props.donor_name}</p>
        </div>

        <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-primary">{props.amount}</p>
      </div>
      <div>
        <div className="flex space-x-8 items-center mt-4">
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-headings">From 
          <span className="font-semibold"> {props.location}</span></p>
          <div className="flex space-x-1 items-center">
            <img src="./Icons/calendar-clock.svg"></img>
            <span className="text-[1.1rem] font-medium tracking-[-0.28px] text-headings whitespace-nowrap">{props.date}</span>
          </div>
        </div>
      </div>
      
      <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-headings mt-3">{props.appeal}</p>
      <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd] mt-1">{props.category}</p>
      <div className="flex justify-between mt-2">
        <div className="flex relative mt-4">
          <div class="absolute left-12 top-1 w-[0.1px] h-4 bg-[#bdbdbd]"></div>
          <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999999] mr-8">Edit</button>
          <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999999]">View</button>
        </div>
        <img src="./Icons/arrow-right.svg"></img>
      </div>
    </div>
  );
}
export default Donor_details_mobile;
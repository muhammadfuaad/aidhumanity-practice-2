import Dashboard_bottom_links from "./dashboard_bottom_links";
function Preferences() {
  return (
    <div className="bg-[#f5f6f7] h-full w-full">
      <div className="portal__header mt-8 sm:mt-0 px-8 sm:px-16 h-28 flex items-center sm:border-bottom-light">
        <p className="portal-heading">Preferences</p>
      </div>
      
      <div className="px-8 sm:p-16">
        <div className="bg-white rounded-2xl">          
          <div className="px-8 py-12 border-bottom-medium">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-10">Aid Humanity communication</p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Email marketing about other ways to give and fundraise</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"></input>
                  <div className="w-12 h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white
                    after:content-[''] after:absolute after:left-[3px] after:top-1 after:bg-white after:rounded-full after:h-6 after:w-6
                    after:transition-all after:duration-500 peer-checked:bg-[#444445]">
                  </div>
                  <span className="ml-3 text-[1.4rem] font-medium tracking-[0px] text-headings">Enabled</span>
                </label>
              </div>

              <div className="flex justify-between">
                <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Email updates related to pages you donate to</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"></input>
                  <div className="w-12 h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white
                    after:content-[''] after:absolute after:left-[3px] after:top-1 after:bg-white after:rounded-full after:h-6 after:w-6
                    after:transition-all after:duration-500 peer-checked:bg-[#444445]">
                  </div>
                  <span className="ml-3 text-[1.4rem] font-medium tracking-[0px] text-headings">Enabled</span>
                </label>
              </div>

              <div className="flex justify-between">
                <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Email updates realted to pages you create</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"></input>
                  <div className="w-12 h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white
                    after:content-[''] after:absolute after:left-[3px] after:top-1 after:bg-white after:rounded-full after:h-6 after:w-6
                    after:transition-all after:duration-500 peer-checked:bg-[#444445]">
                  </div>
                  <span className="ml-3 text-[1.4rem] font-medium tracking-[0px] text-headings">Enabled</span>
                </label>
              </div>
            </div>
          </div>

          <div className="px-8 py-12 border-bottom-medium">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-10">Third-party app and website permissions</p>
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Please see our <span className="font-semibold text-primary">permissions</span> page to update your third-party app and website permissions.</p>
          </div>

          <div className="px-8 py-12">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-10">Third-party app and website permissions</p>
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-6">If you opted in to hear from a charity when you donated on JustGiving, you’ll need to get in touch with the charity directly to update your preferences.</p> 
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-6">Please see our 
            <span className="font-semibold text-primary"> Terms of Service</span> and  
            <span className="font-semibold text-primary"> Privacy policy</span></p>
            <button className="px-20 py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl mt-8">Save Changes</button>

          </div>
        </div>
      </div>

      <div className="absolute left-8 bottom-8 hidden sm:block ">
        < Dashboard_bottom_links />
      </div>
    </div>
  );
}
export default Preferences;
  
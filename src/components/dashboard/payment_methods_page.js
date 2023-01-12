import Dashboard_bottom_links from "./dashboard_bottom_links";
import Dashboard_sidebar from "./dashboard_sidebar";
import Profile from "./profile";
import Payment_methods from "./payment_methods";

function Payment_methods_page() {
  return (
    <section className="flex">
      <div className="w-[15%] hidden sm:block">
        < Dashboard_sidebar />
      </div>
      <section className="w-full sm:w-[60%] h-screen sm:h-auto relative">
        < Payment_methods />
      </section>
      
        <div className="w-[25%] hidden sm:block">
          <Profile />
        </div>
        
      
    </section>
  );
}
export default Payment_methods_page;
import Dashboard_sidebar from "./dashboard_sidebar";
import Profile_sidebar from "./profile_sidebar";
import Profile from "./profile";

function Profile_page() {
  return (
    <section className="flex">
      <div className="w-[15%] hidden sm:block">
        < Dashboard_sidebar />
      </div>
      <div className="w-full sm:w-[60%] h-screen sm:h-auto relative">
        < Profile />
      </div>
        <div className="w-[25%] hidden sm:block">
          <Profile_sidebar />
        </div>  
    </section>
  );
}
export default Profile_page;
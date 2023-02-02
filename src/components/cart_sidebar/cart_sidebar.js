import Water_hand_pumps_card from "./add_your_donation/cards/water_hand_pumps_card";
import Jummah_giving_card from "./add_your_donation/cards/jummah_giving_card";
import Ramadan_card from "./add_your_donation/cards/ramadan_card";
import Rescue_a_child_card from "./add_your_donation/cards/rescue_a_child_card";
import Water_wells_card from "./add_your_donation/cards/water_wells_card";
import Water_hand_pumps from "./add_your_donation/pages/water_hand_pumps";
import Water_wells from "./add_your_donation/pages/water_wells";
import Rescue_a_child from "./add_your_donation/pages/rescue_a_child";
import Ramadan from "./add_your_donation/pages/ramadan";
import Jummah_giving from "./add_your_donation/pages/jummah_giving";

import Layout from "./add_your_donation/pages/layout";
import Donation_added from "./donation_added/donation_added";
function Cart_sidebar() {
  return (
    <div className="flex space-x-4">
      < Layout card={<Water_wells_card />} page={<Water_wells />} />
      < Layout card={<Jummah_giving_card />} page={<Jummah_giving />} />
      < Layout card={<Ramadan_card />} page={<Ramadan />} />
      < Layout card={<Rescue_a_child_card />} page={<Rescue_a_child />} />
      < Layout card={<Water_hand_pumps_card />} page={<Water_hand_pumps />} />
      < Donation_added />
    </div>
  )
} 
 
export default Cart_sidebar;
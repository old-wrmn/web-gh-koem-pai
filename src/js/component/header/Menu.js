import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
     render() {
         return (
             <div className="block md:hidden">
            <a
                className="text-white
                            text-4xl
                            hover:text-green-300
                            transition
                            duration-500
                            ">
                <FontAwesomeIcon
                    icon={["fa", "bars"]} />
            </a>
         </div>
         )
     }
}

export default Menu;

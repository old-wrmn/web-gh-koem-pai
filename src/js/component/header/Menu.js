import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
    handleClick(e){
        e.preventDefault();
        console.log("nice");
    }

    render() {
         return (
             <div className="block md:hidden">
            <a
                className="text-white
                            text-4xl
                            hover:text-green-300
                            transition
                            duration-500
                            "
                onClick={this.handleClick}>
                <FontAwesomeIcon
                    icon={["fa", "bars"]} />
            </a>
         </div>
         )
     }
}

export default Menu;

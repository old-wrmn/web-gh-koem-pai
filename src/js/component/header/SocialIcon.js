import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialIcon extends React.Component {
     render() {
         return (
            <a
                className="btn btn-social hidden md:inline md:pr-8 transition duration-500 md:text-4xl hover:text-green-300"
            >
                <FontAwesomeIcon icon={["fab", this.props.NameLink]} />
            </a>
         )
     }
}

export default SocialIcon;

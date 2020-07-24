import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialIcon from './SocialIcon'

class SocialMedia extends React.Component {
     render() {
         return (
             <div>
                 <SocialIcon NameLink="twitter" />
                 <SocialIcon NameLink="facebook" />
                 <SocialIcon NameLink="google" />
             </div>
         )
     }
}

export default SocialMedia;

import React from "react";
import file from "./../../../img/logoTraced.png";
class Logo extends React.Component {
     render() {
         return <div
             className="flex
                        item-center
                        flex-shrink-0
                        text-white
                        mr-6
                        pt-0
                        pl-6">
             <img src={file} className="inline h-8 md:h-16"/>
             <span className="font-display text-2xl md:text-5xl tracking-tight pl-2">
                     GreenHouse KoemPai
                 </span>
             </div>;
     }
}

export default Logo;

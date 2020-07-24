import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class MenuChild extends React.Component{
    render(){
        return (
            <div className="btn flex-1 pb-8">
                <FontAwesomeIcon icon={["fas", this.props.Name.icon]} />
            </div>
        )
    }
}

export default MenuChild;


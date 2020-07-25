import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class MenuChild extends React.Component{
    constructor(){
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    render(){
        const stats = this.state.isHovered ? "block":"hidden";
        const textClass = "text-xl " + stats;
        return (
            <div className="btn flex-1 pb-8 h-32 transition duration-500 ease-in-out hover:text-blue-800" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <FontAwesomeIcon icon={["fas", this.props.Name.icon]} /><br />
                <a className={textClass}>{this.props.Name.name}</a>
            </div>
        )
    }
}

export default MenuChild;


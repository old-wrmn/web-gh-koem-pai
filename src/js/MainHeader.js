import React from "react";
import Header from "./component/Header"

class MainHeader extends React.Component{
    render(){
        return(
            <div className="w-full" style={{height:"12vh"}}>
                <Header />
            </div>
        );
    }
}

export default MainHeader;

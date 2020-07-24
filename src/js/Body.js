import React from "react";
import Sidebar from "./component/Sidebar";

class Body extends React.Component {
    render() {
        return(
            <div className="w-full flex flex-row" style={{height:"88vh"}}>
              <Sidebar />
                <div className=" container text-5xl text-purple-600 font-display">Nice</div>
          </div>
       );
    }
}

export default Body;

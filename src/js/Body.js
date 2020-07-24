import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

class Body extends React.Component {
    render() {
        return(
            <div className="w-full h-screen bg-gray-800">
              <Sidebar />
          </div>
       );
    }
}

export default Body;

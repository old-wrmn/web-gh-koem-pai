import React from "react";
import ReactDOM from "react-dom";
import './css/styles.css';
import MainHeader from "./js/MainHeader";
import Body from "./js/Body";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas,fab)

ReactDOM.render(<MainHeader />, document.getElementById("header"));
ReactDOM.render(<Body />, document.getElementById("main"));

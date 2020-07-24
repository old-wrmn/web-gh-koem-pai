import React from "react";
import ReactDOM from "react-dom";
import './css/styles.css';
import Header from "./js/component/Header";
import Body from "./js/Body";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas,fab)

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Body />, document.getElementById("main"));

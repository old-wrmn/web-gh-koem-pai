import React from "react";
import Logo from "./header/Logo";
import MenuChild from "./sidebar/MenuChild"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="flex text-center text-sea text-4xl w-24 sm:w-1/2 md:w-24 h-full bg-sky border border-sky pt-4">
                <ul>
                    <li>
                        <MenuChild Name={{
                                icon:'home',
                                name: 'Beranda'
                                        }} />
                    </li>
                    <li>
                        <MenuChild Name={{
                                icon:'images',
                                name: 'Galeri'
                                        }} />
                    </li>
                    <li>
                        <MenuChild Name={{
                                icon:'newspaper',
                                name: 'Artikel'
                                        }} />
                    </li>
                    <li>
                        <MenuChild Name={{
                                icon:'phone',
                                name: 'Kontak'
                        }} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;

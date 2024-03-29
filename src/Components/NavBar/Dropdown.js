import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';

import { MenuItems} from './MenuItems.js';
import './Dropdown.css';


function DropdownMenu() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    console.log('dropdownMenu has been triggered')

    return (
        <>
        <Dropdown.Menu onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    console.log(item.title)
                    return(
                        <Dropdown.Item
                                className={item.cName} 
                                href={item.path} 
                                key={index}
                                onClick={() => setClick(false)}>
                                {item.title}
                        </Dropdown.Item>
                    )
            })}
        </Dropdown.Menu>
        </>
    );
}

export default DropdownMenu;
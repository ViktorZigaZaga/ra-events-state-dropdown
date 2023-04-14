import React, { useState } from "react";
import DropdownList from './DropdownList'

function Dropdown() {

    const [statusDropdown, setStatusDropdown] = useState(false);
    const toggleOpen = () => setStatusDropdown(prev => !prev);

    return (
        <div className="container">
            <div className={"dropdown-wrapper " + (statusDropdown ? "open" : "")}>
                <button className="btn" onClick={toggleOpen}>
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <DropdownList />
            </div>
        </div>
    );
}

export default Dropdown
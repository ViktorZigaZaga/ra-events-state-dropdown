import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

function DropdownList() {
    const data = [
        {url: "https://netology.ru/profile/settings", title: 'Profile Information'},
        {url: "https://netology.ru/profile/settings/authorization", title: 'Change Password'},
        {url: 'https://netology.ru/profile/program/fjs-10/schedule', title: 'Become PRO'},
        {url: 'https://netology.ru/profile/program/fjs-10/schedule?modal=support', title: 'Help'},
        {url: '#', title: 'Log Out'}
    ];

    return (
        <ul className="dropdown">
            {data.map((item, i) => <DropdownItem item={item} key={i} />)}
        </ul>
    );
}

export default DropdownList
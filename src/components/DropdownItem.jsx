import React, { useState } from "react";
import PropsTypes from 'prop-types';

function DropdownItem(props) {
    const {item} = props;
    const [selected, setSelected] = useState(false);

    return (
        <li className={selected ? 'active' : ''} onMouseEnter={() => setSelected(true)} onMouseLeave={() => setSelected(false)}>
            <a href={item.url}>{item.title}</a>
        </li>
    );
}

DropdownItem.propsTypes = {
    item: PropsTypes.shape({
        url: PropsTypes.string.isRequired,
        title: PropsTypes.string.isRequired,
        url: PropsTypes.bool.isRequired,
    }),
}

export default DropdownItem
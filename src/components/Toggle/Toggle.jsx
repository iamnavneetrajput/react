import React from "react";
import './Toggle.css'
const Toggle = ({ isNightMode, onToggle }) => {
    return (
        <>

            <label htmlFor="check" class="switch">
                <input type="checkbox" id="check" checked={isNightMode} onChange={onToggle} />
                <span class="slider"></span>
            </label>

        </>
    )
}

export default Toggle;
import React, { useState } from 'react'
import MenuArrayElement from './MenuArrayElement'

const MenuIndividualItem = ({ menuItem }) => {
    const [display, setDisplay] = useState({ Profile: false, settings: false })
    const [childrenVisibility, setChildrenVisibility] = useState({})

    // const handleToggleChildren = (currentLabel) => {
    //     // setDisplay((prevDisplay) => ({
    //     //     ...prevDisplay,
    //     //     [currentLabel]: !prevDisplay[currentLabel],
    //     // }));

    //     setDisplay({ [currentLabel]: true })
    // }

    const handleClick = (currentLabel) => {

        setChildrenVisibility({ [currentLabel]: true })
        console.log(childrenVisibility)
    }
    return (
        <ul>
            <div style={{ display: 'flex', gap: 14 }}>
                <li>{menuItem.label}</li>
                {/* {menuItem.children && (<span onClick={() => handleToggleChildren(menuItem.label)}>+</span>)} */}
                {menuItem.children && (<><span onClick={() => handleClick(menuItem.label)}>+</span></>)}

            </div>
            {/* {menuItem.children && display[menuItem.label] && (<>
                {<MenuArrayElement array={menuItem.children} />}
            </>)} */}
            {
                menuItem.children && childrenVisibility['Profile'] && (<>  {<MenuArrayElement array={menuItem.children} />}</>)
            }

        </ul>
    )
}

export default MenuIndividualItem
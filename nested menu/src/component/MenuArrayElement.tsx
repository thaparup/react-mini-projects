import React from 'react'
import MenuIndividualItem from './MenuIndividualItem'

const MenuArrayElement = ({ array }) => {
    return (
        <>
            {array.map((ele) => (<MenuIndividualItem menuItem={ele} />))}
        </>
    )
}

export default MenuArrayElement
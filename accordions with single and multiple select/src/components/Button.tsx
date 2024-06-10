import React from 'react'

type ButtonProps = {
    label: string
    handleClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, handleClick }): JSX.Element => {
    return (
        <button className='' onClick={() => handleClick()}>{label}</button>
    )
}

export default Button
import React, { useState } from 'react'


interface accordionProps {
    id: number,
    question: string,
    answer: string,
    toggleAccordion: (id: number) => void,
    isOpen: boolean


}

const Accordion: React.FC<accordionProps> = ({ id, question, answer, toggleAccordion, isOpen, }: accordionProps): JSX.Element => {



    return (
        <div className='bg-red-200 my-3' key={id}>

            <div className='flex justify-between p-2' onClick={() => toggleAccordion(id)} >
                <h2 className='text-xl'>{question}</h2>
                <h2 className='text-2xl'>+</h2>
            </div>
            <div className={`${isOpen ? 'max-h-[500px] px-3' : 'max-h-0 overflow-hidden'}`}>
                {answer}
            </div>
        </div>
    )
}

export default Accordion
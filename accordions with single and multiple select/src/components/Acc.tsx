import { useState } from "react"



interface AccProps {

    id: number,
    question: string,
    answer: string,
    isOpen: boolean
    setter: (id: number | null) => void
}

const Acc: React.FC<AccProps> = ({ id, question, answer, isOpen, setter }: AccProps) => {


    return (
        <div className='bg-red-200 my-3' key={id}>
            <div className='flex justify-between p-2' onClick={() => setter(id)}>
                <h2 className='text-xl'>{question}</h2>
                <h2 className='text-2xl'>+</h2>
            </div>
            <div className={`${isOpen ? 'max-h-[500px] overflow-hidden' : 'max-h-0 overflow-hidden'}`}>
                {answer}
            </div>
        </div>
    )
}

export default Acc
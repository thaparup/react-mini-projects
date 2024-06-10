
// import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import { data } from './data'


import { useState } from 'react'
import Button from './components/Button'

function App() {

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMultiSelection, setIsMultiSelection] = useState<boolean>(false)
  console.log(isMultiSelection)
  const [arrAcc, setArrAcc] = useState<number[]>([])
  const toggleAccordion = (index: number): void => {

    if (isMultiSelection) {
      setArrAcc((prev) => arrAcc.includes(index) ? arrAcc.filter((ele) => ele !== index) : [...prev, index])
    }

    setOpenAccordion(openAccordion === index ? null : index)


  }
  console.log(arrAcc)

  return (
    <div>

      <h1 className='text-red-400 mb-8'> Accordions</h1>
      <Button label='Enable Multiple Selection' handleClick={() => setIsMultiSelection((prev) => !prev)} />
      <div className='w-[700px] m-auto'>
        {data?.map((ele) => (
          <Accordion id={ele.id} question={ele.question} answer={ele.answer} key={ele.id} toggleAccordion={toggleAccordion} isOpen={isMultiSelection ? arrAcc.includes(ele.id) : openAccordion === ele.id} />
        ))}
      </div>
    </div>

  )
}

export default App

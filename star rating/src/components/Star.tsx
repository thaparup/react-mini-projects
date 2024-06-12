import React, { useState } from 'react';
import { PiStarThin } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa'

type StarProps = {
    noOfStars: number;
}

const Star: React.FC<StarProps> = ({ noOfStars }: StarProps): JSX.Element => {

    const [hover, setHover] = useState<number>(-1)
    const [rating, setRating] = useState<number>(-1)
    // console.log(`hover`, hover)
    console.log('rating', rating)

    return (
        <>
            <div className='flex'>
                {Array.from({ length: noOfStars }, (_, index) => (
                    <FaStar
                        size={38}
                        key={index}

                        onMouseEnter={() => setHover(index)}
                        onClick={() => setRating(index + 1)}
                        onMouseLeave={() => rating !== -1 ? '' : setHover(-1)}
                        className={`${index <= hover ? 'text-yellow-500' : ''}`}
                    />
                ))}
            </div>
            <h1>You have given {rating !== -1 ? rating : 'no'} stars</h1>
        </>
    )
}

export default Star;

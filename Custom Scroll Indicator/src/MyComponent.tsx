import React, { useRef, useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {



    }, [seconds]);

    return <div>Seconds: {seconds}</div>;
};

export default Timer;

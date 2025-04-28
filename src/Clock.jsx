import React, {useEffect, useState} from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            Время {currentTime.toLocaleTimeString()} <br/>
            {
                currentTime.getMinutes() % 5 === 0 ? `Время делится на 5` : ``
            }
        </>
    )
}

export default Clock;
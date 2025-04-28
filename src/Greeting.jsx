import React, {useEffect, useRef, useState} from 'react';

function Greeting(props) {
    const { name } = props;
    const [message, setMessage] = useState(`Привет, ${name}!`);

    useEffect(() => {
        setMessage(prevMessage => {
            if (prevMessage === `Привет, ${name}!`) {
                return `Привет, ${name}!`;
            } else {
                return `Привет, у тебя поменялось имя, теперь ты ${name}!`;
            }
        });
    }, [name]);

    return (
        <>
            {message}
        </>
    );
}

export default Greeting;
import React, {useEffect} from 'react';
import {useState} from 'react';
import {faker} from "@faker-js/faker/locale/ru";
import Header from "./Header.jsx";
import Greeting from "./Greeting.jsx";
import Clock from "./Clock.jsx";

function Container() {
    const [name, setName] = useState(() => faker.person.fullName());

    useEffect(() => {
        const timer = setInterval(() => {
            setName(faker.person.fullName());
        }, 10000);

        return () => clearInterval(timer); // Очистка интервала при размонтировании
    }, []);

    return (
        <>
            <h1><Header/></h1>
            <h2><Greeting name={name}/></h2>
            <h3><Clock/></h3>
        </>
    )
}

export default Container;
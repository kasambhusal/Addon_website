import React, { useEffect } from 'react';
import biogasimg from '/biogas.jpeg';
import dushbinimg from '/dustbin.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import naksapassimg from '/naksapass.png';
import IndividualService from './IndividualService';
export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (

        <div style={{ padding: '5vh 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5vh' }}>
            <h1 style={{ textAlign: 'center' }}>Our Recent Projects</h1>
            <h3 style={{ textAlign: 'center' }}>We want to make simple things easy, and difficult things possible.</h3>
            <IndividualService image={biogasimg} topic="Waste to Energy" content="This is how we convert your waste to energy." fade="fade-left" />
            <IndividualService image={dushbinimg} topic="SURUWAT smart dustbin" content="This is how we use technology to enhance the environment condition." fade="fade-right" />
            <IndividualService image={naksapassimg} topic="Naksapass (official government site)" content="This is how we digitalize the paper work of government tasks." fade="fade-left" />
            {/* <IndividualService image={} topic="" content="" />
            <IndividualService image={} topic="" content="" /> */}


        </div>
    );
}

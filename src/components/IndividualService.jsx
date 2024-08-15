import React from 'react'

export default function IndividualService({ image, topic, content, fade }) {
    return (
        <div style={{ display: 'flex', width: '80%', minHeight: '70vh', backgroundColor: '#9fb0cc', boxShadow: '0px 0px 16px ', flexWrap: 'wrap', justifyContent: 'space-evenly' }} data-aos={fade}>
            <div style={{ maxWidth: '100%', width: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={image} alt="biogas_pic" style={{ width: '95%', height: '80%', borderRadius: '20px' }} />
            </div>
            <div style={{ maxWidth: '100%', minWidth: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-up">
                <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>{topic}</h1>
                <p style={{ fontSize: '20px', fontWeight: '500' }}>{content}</p>
                <div style={{ marginTop: '3%', cursor: 'pointer', padding: '4px 7px', fontFamily: "Playwrite HR Lijeva", border: '2px solid white', borderRadius: '7px', backgroundColor: '#cacbcc' }}>More Details</div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import visionimg from '/vision.jpg'
import { message } from 'antd';
export default function Explanation() {
    const [textToCopy, setTextToCopy] = useState('9845990085');
    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                message.success("Copied to clipboard ")
            })
            .catch(err => {
                message.error("Somethind went wrong !")
            });
    };
    return (
        <div style={{ minHeight: '100vh', width: '100%' }}>
            <div style={{ zIndex: '2', width: '100%', minHeight: '100vh', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
                <div style={{ width: '50%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '90%', minHeight: '80vh' }}>
                        <h1 style={{ textAlign: 'center', color: ' #0096FF' }} >Expand your horizons with our guidance.</h1>
                        <div style={{ margin: '3vh 0', minHeight: '40vh' }}>
                            <p style={{ fontSize: '20px', color: '#35393d', fontWeight: '600' }}>
                                Addon Engineering Solution is your trusted partner for top-notch engineering design and consultancy services. We offer a comprehensive range of solutions, from IT and software development to civil and electrical engineering projects. Our expertise spans feasibility studies, design and analysis, renewable energy, and digital marketing. Rely on us for innovative and sustainable solutions tailored to meet your needs.
                            </p>
                        </div>
                        <div className='contact_icon' style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <span className='contact_icon1'>
                                <a href="https://www.facebook.com/addon2017/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </span>
                            <span className='contact_icon2'>
                                <a href="https://www.linkedin.com/company/addon-engineering-solution/mycompany/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </span>
                            <span className='contact_icon3'>
                                <a href="https://www.instagram.com/addon_engineering_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </span>

                            <span className='contact_icon4'>
                                <ion-icon name="call-outline" onClick={handleCopyClick}></ion-icon>
                            </span>
                            <span className='contact_icon5'>
                                <a href="https://x.com/addon2017/" target='_blank' style={{ textDecoration: 'none', color: 'black' }} >
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </span>


                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ backgroundImage: `url(${visionimg})`, backgroundSize: 'cover', width: '80%', height: '60%', boxShadow: '0px 0px 96px black inset ', borderRadius: '100%' }}></div>
                </div>
            </div>
        </div>
    )
}

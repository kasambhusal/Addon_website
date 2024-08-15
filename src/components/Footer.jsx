import React from 'react'

export default function Footer() {
    return (
        <div style={{ minHeight: '50vh', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1k0vh' }}>

            <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', width: '95%', backgroundColor: '#1f1e1e', borderRadius: '15px 15px 0 0' }}>
                <div>
                    <h2 style={{ color: '#3d3a3a' }}>Get in touch</h2>
                    <h4 style={{ color: 'white', fontWeight: '400' }}>addonnepal@gmail.com</h4>
                    <h4 style={{ color: 'white', fontWeight: '400' }}>+977 9851203374</h4>
                </div>
                <div>
                    <h2 style={{ color: '#3d3a3a' }}>Connect</h2>
                    <h4 style={{ color: 'white', fontWeight: '400' }}><a href='https://www.linkedin.com/company/addon-engineering-solution/mycompany/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>LinkedIn</a></h4>
                    <h4 style={{ color: 'white', fontWeight: '400' }}><a href='https://www.facebook.com/addon2017/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Facebook</a></h4>
                    <h4 style={{ color: 'white', fontWeight: '400' }}><a href='https://www.instagram.com/addon_engineering_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Instagram</a></h4>
                </div>
                <div>
                    <h2 style={{ color: '#3d3a3a' }}>Design Services</h2>
                    <h4 style={{ color: 'white', fontWeight: '400' }}>Addon Engineering Center</h4>
                    <h4 style={{ color: 'white', fontWeight: '400' }}>Buddhanagar,New Baneshwor</h4>
                    <h4 style={{ color: 'white', fontWeight: '400' }}> Kathmandu, Nepal</h4>
                </div>
                <div></div>
            </div>
        </div>
    )
}

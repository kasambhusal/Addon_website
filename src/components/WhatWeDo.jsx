import React, { useEffect } from 'react'
import Itimg from '/It.jpg'
import Civilimg from '/Civil.jpg'
import Electricalimg from '/Electrical.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function WhatWeDo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

  }, [])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5vh', justifyContent: 'space-evenly' }}>
      <div className="field" data-aos="fade-right">
        <div style={{ maxWidth: '330px', minWidth: '300px', boxShadow: '0px 0px 15px inset', borderRadius: '5px', backgroundColor: 'white', height: '45%' }}>
          <img src={Itimg} alt="field" style={{ width: '100%', mixBlendMode: 'multiply', height: '100%' }} />
        </div>
        <div className="write">
          <h2 style={{ cursor: 'pointer', textAlign: 'center', fontWeight: '550', margin: '5% 0', textShadow: '5px 5px 20px ' }}>
            <Link to="/it" style={{ textDecoration: 'none', color: '#3d3e40', fontFamily: 'Roboto Slab' }}>   IT & COMPUTER</Link>
          </h2>
          <p style={{ width: '90%', textAlign: 'justify', fontWeight: '450' }}>
            We provide comprehensive IT and software solutions, including web application design and development, mobile app development, game development, blockchain technology research, digital marketing, graphics design, and e-commerce business solutions.
          </p>
        </div>
      </div>
      <div className="field" data-aos="fade-down">
        <div style={{ maxWidth: '330px', minWidth: '300px', boxShadow: '0px 0px 15px inset', borderRadius: '5px', backgroundColor: 'white', height: '45%' }}>
          <img src={Civilimg} alt="field" style={{ width: '100%', mixBlendMode: 'multiply', height: '100%' }} />
        </div>
        <div className="write">
          <h2 style={{ cursor: 'pointer', textAlign: 'center', fontWeight: '550', margin: '5% 0', textShadow: '5px 5px 20px ', color: '#3d3e40', fontFamily: 'Roboto Slab' }}>
            <Link to="/civil" style={{ textDecoration: 'none', color: '#3d3e40', fontFamily: 'Roboto Slab' }}>
              CIVIL ENGINEERING</Link></h2>
          <p style={{ width: '90%', textAlign: 'justify', fontWeight: '450' }}>
            We conduct feasibility studies, surveying, design, and analysis of commercial and residential buildings, roads, bridges, micro hydropower projects, irrigation systems, water supply, and sanitary systems, all with precise estimation and costing.
          </p>
        </div>
      </div>
      <div className="field" data-aos="fade-left">
        <div style={{ maxWidth: '330px', minWidth: '300px', boxShadow: '0px 0px 15px inset', borderRadius: '5px', backgroundColor: 'white', height: '45%' }}>
          <img src={Electricalimg} alt="field" style={{ width: '100%', mixBlendMode: 'multiply', height: '100%' }} />
        </div>
        <div className="write">
          <h2 style={{ cursor: 'pointer', textAlign: 'center', fontWeight: '550', margin: '5% 0', textShadow: '5px 5px 20px ', color: '#3d3e40', fontFamily: 'Roboto Slab' }}>
            <Link to="/electrical" style={{ textDecoration: 'none', color: '#3d3e40', fontFamily: 'Roboto Slab' }}>  ELECTRICAL ENGINEERING</Link>
          </h2>
          <p style={{ width: '90%', textAlign: 'justify', fontWeight: '450' }}>
            We offer a wide variety of services in electrical engineering, including lighting design, renewable energy projects, rural electrification, telecommunication, micro hydro design, power analysis, fire alarm systems, energy audits, and earthing and lightning protection solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

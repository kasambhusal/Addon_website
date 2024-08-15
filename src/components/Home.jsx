import React, { useEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css'; // Import default LightGallery styles
import 'lightgallery/css/lg-zoom.css'; // Import zoom plugin styles
import 'lightgallery/css/lg-thumbnail.css'; // Import thumbnail plugin styles
import AOS from 'aos';
import Backimg from '/Back.jpg';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import 'react-image-gallery/styles/css/image-gallery.css';

import WhatWeDo from './WhatWeDo';
import Services from './Services';
import Explanation from './Explanation';
import Footer from './Footer';

export default function Home() {
  const [top, setTop] = useState(false);
  const [borderLength, setBorderLength] = useState(0);
  const section1 = useRef();
  const section2 = useRef();
  const dynamicEl = [
    {
      src: 'https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg',
      responsive: '',
      thumb: 'https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg',
      subHtml: `<h4>This is image 1</h4><p>Description for image 1.</p>`,
    },
    {
      src: 'https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg',
      thumbnail: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg",
      subHtml: `<h4>This is image 2</h4><p>Description for image 2.</p>`,
    },
    // Add more placeholder images as needed
  ];
  const images = [
    {
      original: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg",
      width: '500'
    },
    {
      original: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal2.jpg",
    },
    {
      original: "https://www.addon.com.np/img/gallery/wind-water-lifting-survey-in-nepal2.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/wind-water-lifting-survey-in-nepal2.jpg",
    },
    {
      original: "https://www.addon.com.np/img/gallery/road-survey-in-nepal1.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/road-survey-in-nepal1.jpg",
    },
    {
      original: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal3.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal3.jpg",
    },
    {
      original: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal4.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/bio-gas-in-nepal4.jpg",
    },
    {
      original: "https://www.addon.com.np/img/gallery/wind-water-lifting-survey-in-nepal3.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/wind-water-lifting-survey-in-nepal3.jpg",
    },
    {
      original: "https://www.addon.com.np/img/gallery/wind-water-lifting-survey-in-nepal1.jpg",
      thumbnail: "https://www.addon.com.np/img/gallery/wind-water-lifting-survey-in-nepal1.jpg",
    },
  ];

  const scroll = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(scrollPosition / scrollHeight, 1);
      const newBorderLength = Math.max(scrollFraction * 100, 0);

      if (scrollPosition > (window.innerHeight / 2)) {
        setTop(true);
      } else {
        setTop(false);
      }

      setBorderLength(newBorderLength);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleType = (count) => { };

  const handleDone = () => {
    console.log('Done after 5 loops!');
  };

  return (
    <>
      {top && (
        <div
          style={{
            padding: '10px',
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: '5',
            color: 'white',
            border: '3px solid white',
            borderRadius: '10px',
            // transition: 'border-image-slice 0.3s ease',
            borderImage: `linear-gradient(to right, white ${borderLength}%, transparent 0) 1`,
          }}
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          onClick={() => scroll(section2)}
        >
          <ion-icon name="caret-up-outline" size="large" style={{ size: '50px', fontWeight: '1000' }}></ion-icon>
        </div>
      )}
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          position: 'fixed',
          top: '0',
          zIndex: '-1',
          backgroundImage: `url(${Backimg})`,
        }}
        ref={section2}
      ></div>
      <div
        className="home"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <div className="first">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2vh',
            }}
          >
            <h1
              className="large-text"
              style={{
                fontWeight: '700',
                color: '#FFFFFF',
                fontSize: '4rem',
                textShadow: '7px 4px  #626363',
              }}
              data-aos="zoom-in-down"
            >
              {' '}
              Addon Engineering Solution,
            </h1>
            <h3 style={{ fontWeight: '600', color: '#ADD8E6' }}>
              <Typewriter
                words={[
                  'Nepal’s pride',
                  'Best-in-class engineering design',
                  'Best consultation',
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </h3>
          </div>
          <div style={{ width: '40vw', minWidth: '40vw' }}>
            <p
              style={{
                fontWeight: '700',
                display: 'flex',
                textAlign: 'center',
                fontSize: '20px',
                color: '#B0B0B0',
              }}
            >
              We deliver cutting-edge engineering design and consultation. Our
              team works tirelessly to make your dreams come true.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '5vw',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <button className="button" onClick={() => scroll(section1)} data-aos="zoom-in-right">
              Discover more
            </button>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/departments">
              <button className="button" data-aos="zoom-in-left">
                Departments
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#c3d1e8' }}>
        <Explanation />
        <div ref={section1}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '10vh 0',
            }}
          >
            <div
              style={{
                borderBottom: '50px solid #555',
                borderLeft: '25px solid transparent',
                borderRight: '25px solid transparent',
                height: '0',
                width: 'fitContent',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <h2
                style={{
                  color: 'white',
                  padding: '0 5vw',
                  fontSize: '2rem',
                }}
              >
                What We Do ?
              </h2>
            </div>
          </div>
          <WhatWeDo />
          <div style={{ marginTop: '5vh' }}>
            <Services />
          </div>
        </div>

        <div>
          <h1 style={{ textAlign: 'center', margin: '5vh 0' }}>Captured Moments</h1>
          <ImageGallery items={images} />
        </div>
        <div style={{ height: '100vh', padding: '20px' }}>
          <LightGallery
            dynamic={true}
            dynamicEl={dynamicEl}
            plugins={[lgZoom, lgThumbnail]} // Ensure plugins are correctly imported and used
          />
        </div>
        <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.1320574236265!2d85.32776827525306!3d27.68828227619355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b8180e7ab%3A0x69a5397e6e33b8ef!2sAddon%20Engineering%20Solution!5e1!3m2!1sen!2snp!4v1722239835582!5m2!1sen!2snp"
            width="80%"
            height="90%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
}

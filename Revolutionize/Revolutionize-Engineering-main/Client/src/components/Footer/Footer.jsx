import React, { useState } from 'react';
import './footer.css';
import Logo from '../../assets/reveng design3 revolutionize.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      console.log('Subscribed successfully');
      setEmail(''); // Clear the input field
    } else {
      console.error('Subscription failed');
    }
  };

  return (
    <footer className="footer text-white bg-[#27AAE1] bg-center mt-12 items-center">
      <div className="footer-top section py-8 md:py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-brand leading-8 ml-6">
            <a href="#" className="logo">
              <img src={Logo} width="120" height="100" alt="" />
            </a>

            <p className="footer-brand-text text-[#e3e3e3] mt-2">
              Revolutionize Engineering advocates for the pivotal role of
              emerging technologies in Africa's future.
            </p>

            <div className="mt-4">
              <span className="font-bold text-[#e3e3e3]">Add:</span>
              <address className="block text-[#804118]">
                Chandaria Innovation KU
              </address>
            </div>
          </div>

          <ul className="footer-list leading-6 ml-6">
            <li>
              <p className="footer-list-title font-bold">Online Platform</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Events
              </a>
            </li>
            
          </ul>

          <ul className="footer-list leading-6 ml-6">
            <li>
              <p className="footer-list-title font-bold">Links</p>
            </li>

            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/pages" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="/coursepage" className="footer-link">
                Courses
              </a>
            </li>
            <li>
              <a href="/pages3" className="footer-link">
                Jobs
              </a>
            </li>
            <li>
              <a href="/pages2" className="footer-link">
                Hackathons
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer-list leading-6 ml-6">
            <p className="footer-list-title font-bold">Contacts</p>

            <p className="footer-list-text text-[#e3e3e3]">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <form onSubmit={handleSubmit} className="newsletter-form mt-4">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn has-before bg-[#66310f]">
                <span className="span">Subscribe</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </form>

            <div className="mt-2">
              <span className="font-bold text-[#e3e3e3]">Call:</span>
              <a href="tel:+011234567890" className="footer-link">
                +254 123 4567 890
              </a>
            </div>

            <div className="mt-2">
              <span className="font-bold text-[#e3e3e3]">Email:</span>
              <a href="mailto:info@revolutionize.com" className="footer-link text-[#27AAE1]">
                info@revolutionize.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-black py-4">
        <div className="container">
          <p className="copyright text-center text-white">
            © Copyright 2024 Revolutionize Engineering. All rights reserved.
            Made in Nairobi with ❤
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

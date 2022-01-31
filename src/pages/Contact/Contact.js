import React from 'react';
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaTelegram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';
import Hero from '../../page-sections/Hero';
import Splitter from '../../components/UI/Splitter/Splitter';
import Footer from '../../page-sections/Footer';

import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <Hero title='Contact Me' />
      <Splitter />
      <div className='contact__info'>
        <div className='contact__section'>
          <h2 className='contact__title'>Social Media</h2>
          <div className='contact__body'>
            <a
              className='contact__item'
              href='https://twitter.com/navid__naseri'
            >
              <FaTwitterSquare />
              <p className='contact__link'>/navid___naseri</p>
            </a>
            <a
              className='contact__item'
              href='https://instagram.com/navid__naseri'
            >
              <FaInstagramSquare />
              <p className='contact__link'>/navid___naseri</p>
            </a>
            <a className='contact__item' href='https://github.com/Navid079'>
              <FaGithub />
              <p className='contact__link'>/Navid079</p>
            </a>
          </div>
        </div>
        <div className='contact__section'>
          <h2 className='contact__title'>Telecommunicate</h2>
          <div className='contact__body'>
            <a className='contact__item' href='https://telegram.me/lnaxidl'>
              <FaTelegram />
              <p className='contact__link'>@lnaxidl</p>
            </a>
            <a className='contact__item' href='mailto://navid.asg079@gmail.com'>
              <FaEnvelope />
              <p className='contact__link'>navid.asg079@gmail.com</p>
            </a>
            <p className='contact__item'>
              <FaPhoneAlt />
              <p className='contact__link'>+989334303452</p>
            </p>
          </div>
        </div>
      </div>
      <Splitter />
      <Footer />
    </div>
  );
};

export default Contact;

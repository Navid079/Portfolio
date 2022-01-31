import './Index.css';

import React from 'react';
import Hero from '../../page-sections/Hero';
import Biography from '../../page-sections/Biography';
import Splitter from '../../components/UI/Splitter/Splitter';
import Portfolio from '../../page-sections/Portfolio';
import Footer from '../../page-sections/Footer';

const Index = () => {
  return (
    <div className='index-page'>
      <Hero title='Greetings!' />
      <Splitter />
      <Biography title='Who am I?' imageUrl={require('../../images/avatar.jpg')}>
        My name is Ahmad Navid Asghari and I'm a 21-year-old web developer.{' '}
        <br />
        I am a bachelor's degree student in software engineering at the Persian
        Gulf University in Bushehr, Iran. It 's been two and a half years since
        I started programming, and during that time I've learned React and
        Express libraries. I also have some relative knowledge about artificial
        intelligence. During this time I lived and loved algorithms. <br />
        My main skill is web programming and I can work as a full stack
        developer but I also know Java, Python, C and R programming.
      </Biography>
      <Biography title='School Time' imageUrl={require('../../images/school.jpg')}>
        I studied at Ehsan Elementary School in Shiraz, Iran, and then continued
        my education at Sahib Al-Zaman School. In 2016, I was admitted to Razi
        Public Exemplary High School and received my diploma in Mathematics and
        Physics. I entered Bushehr Persian Gulf University in the field of
        computer engineering by passing the 2009 national entrance exam in
        mathematics and physics. I am currently studying at this university.
      </Biography>
      <Biography title='My Work Experience' imageUrl={require('../../images/experience.jpg')}>
        I've never been hired by any company, but by the end of 2020 I started
        doing small and large personal web projects. In the fall of 2021, with a
        number of students at the Persian Gulf University, we launched a
        start-up project that is currently under development and has not been
        published.
      </Biography>
      <Splitter />
      <Portfolio />
      <Splitter />
      <Footer />
    </div>
  );
};

export default Index;

import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Gadget Junkie was founded in 2010 with a simple yet ambitious goal:
            to provide people with the latest and greatest technology gadgets
            that could transform their lives. Our journey began with a small
            team of tech enthusiasts who were passionate about exploring the
            potential of the latest innovations and sharing their knowledge with
            others. Over the years, we have grown into a leading provider of
            cutting-edge technology products and solutions, with a loyal
            customer base spanning the globe. We have always been committed to
            providing our customers with exceptional service, expert advice, and
            the highest-quality products available. Today, we continue to push
            the boundaries of what is possible with technology, exploring new
            ways to enhance people's lives and create a brighter future for all.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

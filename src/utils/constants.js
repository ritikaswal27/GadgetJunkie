import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission is to empower people to enhance their lives through technology. We believe that technology has the power to make our lives easier, more enjoyable, and more fulfilling, and we are passionate about helping people discover the potential of the latest gadgets and innovations.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: "Our vision is to be the leading provider of cutting-edge technology and innovative solutions that enrich people's lives. We strive to be at the forefront of the tech industry, continuously pushing the boundaries of what is possible with the latest gadgets and innovations.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Founded in 2010 with a simple yet ambitious goal: to provide people with the latest and greatest technology gadgets that could transform their lives. Our journey began with a small team of tech enthusiasts who were passionate about exploring the potential of the latest innovations and sharing their knowledge with others.',
  },
];

export const products_url = 'https://course-api.com/react-store-products';
// export const products_url = '/.netlify/functions/products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
// export const single_product_url = `/.netlify/functions/single-product?id=`;

import React from 'react'
import Cards from '../Cards'
import YTDM from './images/YTDM.webp'
import DMprojects from './images/DMprojects.webp'
import Marketingmanga from './images/Marketingmanga.webp'
import digitalworkplace from './images/digitalworkplace.webp'
import Sedom from './images/SEODM.webp'
import HIstoryDM from './images/HIstoryDM.webp'
import salaryDM from './images/salaryDM.webp'
import businessDM from './images/businessDM.jpg'
import optimizekeywords from './images/optimizekeywords.webp'

let cardData = [
  {
    img: YTDM,
    content: '8 Best YouTube Channels to Learn Digital Marketing 2024',
    author: 'By Srinithi Sankar',
    date: '16 Apr, 2024',
    readtime: '4 Min Read'
  },
  {
    img: DMprojects,
    content: '10 Best Digital Marketing Projects in 2024',
    author: 'By Saakshi Priyadarshini',
    date: '02 Apr, 2024',
    readtime: '10 Min Read'
  },
  {
    img: Marketingmanga,
    content: '10 Outstanding Marketing Management Case Studies from India',
    author: 'By Saanchi Bhardwaj',
    date: '21 Jun, 2024',
    readtime: '7 Min Read'
  },
  {
    img: digitalworkplace,
    content: 'Best Digital Marketing Webinars and Workshops',
    author: 'By Saanchi Bhardwaj',
    date: '21 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img:Sedom ,
    content: '32 Best SEO Tools For Digital Marketing in 2024',
    author: 'By Saakshi Priyadarshini',
    date: '03 May, 2024',
    readtime: '15 Min Read'
  },
  {
    img:HIstoryDM ,
    content: 'The History and Evolution of Digital Marketing',
    author: 'By Saanchi Bhardwaj',
    date: '21 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img: salaryDM,
    content: 'Digital Marketing Salary in India: A Comprehensive Guide',
    author: 'By Srinithi Sankar',
    date: '',
    readtime: ''
  },
  {
    img: businessDM,
    content: '6 Reasons Business Analytics Makes Digital Marketing Powerful',
    author: 'By Lahari Chandana',
    date: '12 Apr, 2024',
    readtime: '4 Min Read'
  },
  {
    img:optimizekeywords ,
    content: 'How to Optimize Keywords for SEO: A Step-by-Step Guide',
    author: 'By Saanchi Bhardwaj',
    date: '21 Mar, 2024',
    readtime: '6 Min Read'
  },
]



function DigitalMarketing() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default DigitalMarketing
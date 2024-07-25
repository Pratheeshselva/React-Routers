import React from 'react'
import Cards from '../Cards'
import cloudcompu from './images/cloudcompu.webp'
import effecloudcompu from './images/effecloudcompu.webp'
import highpaycloud from './images/highpaycloud.webp'
import astoundingwebsites from './images/astoundingwebsites.webp'
import cloudtools from './images/fifteenpbc.jpg'
import YThannels from './images/YThannels.webp'
import mastercloud from './images/mastercloud.webp'
import awscerti from './images/awscerti.jpg'
import fifteenpbc from './images/fifteenpbc.jpg'

let cardData = [
  {
    img:cloudcompu ,
    content: 'Top 10 Cloud Computing Project Ideas [2024]',
    author: 'By Isha Sharma',
    date: '23 Jul, 2024',
    readtime: '4 Min Read'
  },
  {
    img:effecloudcompu ,
    content: 'Effective Cloud Computing Career Roadmap 2024',
    author: 'By Lukesh S',
    date: '25 Mar, 2024',
    readtime: '10 Min Read'
  },
  {
    img: highpaycloud,
    content: 'Top 10 High Paying Cloud-Computing Jobs without Coding in 2024',
    author: 'By Isha Sharma',
    date: '22 Mar, 2024',
    readtime: '6 Min Read'
  },
  {
    img: astoundingwebsites,
    content: '9 Astounding Websites To Learn Cloud Computing in 2024',
    author: 'By Lukesh S',
    date: '21 Mar, 2024',
    readtime: '9 Min Read'
  },
  {
    img: cloudtools,
    content: 'Top 7 Cloud Computing Tools of 2024',
    author: 'By Jaishree Tomar',
    date: '21 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img:fifteenpbc ,
    content: 'Best 15 Product-based Companies for IoT Solutions Architects in India',
    author: 'By Saanchi Bhardwaj',
    date: '23 Mar, 2024',
    readtime: '7 Min Read'
  },
  {
    img: YThannels,
    content: 'Best YouTube Channels to Learn Cloud Computing Engineering',
    author: 'By Meghana D',
    date: '26 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img: mastercloud,
    content: 'How Long It Would Take to Master Cloud Computing Engineering',
    author: 'By Meghana D',
    date: '17 Nov, 2023',
    readtime: '6 Min Read'
  },
  {
    img: awscerti,
    content: 'Is AWS Certification Worth It? | Best AWS Certifications 2024',
    author: 'By Isha Sharma',
    date: '13 Dec, 2023',
    readtime: '3 Min Read'
  },
]


function CloudComputing() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default CloudComputing
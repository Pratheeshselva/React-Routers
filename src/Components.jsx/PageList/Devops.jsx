import React from 'react'
import Cards from '../Cards'
import tendevops from './images/tendevops.webp'
import YTDevops from './images/YTDevops.jpg'
import devopstime from './images/devopstime.webp'
import highpaydevops from './images/highpaydevops.webp'
import devopspbc from './images/devopspbc.webp'
import devopsSE from './images/devopsSE.jpg'
import websitesdevops from './images/websitesdevops.webp'
import salarydevops from './images/salarydevops.webp'
import devopscourses from './images/devopscourses.jpg'

let cardData = [
  {
    img: tendevops,
    content: '10 Best DevOps Project Ideas for 2024',
    author: 'By Isha Sharma',
    date: '25 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img:YTDevops ,
    content: '9 Best YouTube Channels to Learn DevOps from Scratch',
    author: 'By Srinithi Sankar',
    date: '25 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: devopstime,
    content: 'How Long Will It Take to Learn DevOps?',
    author: 'By Lukesh S',
    date: '15 Apr, 2024',
    readtime: '6 Min Read'
  },
  {
    img: highpaydevops,
    content: 'Top High-Paying Non-Coding Jobs in DevOps [2024]',
    author: 'By Isha Sharma',
    date: '12 Apr, 2024',
    readtime: '5 Min Read'
  },
  {
    img: devopspbc,
    content: 'Top 16 Product-Based Companies for DevOps Engineers in India',
    author: 'By Tushar Vinocha',
    date: '26 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: devopsSE,
    content: 'As a Software Engineer, How Do I Shift My Career to DevOps?',
    author: 'By Lahari Chandana',
    date: '16 Apr, 2024',
    readtime: '5 Min Read'
  },
  {
    img: websitesdevops,
    content: '11 Best Websites to Learn DevOps For Beginners',
    author: 'By Saanchi Bhardwaj',
    date: '22 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: salarydevops,
    content: 'Salary of a DevOps Engineer in India 2024',
    author: 'By Isha Sharma',
    date: '02 Apr, 2024',
    readtime: '4 Min Read'
  },
  {
    img: devopscourses,
    content: '7 Best DevOps Online Courses for Beginners in 2024',
    author: 'By Srinithi Sankar',
    date: '04 Apr, 2024',
    readtime: '4 Min Read'
  },
]


function Devops() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default Devops
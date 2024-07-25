import React from 'react'
import Cards from '../Cards'
import cybernoncodingjob from './images/cybernoncodingjob.webp'
import ethical from './images/ethical.webp'
import hacking from './images/hacking.webp'
import typesofcyber from './images/typesofcyber.webp'
import cybersec from './images/cybersec.gif'
import codingreq from './images/codingreq.webp'
import surge from './images/surge.webp'
import ultimatecyber from './images/ultimatecyber.webp'


let cardData = [
  {
    img: cybernoncodingjob,
    content: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    author: 'By Jaishree Tomar',
    date: '26 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: ethical,
    content: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    author: 'By Tushar Vinocha',
    date: '16 Apr, 2024',
    readtime: '5 Min Read'
  },
  {
    img: ultimatecyber,
    content: 'Cybersecurity vs Artificial Intelligence | Better Career',
    author: 'By Meghana D',
    date: '16 Apr, 2024',
    readtime: '2 Min Read'
  },
  {
    img: hacking,
    content: 'What Is Hacking? Types of Hacking & More',
    author: 'By Meghana D',
    date: '25 Mar, 2024',
    readtime: '6 Min Read'
  },
  {
    img: typesofcyber,
    content: '8 Different Types of Cybersecurity and Threats Involved',
    author: 'By Tushar Vinocha',
    date: '08 Sep, 2023',
    readtime: '4 Min Read'
  },
  {
    img:cybersec ,
    content: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
    author: 'By Tushar Vinocha',
    date: '04 Oct, 2023',
    readtime: '4 Min Read'
  },
  {
    img:codingreq,
    content: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
    author: 'By Tushar Vinocha',
    date: '23 Jul, 2024',
    readtime: '6 Min Read'
  },
  {
    img:surge ,
    content: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
    author: 'By Tushar Vinocha',
    date: '23 Jul, 2024',
    readtime: '8 Min Read'
  },
  {
    img:ultimatecyber ,
    content: 'The Ultimate Cybersecurity Roadmap for Beginners',
    author: 'By Srinithi Sankar',
    date: '23 Mar, 2024',
    readtime: '7 Min Read'
  },
]


function CyberSecurity() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default CyberSecurity
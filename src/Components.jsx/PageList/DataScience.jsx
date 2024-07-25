import React from 'react'
import Cards from '../Cards'
import noncodedatasci from './images/noncodedatasci.webp'
import twelevedatasci from './images/twelevedatasci.webp'
import commerce from './images/commerce.webp'
import rolesandresp from './images/rolesandresp.webp'
import datascipdc from './images/datascipdc.webp'
import salarudatasci from './images/salarudatasci.webp'
import timedatasci from './images/timedatasci.webp'
import datasciaiml from './images/datasciaiml.webp'
import bestdatasciscourse from  './images/bestdatasciscourse.webp'


let cardData = [
  {
    img: noncodedatasci,
    content: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    author: 'By Isha Sharma',
    date: '23 Jul, 2024',
    readtime: '6 Min Read'
  },
  {
    img:twelevedatasci ,
    content: '12 Real-World Data Science Examples: Power Of Data Science',
    author: 'By Lukesh S',
    date: '25 Mar, 2024',
    readtime: '7 Min Read'
  },
  {
    img:commerce ,
    content: 'Can A Commerce Student Do Data Science?',
    author: 'By Saakshi Priyadarshini',
    date: '16 Apr, 2024',
    readtime: '3 Min Read'
  },
  {
    img: rolesandresp,
    content: 'Roles and Responsibilities of a Data Scientist',
    author: 'By Jaishree Tomar',
    date: '16 Apr, 2024',
    readtime: '6 Min Read'
  },
  {
    img: datascipdc,
    content: 'Top Product-Based Companies for Data Scientists in 2024',
    author: 'By Jaishree Tomar',
    date: '26 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img:salarudatasci ,
    content: 'Everything about Data Scientist Salary in India | 2024',
    author: 'By Srinithi Sankar',
    date: '22 Jul, 2024',
    readtime: '5 Min Read'
  },
  {
    img: timedatasci,
    content: 'How Long Would It Take to Learn Data Science?',
    author: 'By Meghana D',
    date: '16 Apr, 2024',
    readtime: '4 Min Read'
  },
  {
    img: datasciaiml,
    content: 'AI vs ML vs Data Science: What Should You Learn In 2024?',
    author: 'By Archana',
    date: '26 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: bestdatasciscourse,
    content: '10 Best Data Science Online Courses for Beginners | 2024',
    author: 'By Srinithi Sankar',
    date: '02 Apr, 2024',
    readtime: '5 Min Read'
  },
]


function DataScience() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default DataScience
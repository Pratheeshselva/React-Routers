import React from 'react'
import Cards from '../Cards'
import FSDprjects from './images/FSDprjects.jpg'
import FSDduration from './images/FSDduration.webp'
import FSDIdeas from './images/FSDIdeas.webp'
import Dmfsd from './images/DMSFSD.webp'
import ApacheFSD from './images/ApacheFSD.webp'
import FSDReactproj from './images/FSDReactproj.webp'
import FSDFrameworkks from './images/FSDFrameworkks.jpg'
import FSDHotTopics from './images/FSDHotTopics.webp'
import FSDPrerequisites from './images/FSDPrerequisites.jpg'


let cardData = [
  {
    img: FSDprjects,
    content: 'Best Full-Stack Development Project Ideas in 2024',
    author: 'By Isha Sharma',
    date: '23 Jul, 2024',
    readtime: '4 Min Read'
  },
  {
    img:FSDduration ,
    content: 'How Long Would It Take to Be a Full Stack Developer?',
    author: 'By Meghana D',
    date: '26 Mar, 2024',
    readtime: '3 Min Read'
  },
  {
    img: FSDIdeas,
    content: '7 Unique Web Development Project Ideas for Beginners',
    author: 'By Lukesh S',
    date: '02 Apr, 2024',
    readtime: '6 Min Read'
  },
  {
    img: Dmfsd,
    content: '10 Best Database Management Systems For Software Developers',
    author: 'By Isha Sharma',
    date: '22 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: ApacheFSD,
    content: 'How does Apache work? A detailed introduction to Apache',
    author: 'By Tushar Vinocha',
    date: '26 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img: FSDReactproj,
    content: '10 Best React Project Ideas for Developers [with Source Code]',
    author: 'By Isha Sharma',
    date: '25 Apr, 2024',
    readtime: '5 Min Read'
  },
  {
    img: FSDFrameworkks,
    content: 'Top 10 Full-Stack Developer Frameworks in 2024',
    author: 'By Isha Sharma',
    date: '16 Apr, 2024',
    readtime: '5 Min Read'
  },
  {
    img: FSDHotTopics,
    content: 'Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]',
    author: 'By Archana',
    date: '26 Mar, 2024',
    readtime: '6 Min Read'
  },
  {
    img: FSDPrerequisites,
    content: '6 Essential Prerequisites For Learning ReactJS',
    author: 'By Ramkumar',
    date: '25 Mar, 2024',
    readtime: '3 Min Read'
  }
]


function FullStackDevelopment() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default FullStackDevelopment
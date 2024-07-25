import React from 'react'
import Cards from '../Cards'
import ToptenUI from './images/ToptenUI.webp'
import UIskills from './images/UIskills.webp'
import UIsyllabus from './images/UIsyllabus.webp'
import UIdesign from './images/UIdesign.jpg'
import UIsalary from './images/UIsalary.webp'
import downloadfigma from './images/downloadfigma.webp'
import figmawindows from './images/figmawindows.webp'
import Interviewfigma from './images/Interviewfigma.webp'
import futureonUIUX from './images/futureonUIUX.webp'

let cardData = [
  {
    img:ToptenUI ,
    content: 'Top 10 UI/UX Project Ideas for Beginners',
    author: 'By Isha Sharma',
    date: '23 Jul, 2024',
    readtime: '4 Min Read'
  },
  {
    img: UIskills,
    content: '10 Best Skills Required to Become a UI/UX Designer',
    author: 'By Isha Sharma',
    date: '29 Jun, 2024',
    readtime: '5 Min Read'
  },
  {
    img:UIsyllabus ,
    content: 'UI/UX Syllabus | Complete Curriculum 2024 ',
    author: 'By Lukesh S',
    date: '25 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img:UIdesign ,
    content: 'UI/UX Designer Job Description and Roles & Responsibilities',
    author: 'By Meghana D',
    date: '16 Apr, 2024',
    readtime: '6 Min Read'
  },
  {
    img: UIsalary,
    content: 'UI/UX Salary Guide 2024: Is it a High-Paying Career?',
    author: 'By Srinithi Sankar',
    date: '16 Apr, 2024',
    readtime: '6 Min Read'
  },
  {
    img: downloadfigma,
    content: 'How to Download an Image from Figma? A 5-Step Guide to Help You Out',
    author: 'By Lukesh S',
    date: '23 Jul, 2024',
    readtime: '3 Min Read'
  },
  {
    img: figmawindows,
    content: 'How to Install Figma On Windows',
    author: 'By Meghana D',
    date: '15 Apr, 2024',
    readtime: '4 Min Read'
  },
  {
    img: Interviewfigma,
    content: '33 Interview Questions and Answers for UI/UX Designers',
    author: 'By Meghana D',
    date: '04 Apr, 2024',
    readtime: '23 Min Read'
  },
  {
    img:futureonUIUX ,
    content: 'The Future and Scope of UI/UX Design: A Comprehensive Overview',
    author: 'By Jaishree Tomar',
    date: '16 Apr, 2024',
    readtime: '4 Min Read'
  },
]


function UIUXDesigning() {
  return <> {cardData.map((item, i) => (
    <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
  ))
  } </>
}

export default UIUXDesigning
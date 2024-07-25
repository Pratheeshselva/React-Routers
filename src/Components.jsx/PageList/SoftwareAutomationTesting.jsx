import React from 'react'
import Cards from '../Cards'
import Testquestions from './images/Testquestions.webp'
import testskills from './images/testskills.webp'
import PDDandSDD from './images/PDDandSDD.jpeg'
import Testproj from './images/Testproj.webp'
import captchasele from './images/captchasele.webp'
import TEtest from './images/TEtest.webp'
import Testcareer from './images/Testcareer.webp'
import Robotclass from './images/Robotclass.gif'
import skillRPA from './images/skillRPA.webp'

let cardData = [
  {
    img: Testquestions,
    content: 'Top 100+ Manual Testing Interview Questions and Answers',
    author: 'By Isha Sharma',
    date: '22 Mar, 2024',
    readtime: '33 Min Read'
  },
  {
    img:testskills ,
    content: 'The 8 Essential Skills for a Successful Automation Tester',
    author: 'By Jaishree Tomar',
    date: '25 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img:PDDandSDD ,
    content: 'What is PDD & SDD in RPA? THE TWO MOST CRUCIAL BLUEPRINTS in Robotics Process Automation.',
    author: 'By Tushar Vinocha',
    date: '25 Mar, 2024',
    readtime: '3 Min Read'
  },
  {
    img: Testproj,
    content: '7 Best Automation Testing Project Ideas',
    author: 'By Isha Sharma',
    date: '25 Mar, 2024',
    readtime: '3 Min Read'
  },
  {
    img: captchasele,
    content: '3 cool tricks to Automate Captcha In Selenium',
    author: 'By Archana',
    date: '26 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: TEtest,
    content: 'Automation Test Engineer Roles and Responsibilities in 2024',
    author: 'By Isha Sharma',
    date: '16 Apr, 2024',
    readtime: '3 Min Read'
  },
  {
    img:Testcareer ,
    content: 'Is Choosing Automation Testing a Good Career Opportunity in 2024?',
    author: 'By Isha Sharma',
    date: '16 Apr, 2024',
    readtime: '3 Min Read'
  },
  {
    img: Robotclass,
    content: 'How to use Robot Class in Selenium using Java? Step-by-step guided tutorial!',
    author: 'By Tushar Vinocha',
    date: '25 Mar, 2024',
    readtime: '4 Min Read'
  },
  {
    img: skillRPA,
    content: '12 Essential Skills Required to Become an RPA Developer',
    author: 'By Ramkumar',
    date: '16 Apr, 2024',
    readtime: '4 Min Read'
  },
]


function SoftwareAutomationTesting() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    } </>
}

export default SoftwareAutomationTesting
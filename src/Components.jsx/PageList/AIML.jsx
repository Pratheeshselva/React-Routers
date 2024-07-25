import React from 'react'
import topseven from './images/topseven.webp'
import chatbots from './images/chatbots.webp'
import advanddisv from './images/advanddisv.webp'
import patternrecog from './images/patternrecog.webp'
import promteng from './images/promteng.webp'
import mlcapstone from './images/mlcapstone.webp'
import augmented from './images/augmented.webp'
import applevision from './images/applevision.webp'
import genai from './images/genai.webp'
import Cards from '../Cards'






let cardData = [
  {
    img: topseven,
    content: 'Top 7 Important Engineering Project Ideas Using ChatGPT',
    author: 'By Lukesh S',
    date: '03 May, 2024',
    readtime: '6 Min Read'
  },
  {
    img:chatbots ,
    content: 'The Influence of Chatbots on Customer Services: Benefits and Impact',
    author: 'By Meghana D',
    date: '27 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img: advanddisv,
    content: 'Advantages and Disadvantages of AI: A Comprehensive Guide [2024]',
    author: 'By Jaishree Tomar',
    date: '23 May, 2024',
    readtime: '7 Min Read'
  },
  {
    img:patternrecog ,
    content: 'Top 10 Pattern Recognition Project Ideas [2024]',
    author: 'By Meghana D',
    date: '04 May, 2024',
    readtime: '8 Min Read'
  },
  {
    img:promteng ,
    content: 'Best Practices for Prompt Engineering in 2024',
    author: 'By Isha Sharma',
    date: '18 May, 2024',
    readtime: '4 Min Read'
  },
  {
    img: mlcapstone,
    content: '7 Unique Machine Learning Capstone Projects To Boost Your Resume',
    author: 'By Lukesh S',
    date: '31 May, 2024',
    readtime: '6 Min Read'
  },
  {
    img: augmented,
    content: 'Retrieval Augmented Generation: Important Things You Need To Know About [2024]',
    author: 'By Lukesh S',
    date: '03 May, 2024',
    readtime: '6 Min Read'
  },

  {
    img: applevision,
    content: 'Apple’s Vision Pro: A Deep Dive into Tech Specs, Applications, & What’s Next [2024]',
    author: 'By Lukesh S',
    date: '29 May, 2024',
    readtime: '4 Min Read'
  },
  {
    img: genai,
    content: 'Generative AI vs Predictive AI: A Comprehensive Guide for 2024',
    author: 'By Jaishree Tomar',
    date: '23 May, 2024',
    readtime: '9 Min Read'
  }


]

function AIML() {
  return <>
    {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
  </>
}

export default AIML
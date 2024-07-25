import React from 'react'
import Cards from '../Cards'
import javaimg from './images/JavaInterview.webp'
import miniproject from './images/miniproject.webp'
import renderarray from './images/renderarray.webp'
import fetchdata from './images/fetchdata.webp'
import topten from './images/topten.jpg'
import mechanical from './images/mechanical.webp'
import hardestlang from './images/hardestlang.jpg'
import thirtyjsproject from './images/thirtyjsproject.jpg'
import cracktcs from './images/cracktcs.png'

let cardData = [
    {
        img: javaimg,
        content: '40 Java Interview Questions for Freshers with Clear & Concise Answers',
        author: 'By Tushar Vinocha',
        date: '23 Jul, 2024',
        readtime: '5 Min Read'
    },
    {
        img: miniproject,
        content: 'Top 30 Mini Project Ideas For College Students [UPDATED]',
        author: 'By Srinithi Sankar',
        date: '23 Jul, 2024',
        readtime: '6 Min Read'
    },
    {
        img: renderarray,
        content: 'How to Render an Array of Objects in React? [in 3 easy steps]',
        author: 'By Tarun Singh',
        date: '23 Jul, 2024',
        readtime: '7 Min Read'
    },
    {
        img: fetchdata,
        content: 'Use ReactJS to Fetch and Display Data from API – 5 Simple Steps',
        author: 'By Tarun Singh',
        date: '23 Jul, 2024',
        readtime: '5 Min Read'
    },
    {
        img: topten,
        content: 'Top 10 Unique Project Ideas for College Students',
        author: 'By Lukesh S',
        date: '23 Jul, 2024',
        readtime: '7 Min Read'
    },
    {
        img: mechanical,
        content: '15 Best Mechanical Engineering Project Ideas in 2024',
        author: 'By Meghana D',
        date: '23 Jul, 2024',
        readtime: '5 Min Read'
    },
    {
        img: hardestlang,
        content: '10 Hardest and Easiest Programming Languages in 2024',
        author: 'By Saakshi Priyadarshini',
        date: '23 Jul, 2024',
        readtime: '6 Min Read'
    },
    {
        img: thirtyjsproject,
        content: '30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]',
        author: 'By Saakshi Priyadarshini',
        date: '23 Jul, 2024',
        readtime: '8 Min Read'
    },
    {
        img: cracktcs,
        content: 'Crack the TCS IPA Exam: Top Questions and Exclusive Tips for Success!',
        author: 'By Jaishree Tomar',
        date: '23 Jul, 2024',
        readtime: '7 Min Read'
    }


]




function TrendingArticles() {
    return <>
    {cardData.map((item, i)=>(
        <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
}

    </>
}

export default TrendingArticles
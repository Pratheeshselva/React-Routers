import React from 'react'
import Cards from '../Cards'
import guide from './images/guide.jpeg'
import noncoding from './images/noncoding.webp'
import bestbooks from './images/bestbooks.webp'
import blockchain from './images/blockchain.webp'

let cardData = [
  {
    img:guide ,
    content: 'A Guide To Learning Blockchain Technology From Scratch',
    author: 'By Lukesh S',
    date: '06 Oct, 2023',
    readtime: '3 Min Read'
  },
  {
    img: noncoding,
    content: 'Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech',
    author: 'By Jaishree Tomar',
    date: '22 Mar, 2024',
    readtime: '3 Min Read'
  },
  {
    img: bestbooks,
    content: 'Best Books to Learn Blockchain',
    author: 'By Meghana D',
    date: '24 Mar, 2024',
    readtime: '5 Min Read'
  },
  {
    img:blockchain ,
    content: 'Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional',
    author: 'By Lukesh S',
    date: '24 Mar, 2024',
    readtime: '3 Min Read'
  }
]

function BlockChain() {
  return <>
   {cardData.map((item, i) => (
      <Cards key={i} img={item.img} content={item.content} author={item.author} date={item.date} readtime={item.readtime} />
    ))
    }
 
  </>
}

export default BlockChain
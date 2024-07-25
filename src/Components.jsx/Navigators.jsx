import React, { Component, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AIML from './PageList/AIML';
import BlockChain from './PageList/BlockChain';
import CloudComputing from './PageList/CloudComputing';
import CyberSecurity from './PageList/CyberSecurity';
import DataScience from './PageList/DataScience';
import Devops from './PageList/Devops';
import DigitalMarketing from './PageList/DigitalMarketing'
import FullStackDevelopment from './PageList/FullStackDevelopment'
import SoftwareAutomationTesting from './PageList/SoftwareAutomationTesting'
import TrendingArticles from './PageList/TrendingArticles';
import UIUXDesigning from './PageList/UIUXDesigning';






let navs = [
    'Trending Articles',
    'AI & ML',
    'BlockChain',
    'Cloud Computing',
    'Cyber Security',
    'Data Science',
    'DevOps',
    'Digital Marketing',
    'Full Stack Development',
    'Software Automation & Testing',
    'UI/UX Designing'

];

// const pages = [
//     { path: '/trending', element: 'TrendingArticles' },
//     { path: '/aiml', element: 'AIML' }
// ]

const paths = [
    'trendingarticles',
    'aiml',
    'block-chain',
    'cloud-computing',
    'cyber-Security',
    'datascience',
    'devOps',
    'digital-marketing',
    'full-Stack-Development',
    'software-automation-testing',
    'ui-ux-designing'

]

function Navigators() {


    const [selectedPath, setSelectedPath] = useState('');
    const [currentTitle, updateTitle] = useState('');

    const handleClick = (path, nav) => {
        setSelectedPath(path);
        updateTitle(nav)
    };



    return <>
        <BrowserRouter>
  
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '80%', height: '40rem', marginTop: '15px', display: 'flex' }}>
                    <div className='navs' style={{ display: 'flex', flexDirection: 'column', maxWidth: '25%' }}>

                        {navs.map((nav, i) => (

                            <Link key={i} to={paths[i]} style={{ textDecoration: 'none' }} onClick={() => handleClick(paths[i], nav)}>


                                <div className='individual-topics'  key={i} style={{color: selectedPath === paths[i] ? '#dffbff' : '#707070', fontWeight: 'revert', width: '15rem', display: 'flex',
                                     justifyContent: 'space-between', padding: '10px', cursor: 'pointer', backgroundColor: selectedPath === paths[i] ? '#06854d' : 'transparent' }}>
                                    {nav}
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </Link>


                        ))
                        }


                    </div>
                    <div className='scrollbar' style={{ overflow: 'auto'}}>
                        <div style={{textAlign:'center', fontWeight:'lighter' ,color:'black'}}><h2>{currentTitle}</h2></div>
                        <div className='cards' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '10px' }}>

                            <Routes>
                                {/* {pages.map((page, i) => ( <Route key={i} path={page.path} element= {< page.element />}/> )) } */}

                                <Route path='/' element={<TrendingArticles />} />
                                <Route path='/trendingarticles' element={<TrendingArticles />} />
                                <Route path='/aiml' element={<AIML />} />
                                <Route path='/block-chain' element={<BlockChain />} />
                                <Route path='/cloud-computing' element={<CloudComputing />} />
                                <Route path='/cyber-Security' element={<CyberSecurity />} />
                                <Route path='/datascience' element={<DataScience />} />
                                <Route path='/devOps' element={<Devops />} />
                                <Route path='/digital-marketing' element={<DigitalMarketing />} />
                                <Route path='/full-Stack-Development' element={<FullStackDevelopment />} />
                                <Route path='/software-automation-testing' element={<SoftwareAutomationTesting />} />
                                <Route path='/ui-ux-designing' element={<UIUXDesigning />} />
                                

                            </Routes>



                        </div>
                    </div>



                </div>
            </div>
        </BrowserRouter>

    </>
}

export default Navigators
import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { projects } from './Data';
import {AnimatePresence} from 'framer-motion';


const allLists=['all',...new Set(projects.map((project)=>project.category))];

const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState(projects);
    const [navList, setNavList] = useState(allLists);
    const filteredItems=(category)=>{
        if(category==='all'){
            setPortfolioItems(projects);
            return;
        }

        const newItems=projects.filter((project)=>project.category===category);
        setPortfolioItems(newItems);
    }

  return (
    <section className='portfolio section' id='work'>
         <h2 className="section__title text-cs">Portfolio</h2>
        <p className="section__subtitle">
            My <span>cases</span>
        </p>
        <List list={navList} filteredItems={filteredItems}/>
        <div className="portfolio__container container grid">
            <AnimatePresence initial={false}>
                <Items portfolioItems={portfolioItems}/>
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Portfolio
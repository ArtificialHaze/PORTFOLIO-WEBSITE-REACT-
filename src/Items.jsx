import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {motion} from 'framer-motion';

const Items = ({portfolioItems}) => {
  return (
    <>
    {portfolioItems.map((portfolioItem)=>{
        const {id,img,category,title,desc}=portfolioItem;
        return (
            <motion.div layout animate={{opacity:1,scale:1}} initial={{opacity:0.8, scale:0.6}} exit={{opacity:0.8,scale:0.6}} transition={{duration:0.35}} key={id} className="portfolio__items card card-two">
                <div className="portfolio__img-wrapper">
                    <img src={img} alt="IMAGE" className="portfolio__img" />
                </div>
                <span className="portfolio__category text-cs">
                    {category}
                </span>
                <h3 className='portfolio__title'>{title}</h3>
                <p className="portfolio__description">{desc}</p>
                <a href="#" className="link">See prices <FaArrowRight className='link__icon'/></a>
                <img src={"IMAGE"} alt="IMAGE" className="shape c__shape" />
            </motion.div>
        )
    })}
    </>
  )
}

export default Items
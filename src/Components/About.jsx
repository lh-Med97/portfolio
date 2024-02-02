
// import ilya from '../assets/ilya.jpg';

import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import logo from '../assets/logo-white.png';
import WaterDropGrid from './WaterDropGrid';
import sabri from '../assets/sabri.jpg';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      function handleScroll() {
        const paragraph = document.querySelector('.fade-right');
        if (!isVisible) {
          const paragraphPosition = paragraph.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;
  
          if (paragraphPosition < screenHeight) {
            setIsVisible(true);
            paragraph.classList.add('active');
          }
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isVisible]);


//   const backgroundImageStyle = {
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ilya})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center center',
//   };

  return (
    <>
         <WaterDropGrid></WaterDropGrid>
        
      
 
      <div className="pb-2 mb-2 gap-3  sm:ml-9  relative  text-white mx-10 w-full left-2  right-2    grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
          
    
      <div className="pb-2 mb-20 gap-4 grid grid-rows-1 justify-items-center left-1 sm:ml-9 right-0 mx-auto w-4/6 ">
          
          <div> <p className={` p-4 mt-5  m-3   text-white  `}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur dolore maxime! Pariatur rem nemo aut, officiis cupiditate, quaerat aspernatur sint ipsam labore suscipit quibusdam sequi autem, quod consectetur perspiciatis!
           </p> </div>
           <div> <p className={` p-4 mt-5  m-3  text-white  `}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur dolore maxime! Pariatur rem nemo aut, officiis cupiditate, quaerat aspernatur sint ipsam labore suscipit quibusdam sequi autem, quod consectetur perspiciatis!
           </p> </div>
 
           <img className="animate-spin duration-5000 delay-5000 border-none  bottom-0 left-0 h-[100px] w-[105px] rounded-full dark:shadow-black/30" src={logo} alt="" />
         </div>
      <div> <img className=" m-3 w-3/6 right-0" src={sabri} alt="" />
      <img className=" m-3 w-3/6 right-0" src={sabri} alt="" /></div>
          </div>
       
    
      
        
   
    
    
    
    </>
  );
}

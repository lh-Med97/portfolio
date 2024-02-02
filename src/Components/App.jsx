
import { initTE, Ripple } from 'tw-elements';
import { NavbarMinimal } from "./NavbarMinimal" // Assuming you need to import tw-elements here
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  useState } from 'react';
import Hero from './Hero';
// import About from './About';
import WaterDropGrid from './WaterDropGrid';


function App() {
  const ref = useRef(null);
  const controls = useAnimation();
  // eslint-disable-next-line no-unused-vars
  const  inView= useInView(ref,{ one:true});

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  // Initialize tw-elements
  // eslint-disable-next-line no-undef
  useEffect(() => {
    initTE({ Ripple });
  }, []);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className='relative'>

      <NavbarMinimal />



      <motion.div  ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, delay: 0.25 }}
    // eslint-disable-next-line no-undef
    style={{ width:'fit-content',position:"relative",overflow:"hidden"}} className="bg-black relative grid grid-rows-1">
        {showScrollButton && (
          <div
            onClick={backToTop}
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className=" cursor-pointer fixed bottom-5 right-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0"
            id="btn-back-to-top"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
          </div>
        )}
        <div className=" bg-black mx-auto my-20 h-screen  ">  <Hero></Hero> </div>
        <div className="bg-black mx-auto my-20 mt-28 h-screen  "> </div>
        <div className=" bg-black mx-auto my-20 h-screen  "> comit  </div>
        <div className='bg-black mx-auto my-10  h-screen'>  </div>
        
       
      </motion.div>


    </div>

  )
}
export default App;
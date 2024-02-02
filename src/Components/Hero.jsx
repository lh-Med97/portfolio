
import { BsGithub,BsLinkedin } from "react-icons/bs";
// import { animated } from '@react-spring/web'
import Cv from "../assets/Cv.pdf"
export default function Hero() {
  return (
     <div className="px-20 text-white justify-items-center  bg-black ">
    <div className="   grid items-center justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2  sm:grid-cols-1  self-center mx-10 pt-10">
    <div className="text-center ">
      <img
        className=" justify-center mx-auto w-1/2 md:w-2/3 lg:w-80"
        src={"https://thriving-dragon-a3fcd9.netlify.app/assets/profile-pic.png"}
        alt="hero"
      />
    </div>
    <div className="text-center mt-15 pt-10  bg-black ">
 
    <p className="my-2 text-5xl font-bold font-mono leading-tight animate-pulse md:text-4xl sm:text-md">
  Full Stack Web Developer
</p>


      <h1 className="my-6 text-xl  pt-6 opacity-2 transform: translateY(-25%)">
     {"Hello, I am Mohamed lahmamsi, a full stack developer with a desire to innovate, I create effective and easy-to-use web solutions. Explore my work to see my work and let's collaborate on your next project"} 

      </h1>
      <div className="flex justify-center mx-auto gap-3 bg-black">
        <a href={Cv}
           type="button"
          className="hover:underline bg-white text-gray-800 font-bold rounded-full px-6 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
        
          download="Mohammed lahmamsi"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
        <button
          className="hover:underline bg-white text-gray-800 font-bold rounded-full px-6 pb-2 pt-2.5 text-xs uppercase leading-normal  shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
          onClick={() => (window.location.href = './#contact')}
        >
          Contact Info
        </button>
      </div>
      <div id="socials-container" className="gap-3 flex justify-center mx-auto my-8 bg-black">
        <BsLinkedin
        target="_blank" 
           style={{height:"2rem",width:"3rem"}}
          alt="My LinkedIn profile"
          className="text-xxl cursor-pointer "
          onClick={() => (window.location.href = 'https://www.linkedin.com/in/mohammed-lahmamsi-5882001ba/')}
        />
        <BsGithub
         target="_blank" 
          style={{height:"2rem",width:"3rem"}}
          alt="My Github profile"
          className="text-xxl cursor-pointer "
          onClick={() => (window.location.href = 'https://github.com/lh-Med97')}
        />

      </div>

    </div>
  </div>
  </div>
  )
}
 

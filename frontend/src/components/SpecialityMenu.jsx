import React, {useEffect, useRef } from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { AppContext } from '../context/AppContext';

gsap.registerPlugin(ScrollTrigger);

const SpecialityMenu = () => {


  const containerRef = useRef();



useGSAP(() => {
  const items = gsap.utils.toArray(containerRef.current.children);

  gsap.fromTo(items,
    { opacity: 0 },   // starting state
    {
      opacity: 1,     // ending state
      stagger: 0.15,
      duration: 0.4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    }
  );
}, []);

  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-1/3 text-center text-sm'>Simply browse through our trusted list of doctors, schedule <br />
      your appointment hassle free</p>
      <div className='flex sm:justify-center items-center gap-4 pt-5 w-full overflow-scroll' ref={containerRef}>
        {
          specialityData.map((item,index)=>(
            <Link 
              key={index} 
              onClick={()=>scrollTo(0,0)} 
              className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
              to={`/doctors/${item.speciality}`}
            >
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SpecialityMenu;


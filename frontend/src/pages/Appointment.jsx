import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const info = doctors.find(doc => doc._id == docId);
    setDocInfo(info);
  }, [doctors, docId]);

  if (!docInfo) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-[#5f6fff] w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        {/*-----------------Right-Side Details--------------*/}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*----------------Doc Info:name,degree,experience--------*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="Verified Icon" /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>

          </div>

          {/*---------------Doctor's About-----------------*/}
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          <p className='text-gray-500 font-medium mt-4'>Appointment Fee: <span className='text-gray-600'>${docInfo.fees}</span></p>

        </div>
        
      </div>
    </div>
  );
};

export default Appointment;

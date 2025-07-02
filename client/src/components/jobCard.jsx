import React from 'react';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom';

const JobCard = ({ job }) => {

    const navigate=useNavigate()



  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition bg-white">
      
      {/* Company Icon and Title */}
      <div className="flex items-center gap-4 mb-3">
        <img
          src={assets.company_icon}
          alt="Company Icon"
          className="w-12 h-12 object-contain"
        />
        <h4 className="text-lg font-semibold">{job.title}</h4>
      </div>

      {/* Location and Level Tags */}
      <div className="flex flex-wrap gap-2 text-sm mb-3">
        {job.location && (
          <span className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-black px-3 py-1 rounded-full">
            📍 {job.location}
          </span>
        )}
        {job.level && (
          <span className="ml-1 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-black px-3 py-1 rounded-full">
            🎯 {job.level}
          </span>
        )}
      </div>

      {/* Job Description Preview */}
      <p
        className="text-gray-700 text-sm mb-4"
        dangerouslySetInnerHTML={{
          __html: (job.description || '').slice(0, 150) + '...',
        }}
      />

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button onClick={()=> {navigate(`/apply-job/${job._id}`) ; scrollTo(0,0)}}className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
          Apply Now
        </button>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`) ; scrollTo(0,0)}}className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded hover:bg-gray-300 transition">
          Learn More
        </button>
      </div>
      
    </div>
  );
};

export default JobCard;




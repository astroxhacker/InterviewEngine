"use client"
import React, { useEffect } from "react";
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard(){
    useEffect(() => {
        const handleLoad = () => {
            window.alert("Some of the features might not work on Safari browser or any apple devices !")
        };
        window.addEventListener('load', handleLoad);
        return () => {
          window.removeEventListener('load', handleLoad);
        };
      }, []);
    return(
        <div>
            <h2 className='font-bold text-2xl' >Dashboard</h2>
            <h2 className='text-gray-500' >Create and Start your AI based Interview</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 my-5' >
                <AddNewInterview />
            </div>

            <InterviewList />

        </div>
    )
}

export default Dashboard
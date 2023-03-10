import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Home.css'
import Typewriter from 'typewriter-effect';
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate()
    const courses = useLoaderData()
    const threeCourses = courses.slice(0, 3);
    console.log(threeCourses);



    const [loading, setLoading] = useState()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])


    return (
        <div>




            <div className='bg'>
                <h2 className='text-4xl text-center font-bold text-white py-12'>
                    <Typewriter
                        options={{
                            strings: ['Welcome to Enviable Learning'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
            </div>
            <h2 data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" className='text-center font-bold text-4xl mt-12'>Our Courses</h2>

            <div className="flex justify-center items-center my-8">
                {
                    loading ?
                        <ClimbingBoxLoader
                            color={'#32A8B3'}
                            loading={loading}
                            size={50}
                            
                        />
                        :
                        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>

                            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                                {
                                    threeCourses.map(singleCourse => <SingleCourse
                                        key={singleCourse.id}
                                        singleCourse={singleCourse}
                                    ></SingleCourse>)
                                }
                            </div>
                            <button onClick={() => navigate("/courses")} className="btn btn-warning flex m-auto">See Our All Courses</button>

                        </div>
                }

            </div>





        </div>
    );
};

export default Home;
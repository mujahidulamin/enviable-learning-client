import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaFilePdf } from 'react-icons/fa';
import './CourseDetails.css'




const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [5, 11]
};

const CourseDetails = () => {



    const courseDetails = useLoaderData()
    console.log(courseDetails);

    const { course_title, image, instructor_name, price, description, instructor_photo } = courseDetails


    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div ref={ref}>
                <div className='bg-gray-100 p-6 rounded shadow-lg'>
                    <h2 className='text-3xl font-bold text-center mb-5'>{course_title} <Pdf targetRef={ref} filename="description.pdf" options={options} x={.5} y={0} scale={0.8}>
                        {({ toPdf }) => <button onClick={toPdf}><FaFilePdf></FaFilePdf></button>}
                    </Pdf></h2>

                    <img
                        className='object-cover w-full mb-6 rounded shadow-lg xl:h-80'
                        src={image}
                        alt=''
                    />
                    <div className='text-justify'>
                        <span className='font-bold '>Description: </span>
                        {description}
                    </div>

                    <p className='text-2xl mt-5 mb-2'>Instructor</p>
                    <div className='lg:flex lg:justify-between lg:items-center'>
                        <div>
                            <div className='lg:border flex lg:bg-stone-200 w-48'>
                                <img className='h-12 w-12 rounded-full' src={instructor_photo} alt="" />
                                <span className='ml-2 mt-3 font-bold'>{instructor_name}</span>
                            </div>
                        </div>

                        <div className='price'>
                            <p><span className='font-bold '>Price: </span> {price} Taka</p>
                        </div>
                    </div>

                    <Link to={`/checkout/${course_title}`}>
                        <button className='bg-amber-300 p-3 rounded-xl flex m-auto mt-6'><span className='font-bold'>Get Premium Access</span></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const {id ,course_title, price, image } = course

    return (
        <Link to={`/courses-details/${id}`}>
            <div className='bg-gray-100 p-6 rounded shadow-lg'>
                <img
                    className='object-cover w-full mb-6 rounded shadow-lg xl:h-80'
                    src={image}
                    alt=''
                />
                <div className='flex justify-between'>
                    <span className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{course_title }</span>
                    <span className='text-gray-700 md:mt-2  font-bold '>Course Price: {price}</span>
                </div>
            </div>
        </Link>
    );
};

export default Course;
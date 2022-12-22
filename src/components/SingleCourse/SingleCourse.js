import React from 'react';

const SingleCourse = ({ singleCourse }) => {
    const {course_title, price, image } = singleCourse;
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className='bg-gray-100 p-6 rounded shadow-lg'>
                <img
                    className='object-cover w-full mb-6 rounded shadow-lg xl:h-80'
                    src= {image}
                    alt=''
                />
                <div>
                    <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{course_title}</p>
                    <p className='text-gray-700 md:mt-2  font-bold '>Course Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;
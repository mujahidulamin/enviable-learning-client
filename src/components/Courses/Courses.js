import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);


    return (
        <div className='px-4 py-16 courses'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <div>
                <aside className="border-solid w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                    <nav className="space-y-8 text-sm">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-widest uppercase dark:text-gray-400">Course Category</h2>
                            <div className="flex flex-col space-y-1 text-xl">
                                {
                                    courses.map(course => <p key={course.id}><Link to={`/courses-details/${course.id}`}>{course.course_title}</Link></p>)
                                }
                            </div>
                        </div>

                    </nav>
                </aside>
            </div>
        </div>
    );
};

export default Courses;
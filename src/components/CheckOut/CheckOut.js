import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const CheckOut = () => {

    const {user} = useContext(AuthContext)

    const checkout = useLoaderData()
    console.log(checkout);

    const { course_title, image } = checkout

    return (
        <div>
            <p className='text-green-600 text-4xl text-center font-bold mt-6'>Congratulations!!! <span className='text-amber-400 underline'>{user.displayName}</span> <br />
            You get the Premium Access of this course</p>
            <p className='text-2xl text-center font-bold mt-6'>Your email address : {user.email}</p>
            <h2 className='text-3xl text-center mt-6'>{course_title}</h2>
            <div className="card w-96 m-auto glass mb-12 mt-8">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Thanks for choosing this course</h2>
                    <p>We will help you to achieve your dream. If you give your 100% effort we will be there for you surely...</p>
                    <div className="card-actions justify-end">
                        <Link to={'/'}><button className="btn bg-amber-300 border-0 hover:bg-amber-100 hover:text-black"><span className='text-zinc-900 '>Homepage</span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
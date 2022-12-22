import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import { toast } from 'react-hot-toast';

const Register = () => {

    const [error, setError] = useState('')
    const { createUser, updateUserProfile, } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, photoURL);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                toast.success('Successfully User Created')
                handleUpdateUserProfile(name, photoURL)
                navigate('/')

            })
            .catch(error => {
                console.error('error', error);
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }

    const [loading, setLoading] = useState()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])



    return (
        <div className='flex justify-center items-center pt-8 pb-8'>

            {
                loading ?
                    <ClimbingBoxLoader
                        color={'#32A8B3'}
                        loading={loading}
                        size={50}
                    />
                    :
<div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                    onSubmit={handleSubmit}
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'

                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                PhotoURL
                            </label>
                            <input
                                type='text'
                                name='photoURL'
                                id='photoURL'
                                placeholder='Enter Your photoURL required'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                required
                            />
                        </div>
                        {
                            <span className='text-red-600'>{error}</span>
                        }
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <button

                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>

                <p className='px-6 text-sm text-center text-gray-400 mt-4'>
                    Already have an account yet?{' '}
                    <Link to={'/login'} className='hover:underline text-gray-600'>
                        Log in
                    </Link>
                    .
                </p>
            </div>
            }




            
        </div>
    );
};

export default Register;
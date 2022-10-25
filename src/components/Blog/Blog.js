import React from 'react';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import './Blog.css'

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}


const Blog = () => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (

        <div className='bg-stone-200'>
            <div className='mx-12 h-full my-16'>
                <Fragment>
                    <Accordion className='border'  open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className='text-4xl mb-2' onClick={() => handleOpen(1)}>
                      
                        </AccordionHeader>
                        <AccordionBody>
                            Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.

                            In authentication process, the identity of users are checked for providing the access to the system. In this process, users or persons are verified. It is done before the authorization process. It needs usually user’s login details. Authentication determines whether the person is user or not.

                            While in authorization process, person’s or user’s authorities are checked for accessing the resources. In this process, users or persons are validated. This process is done after the authentication process. It needs user’s privilege or security levels. It determines What permission do user have?
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className='text-3xl mb-2' onClick={() => handleOpen(2)}>
                        Why are you using firebase? What other options do you have to implement authentication?
                        </AccordionHeader>
                        <AccordionBody>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </div>

    );
};

export default Blog;
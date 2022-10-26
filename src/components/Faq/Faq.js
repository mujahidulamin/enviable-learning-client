import React from 'react';

const Faq = () => {
    return (
        <div>
            <p className='text-center text-4xl my-6 font-bold'>Frequently Asked Question</p>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-8 my-6">
                <div className="collapse-title text-xl font-medium">
                    How long does each course take?
                </div>
                <div className="collapse-content">
                    <p>You can do the courses at your own pace, but we recommend trying to finish in 6 weeks in our experience, having a deadline makes it more likely students will finish the course.
                        We expect it will take approximately 4-8 hours to finish each part of the course. Some exercises require a lot of thinking, drawing on paper and going back to the theory part so they can take up to 45 minutes. You will also find lots of links in the course and looking at these as well will add to the time needed.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-8 my-6">
                <div className="collapse-title text-xl font-medium">
                    How much do courses cost?
                </div>
                <div className="collapse-content">
                    <p>You should visit our website. In the course section you will see which course how much cost. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-8 my-6">
                <div className="collapse-title text-xl font-medium">
                    What types of assignments do you give?
                </div>
                <div className="collapse-content">
                    <p>We give different types of assignment. After enrollment  you will know everything.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-8 my-6">
                <div className="collapse-title text-xl font-medium">
                    Can I learn at my own pace?
                </div>
                <div className="collapse-content">
                    <p>You can learn in your own time and schedule. You don't need to complete the same assignments or learn at the same time as others. You can proceed from one topic or segment to the next at your speed.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-8 my-6">
                <div className="collapse-title text-xl font-medium">
                    Does online learning really work?
                </div>
                <div className="collapse-content">
                    <p>Online learning is not only more effective for students, but it is also better for the environment</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
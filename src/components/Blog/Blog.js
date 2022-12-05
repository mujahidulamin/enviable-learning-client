import React from 'react';

const Blog = () => {
    return (

        //blog
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8 my-8">
                <div className="collapse-title text-xl font-medium">
                    What is cors?
                </div>
                <div className="collapse-content">
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8 my-8">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of Android, iOS, or web and even some products. But at present, as a web develop learner I am using firebase mainly for my website authentication. Besides that, I'm also using the deploy service from google firebase.

                        There are so many options to implement authentication. I'm mentioning some popular authentication system that developers are using all over the world.

                        1. Auth0 is the go-to user authentication platform and a Firebase alternative for good reasons.

                        2. Okta is a flagbearer of password-less security. However, you can ask for the strongest passwords with Okta as well.

                        3. STYTCH is a staunch supporter of password-less authentication. It is focused on improving user experience and cutting developer headaches by doing just that.

                        4. Ory brings complete user experience control with its headless user authentication management.

                        5. Keycloak is an open-source user identity and access management platform.

                        6. PingIdentity is shaped as an intelligent central authentication module for all your cloud, in-house, and SaaS implementations.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8 my-8">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8 my-8">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                        Node.js basically works on two concept

                        1. Asynchronous
                        2. Non-blocking I/O

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
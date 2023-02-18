import React from 'react';

const About = () => {
    return (
        <div className='mx-5'>
            <h2 className="text-2xl text-center font-semibold">About the author</h2>
            <div className="author lg:w-1/2 mx-auto rounded-lg border border-accent mt-3 p-4 relative">
                <button className="btn btn-accent btn-sm text-white absolute top-2 right-2">Edit</button>
                <div className="flex flex-col gap-3">
                    <div className="name flex gap-3">
                        <span className="text-xl">Name: </span>
                        <h3 className="text-xl font-semibold text-accent">Rakib-Un-Nabi</h3>
                    </div>
                    <div className="name flex gap-3">
                        <span className="text-xl">Email: </span>
                        <h3 className="text-xl font-semibold text-accent">rakibnabi97@gmail.com</h3>
                    </div>
                    <div className="name flex gap-3">
                        <span className="text-xl">University: </span>
                        <h3 className="text-xl font-semibold text-accent">National University of Bangladesh</h3>
                    </div>
                    <div className="name flex gap-3">
                        <span className="text-xl">Address: </span>
                        <h3 className="text-xl font-semibold text-accent">45/1A, Kaijury Villa, Jhiltuly, Faridpur-7800</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
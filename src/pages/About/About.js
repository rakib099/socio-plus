import React from 'react';
import {useQuery} from '@tanstack/react-query';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';

const About = () => {
    const {data: aboutInfo, isLoading, refetch} = useQuery({
        queryKey: ['aboutInfo'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/infos/63f0ade342350b5e723a5db3');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner />
    }

    const {name, uni, email, address} = aboutInfo;

    return (
        <div className='mx-5'>
            <h2 className="text-2xl text-center font-semibold">About the author</h2>
            <div className="author lg:w-1/2 mx-auto rounded-lg border border-accent mt-3 p-4 relative">
                <label htmlFor="edit-modal" className="btn btn-accent btn-sm text-white absolute top-2 right-2">Edit</label>
                <div className="flex flex-col gap-3">
                    <div className="name flex gap-3">
                        <span className="text-xl">Name: </span>
                        <h3 className="text-xl font-semibold text-accent">{name}</h3>
                    </div>
                    <div className="name flex gap-3">
                        <span className="text-xl">Email: </span>
                        <h3 className="text-xl font-semibold text-accent">{email}</h3>
                    </div>
                    <div className="name flex gap-3">
                        <span className="text-xl">University: </span>
                        <h3 className="text-xl font-semibold text-accent">{uni}</h3>
                    </div>
                    <div className="name flex gap-3">
                        <span className="text-xl">Address: </span>
                        <h3 className="text-xl font-semibold text-accent">{address}</h3>
                    </div>
                </div>
            </div>
            <Modal aboutInfo={aboutInfo} />
        </div>
    );
};

export default About;
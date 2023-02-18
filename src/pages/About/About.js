import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(true);
    const { data: aboutInfo, isLoading, refetch } = useQuery({
        queryKey: ['aboutInfo'],
        queryFn: async () => {
            const res = await fetch('https://socio-plus-server.vercel.app/infos/63f0ade342350b5e723a5db3');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner />
    }

    const { name, uni, email, address } = aboutInfo;

    const handleButtonEdit = () => {
        if (!user?.uid) {
            return toast.error('Please login to edit!');
        }
        else {
            setOpenModal(true);
        }
    }

    return (
        <div className='mx-5'>
            <h2 className="text-2xl text-center font-semibold">About the author</h2>
            <div className="author lg:w-1/2 mx-auto rounded-lg border border-accent mt-3 p-4 relative">
                <label onClick={handleButtonEdit} htmlFor="edit-modal" className="btn btn-accent btn-sm text-white absolute top-2 right-2">Edit</label>
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
            {
                !!openModal && user?.uid &&
                <Modal
                    aboutInfo={aboutInfo}
                    refetch={refetch}
                    setOpenModal={setOpenModal}
                />
            }
        </div>
    );
};

export default About;
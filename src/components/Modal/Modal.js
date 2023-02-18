import React from 'react';
import { useForm } from 'react-hook-form';
import {toast} from 'react-hot-toast';

const Modal = ({ aboutInfo, refetch, setOpenModal }) => {
    const { name, address, email, uni } = aboutInfo;
    const {register, handleSubmit} = useForm();

    const handleInfoUpdate = (data, e) => {
        fetch('https://socio-plus-server.vercel.app/infos/63f0ade342350b5e723a5db3', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                setOpenModal(false);
                toast.success('Info successfully updated!');
                refetch();
            }
            else {
                setOpenModal(false);
                toast.success('Nothing changed!');
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Info</h3>
                    <form onSubmit={handleSubmit(handleInfoUpdate)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register('name')} placeholder="Type here" defaultValue={name} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register('email')} placeholder="Type here" defaultValue={email} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">University</span>
                            </label>
                            <input type="text" {...register('uni')} placeholder="Type here" defaultValue={uni} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" {...register('address')} placeholder="Type here" defaultValue={address} className="input input-bordered w-full" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="edit-modal" className="btn bg-red-300 hover:bg-red-400 border-none text-white">Cancel</label>
                            <button type='submit' className="btn btn-accent text-white">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;
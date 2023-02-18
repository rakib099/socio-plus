import React from 'react';

const Modal = ({aboutInfo}) => {
    const {name, address, email, uni} = aboutInfo;

    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Info</h3>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" defaultValue={email} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input type="text" placeholder="Type here" defaultValue={uni} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Type here" defaultValue={address} className="input input-bordered w-full" />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="edit-modal" className="btn btn-accent text-white">Save</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
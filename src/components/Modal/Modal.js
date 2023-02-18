import React from 'react';

const Modal = () => {
    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Info</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" defaultValue='Rakib-Un-Nabi' className="input input-bordered w-full" />
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
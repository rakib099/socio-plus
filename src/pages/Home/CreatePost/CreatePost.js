import React, { useState } from 'react';
import { TfiGallery } from 'react-icons/tfi';

const CreatePost = () => {
    const [file, setFile] = useState();

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <section className='my-5 lg:w-1/2 lg:mx-auto'>
            <form>
                <textarea className="textarea textarea-accent textarea-lg w-full min-w-xs" placeholder="What's on your mind?"></textarea>
                <div className="flex justify-between relative">
                    {
                        !file &&
                        <div className='relative flex items-center gap-2'>
                            <TfiGallery className='text-xl' />
                            <span className='font-semibold text-gray-400'>Add Photo</span>
                            <input onChange={handleChange} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs absolute left-0 top-0 opacity-0" />
                        </div>
                    }
                    {
                        !!file &&
                        <div className="w-32 h-20">
                            <img src={file} alt='' className='w-full h-full' />
                        </div>
                    }
                    <input type="submit" value="Post" className='btn btn-accent text-white' />
                </div>
            </form>
        </section>
    );
};

export default CreatePost;
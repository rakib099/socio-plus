import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TfiGallery } from 'react-icons/tfi';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState();
    const [createPostLoading, setCreatePostLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const currentTimeInMS = new Date().getTime();
    console.log(currentTimeInMS);


    const handleCreatePost = (data, e) => {
        const text = data.text;
        const image = e.target.photo.files[0];
        setCreatePostLoading(true);

        // uploading image to imgbb
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const post = {
                        user: user.displayName,
                        text,
                        img: imgData.data.url,
                        time: currentTimeInMS,
                        likes: 0
                    }
                    savePostToDB(post, e);
                }
            })
            .catch(err => console.error(err));
    }

    const savePostToDB = (post, e) => {
        fetch(`http://localhost:5000/posts/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCreatePostLoading(false);
                    toast.success('Posted Successfully!');
                    e.target.reset();
                    navigate('/media');
                }
            })
            .catch(err => console.error(err));
    }

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <section className='my-5 lg:w-1/2 lg:mx-auto'>
            <form onSubmit={handleSubmit(handleCreatePost)}>
                <textarea {...register('text', {
                    required: 'Please write something to post!'
                })} name='text' className="textarea textarea-accent textarea-lg w-full min-w-xs" placeholder="What's on your mind?"></textarea>
                {errors.text && <p className='text-error' role="alert">{errors.text?.message}</p>}
                <div className="flex justify-between relative">
                    <div className="upload-image flex gap-2">
                        <div className='relative flex items-center gap-2'>
                            <TfiGallery className='text-xl' />
                            <span className='font-semibold text-gray-400'>Add Photo</span>
                            <input name='photo' onChange={handleChange} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs absolute left-0 top-0 opacity-0" />
                        </div>
                        {
                            !!file &&
                            <div className="w-32 h-20">
                                <img src={file} alt='' className='w-full h-full rounded' />
                            </div>
                        }
                    </div>
                    {
                        !!createPostLoading ?
                            <input type="submit" value="Post" className='btn btn-accent loading text-white' />
                            :
                            <input type="submit" value="Post" className='btn btn-accent text-white' />
                    }
                </div>
            </form>
        </section>
    );
};

export default CreatePost;
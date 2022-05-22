import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch(`https://boiling-plains-67002.herokuapp.com/service`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    /**
     (Three) 3 ways to storage images
     * 1. third party storage // free open public storage is ok only for practice Project
     * 2. Yourt own storage in your own server(file system)
     * 3. Database: Mongodb, sql etc
     * 
     * File Validation for React Hook form by 'YUP' .....
     *  */

    const imageStorageKey = 'd0981010ef04f42279e772d8d2c72435';
    const onSubmit = async data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`//এটা হলো imgbb এর api link.
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imgbb', result);
                if (result.success) {
                    const img = result.data.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speacialty: data.speacialty,
                        img: img,
                    }
                    //send to database
                    fetch('https://boiling-plains-67002.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('Doctor:', inserted);
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            } else {
                                toast.error('Failed to add the doctor')
                            }
                        })
                }
            })
    }


    return (
        <div>
            <h2 className="text-3xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"

                        {...register("email", {

                            required: {
                                value: true,
                                message: 'Email is Required'
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialization</span>
                    </label>

                    <select {...register('specialty')} className="select select-bordered mb-5 w-full max-w-xs">
                        {
                            services?.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Doctors Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value='Add a Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;
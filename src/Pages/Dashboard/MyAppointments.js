import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    //এর মাধ্যমে তথ্য সিকিউরিটি বাড়ানোর জন্য হেডারের মাধ্যমে টোকেন পাঠানো হচ্ছে। এবং অনাকাংখিত ইউজার হলে তার টোকেন খেয়ে লগআউট করে দিবে।
    useEffect(() => {
        if (user) {
            fetch(`https://boiling-plains-67002.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        Navigate('/')
                    }
                    return res.json()
                })

                .then(data => {
                    setAppointments(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                                    </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;
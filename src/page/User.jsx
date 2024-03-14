import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const User = () => {
    const {id} = useParams();
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res)
            setUser(res.data);
            setLoading(false);
        })
    }, [id])
    return (
        <div className='userWrap'>
            <h2>user</h2>
            {
                loading ? (<div>loding...</div>) : (
                <div className='userDetail'>
                    <div>이름:{user.name}</div>
                    <div>이메일:{user.email}</div>
                    <div>전화번호:{user.phone}</div>
                    <div>웹사이트:{user.website}</div>
                </div>
                )
            }
        </div>
    );
};

export default User;
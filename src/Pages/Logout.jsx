import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
      axios
      .get(
        'https://holar.tech/api/auth/logout',
        { withCredentials: true }
      )
      .then((res) => {
        const data = res.data;
        console.log(res)
        logout(data.user);
        navigate('/')
      }).catch((err) => {
        console.log('Error:', err);
      });
      }, [logout, navigate]);

    return (
        <div>Loging out ...</div>
    )
}

export default Logout
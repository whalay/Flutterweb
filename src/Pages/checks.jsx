import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios'
import Cookies from 'js-cookie';



const Checks = () => {
  const { login } = useContext(AuthContext);

    useEffect(() => {
        axios
          .get('https://holar.tech/api/auth/auth_status', { withCredentials: true })
          .then((res) => {
            console.log(res)
            const data = res.data;
            if (data.authenticated) {
              login(data.user);
              console.log('login')
            }
          })
          .catch((err) => {
            console.log('Error:', err);
          });
      }, []);
};

export default Checks;

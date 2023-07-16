import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [userStores, setUserStore] = useState([]);
  const [hasStores, setHasStore] = useState(false);

  useEffect(() => {
    axios
      .get('https://holar.tech/api/v1/mystores', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setUserStore(response.data);
          setHasStore(true);
        } else if (response.status === 404) {
          setHasStore(false);
        } else {
          throw new Error('Failed to fetch user store');
        }
      })
      .catch((error) => {
        console.error('Error fetching user store:', error);
      });
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user ? user.username : 'Guest'}!</h1>
      {hasStores && userStores.length > 0 ? (
        userStores.map((store) => {
          const { id, store_name, location } = store;
          return (
            <div key={id} className="bg-gray-100 p-4 rounded-md mb-4">
              <h2 className="text-2xl font-bold mb-2">Your Store: {store_name}</h2>
              <p className="text-gray-600">Location: {location}</p>
              <Link to={`/stores/${id}/product`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Create Product
                </button>
              </Link>
              <Link to={`/stores/${id}/myproduct`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to my Products
                </button>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="mb-4">
          <p>You don't have any stores.</p>
          <Link to="/create-store">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Store
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

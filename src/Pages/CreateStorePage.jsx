import React, { useState } from 'react';

const CreateStorePage = () => {
  const [storeName, setStoreName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform store creation logic here
    axios
      .post(`https://holar.tech/api/v1/stores`, 
      {store_name: storeName,
        location: location}, 
      { withCredentials: true, 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        const data = res.data;
        console.log(res);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log('Error:', err);
      });
    console.log('Store Name:', storeName);
    console.log('Location:', location);
    // Reset form fields
    setStoreName('');
    setLocation('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Store</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storeName">
            Store Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="storeName"
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStorePage;

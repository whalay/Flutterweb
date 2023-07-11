import React from 'react'
import { Link } from 'react-router-dom';
import Famasi from '../assets/Famasi.png';
import girl from "../assets/girl-on-hat.webp";
import creator from "../assets/creator.webp"
import chair from '../assets/chair-lamp.webp';

const Homepage = () => {
  return (
    <div className=''>
      <section className='flex  flex-col-reverse md:flex-row items-center space-between gap-10'>
        <div className=' flex flex-col basis-1/2 gap-12'>
          <h1 className='text-5xl md:text-6xl font-bold'>Shop it Love it</h1>
          <p className='text-2xl'>Sell , buy, display everything
            products online and equally grow your business/brand</p>
          <div>
            <Link to="register">
              <button className='bg-blue-500 p-2 text-white text-2xl m-2'>Create a free Account </button>
            </Link>
            <Link to="products">
              <button className='bg-blue-500 p-2 text-white text-2xl m-2'>Buy Now</button>
            </Link>
          </div>
        </div>
        <div className='basis-1/2'>
          <img src={Famasi} alt="" />
        </div>

      </section>
      <div className='h-screen flex text-center items-center'>
        <p className='font-bold text-4xl md:text-6xl'>Get listed on Africa's fastest growing marketplace - flutterstore Market</p>
      </div>
      <div className='flex flex-col md:flex-row items-center space-between gap-5'>
        <div className='basis-1/2'>
          <p className='text-2xl md:text-4xl '>Whether you sell physical products like furniture</p>
        </div>
        <div className='basis-1/2'>
          <img src={chair} alt="" className='' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse items-center space-between gap-5 '>
        <div className='basis-1/2'>
          <p className='text-2xl md:text-4xl'>Or digital products like ebooks and art...</p>
        </div>
        <div className='basis-1/2 flex flex-col '>
          <img src={girl} alt="" />
          <img src={creator} alt="" />
        </div>
      </div>
      <div className='h-screen flex text-center items-center'>
        <p className='font-bold text-4xl'>Your Store is listed on Flutterstore Market - where millions of people shop every day.
          Create your Store, get listed on flutterstore Market and start selling!</p>
      </div>
      <div className='absolute left-0 right-0 h-screen bg-black text-white p-5 flex flex-col text-center items-center space-y-10'>
        <h1 className='font-bold text-4xl md:text-6xl '>What we offer</h1>
        <p className='text-xl md:text-3xl'>We provide you with all the commerce tools you need in a single package</p>
        <Link to="register">
          <button className='bg-gray-200 p-2 text-black text-xl m-2 border rounded-2xl'>Create a free Account </button>
        </Link>

        <ul className='text-xl space-y-3 '>
          <li>Sell multiple products & variants</li>
          <li>Manage your store on mobile</li>
          <li>Low stock notification</li>
          <li>Charge delivery fee</li>
        </ul>
      </div>
    </div>
  )
}

export default Homepage
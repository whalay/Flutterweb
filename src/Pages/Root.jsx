import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Category from '../Components/Category';



function RootLayout() {
  // const navigation = useNavigation();4

  return (
    <div className='md:px-20'>
      <Navbar />
      
      <main className='px-10'>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

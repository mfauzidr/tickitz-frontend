import { Outlet, useLocation } from 'react-router-dom';
import NavigationBarProfile from '../components/HeaderProfile'
import Profile from './Profile';


function ProfileIndex() {
  const location = useLocation();

  return (
    <div className='container-fluid h-full w-full'>
      <NavigationBarProfile />
      {location.pathname === '/profile' ? <Profile /> : <Outlet />}
    </div>
  );
}

export default ProfileIndex;

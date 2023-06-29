import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout';

const Header = () => {
const [userId, setUserId] = useState('');

const { user } = useAuthContext();
const { logout } = useLogout();

const [navOpen, setNavOpen] = useState(false);
const location = useLocation();

useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.user;
    setUserId(userId);
  }, []);
    
    const logoutHandler = () => {
        logout();
    }
        
    const toggleNav = () => {
        setNavOpen(prev => !prev);
    }

    useEffect(() => {
        setNavOpen(false); // close nav on page load
    }, [location])

    return (
        <header className='relative flex flex-col gap-3 max-h-screen'>
            <div className='flex items-center py-5 px-5 bg-blue'>
                <Link to='/'>
                    <h1 className='text-2xl lg:text-4xl tracking-wider font-bold text-purple-500'>TechStack Quiz</h1>
                </Link>
                <div className='ml-auto'>
                <label className={classes.burger} htmlFor='burger'>
                    <input type="checkbox" id='burger' checked={navOpen} onChange={toggleNav} />
                    <span className='bg-purple-500'></span>
                    <span className='bg-purple-500'></span>
                    <span className='bg-purple-500'></span>
                    </label>
                </div>
            </div>
            { navOpen && (
            <nav className={`${classes.nav} flex px-5 h-screen w-full absolute top-20 z-50`}>
                <div className='flex flex-col py-10 items-start ms-5 gap-5 text-2xl tracking-widest font-bold'>
                    <Link to='/'>Home</Link>
                    <Link to='/quizzes'>Quizzes</Link>
                    <Link to={`/dashboard/${userId}`}>DashBoard</Link>
                    { !user && (
                        <div className='flex flex-col gap-5 tracking-widest'>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                    { user && (
                    <Link onClick={logoutHandler} to="/">Logout</Link>
                    )}
                </div>
            </nav>
            )}
        </header>
    )
}

export default Header;
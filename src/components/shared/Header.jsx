import React, { useContext, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { BsFillCartPlusFill, BsFillSunFill } from 'react-icons/bs';
import { BiLogOut, BiLogIn, BiSolidMoon } from 'react-icons/bi';
import { AuthContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import img_one from '../../images/logo1.png';


const Header = ({setDarkMode}) => {

    const darkModeButtonState = localStorage.getItem('darkModeButton')  
    const { user, logOut } = useContext(AuthContext); 
    const [menuOpen, setMenuOpen] = useState(false);
    const [onButton, setOnbutton] = useState(darkModeButtonState);

    const handleDarkMode = (value) => {
        setOnbutton(value);
        setDarkMode(value);
        localStorage.setItem('darkModeState', value);
        localStorage.setItem('darkModeButton', value);
    }
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        logOut();
    }

    return (
        <nav className="text-blue-800 font-semibold lg:mx-10 p-4 md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div className='w-72 flex gap-2'>
                    <img src={img_one} alt="" />

                    {/* here we implement the dark mode and button on of functionality  */}
                    
                    {
                        onButton ? <button onClick={() => handleDarkMode(false)}><span className='text-2xl text-white'><BsFillSunFill /></span></button> 
                            : <button onClick={() => handleDarkMode(true)}><span className='text-2xl bg-blue-700 '><BiSolidMoon /></span></button>
                    
                    }
                </div>
                
                <button
                    className="md:hidden text-green-900 text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {
                        menuOpen ? <RxCross1 /> : <FiMenu />
                    }
                </button>
            </div>
            <div
                className={`${menuOpen ? 'block' : 'hidden'
                    } md:flex md:items-center mt-4 md:mt-0`}
            >
                <Link to='/' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    Home
                </Link>
                {
                    user?.uid && <Link to='/write_a_blog' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                        Write a Blog
                    </Link>
                }
                <Link to='/blogs' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    Blogs
                </Link>
                {
                    user?.uid && <Link to='/profile' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                        Profile
                    </Link>
                }
                {
                    user?.uid ? <Link onClick={handleLogOut} className="hover:text-green-800 flex md:justify-center gap-2 items-center mt-4 md:mt-0 md:ml-6">
                        Log Out<span className='text-xl'><BiLogOut /></span>
                    </Link> 
                        : <Link to='/login' className="hover:text-green-800 flex md:justify-center gap-2 items-center mt-4 md:mt-0 md:ml-6">
                        Login<span className='text-xl'><BiLogIn /></span>
                    </Link>
                }
                
                <Link className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    <BsFillCartPlusFill/>
                </Link>
            </div>
        </nav>
    );
};

export default Header;

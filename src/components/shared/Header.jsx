import React, { useContext, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { AuthContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import img_one from '../../images/logo1.png';

const Header = () => {
    
    const { user } = useContext(AuthContext); 
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="text-blue-800 font-semibold lg:mx-10 p-4 md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div className='w-72'>
                    <img src={img_one} alt="" />
                </div>
                <button
                    className="md:hidden text-green-900 text-xl focus:outline-none"
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
                <Link href="#" className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    How It Works
                </Link>
                <Link to='/blogs' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    Blogs
                </Link>
                {
                    !user && <Link to='/profile' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                        Profile
                    </Link>
                }
                {
                    user ? <Link  className="hover:text-green-800 text-xl block mt-4 md:inline-block md:mt-0 md:ml-6">
                        <BiLogOut />
                    </Link> 
                        : <Link className="hover:text-green-800 text-xl block mt-4 md:inline-block md:mt-0 md:ml-6">
                        <BiLogIn />
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

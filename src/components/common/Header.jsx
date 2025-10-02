import Logo from '../../assets/images/logo.png'
import HomeIcon from '../../assets/icons/home.svg'
import Notification from '../../assets/icons/notification.svg'
import Avatar from '../../assets/images/avatars/avatar3.png'

import { Link } from 'react-router-dom';
import Logout from '../auth/Logout';

import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const { auth } = useAuth();

    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                <Link to="/">
                    <img className="max-w-[70px] rounded-full lg:max-w-[90px]" src={Logo} />
                </Link>

                <div className="flex items-center space-x-4">
                    <Link to="/" className="btn-primary">
                        <img src={HomeIcon} alt="Home" />
                        Home
                    </Link>
                    <button className="icon-btn">
                        <img src={Notification} alt="Notification" />
                    </button>

                    <Logout />

                    <Link
                        to="/me"
                        className="flex-center !ml-8 gap-3">
                        <span className="text-lg font-medium lg:text-xl">{auth?.user?.firstName}</span>
                        <img className="max-h-[40px] max-w-[40px] lg:max-h-[48px] lg:max-w-[48px]"
                            src={Avatar} alt="profile pic" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
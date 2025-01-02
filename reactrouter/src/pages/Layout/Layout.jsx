import { Link, Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center space-x-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/detail">Detail</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
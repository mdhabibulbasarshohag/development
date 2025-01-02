import { Link, Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div>
            <header>
                <Link className="mx-5" to="/">Home</Link>
                <Link className="mx-5" to="/users">Users</Link>
                <Link className="mx-5" to="/countries">Countries</Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;
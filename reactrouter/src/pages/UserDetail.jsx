import { useLocation } from "react-router";

const UserDetail = () => {
    const location = useLocation();
    const { user } = location.state;

    return (
        <div className="mt-8 p-4 bg-gray-100">
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
        </div>
    );
};

export default UserDetail;

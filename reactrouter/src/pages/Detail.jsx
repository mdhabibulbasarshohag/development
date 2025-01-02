import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; // Import useNavigate

const Detail = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, []);

    const handleDetailClick = (user) => {
        navigate(`/user/${user.id}`, { state: { user } }); // Navigate to user detail page
    };

    return (
        <div>
            <h1>detail page {users.length}</h1>
            <div className="grid grid-cols-4 gap-4">
                {users.map(user => (
                    <div key={user.id} className="bg-gray-200 p-4">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <button onClick={() => handleDetailClick(user)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Detail</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detail;
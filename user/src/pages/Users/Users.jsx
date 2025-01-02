import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../components/getData/getUsers/getUsers";


const Users = () => {

    const { data: userData, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    } else if (error) {
        return <div className="text-center">Error: {error.message}</div>;
    } else {
        console.log(userData);
    }



    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl">Users {userData.length}</h1>
            <div className="grid grid-cols-3">
                {userData.map((user) => (
                    <div key={user.id} className="m-4">
                        <img src="https://via.placeholder.com/150" alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
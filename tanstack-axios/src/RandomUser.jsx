import { useQuery } from "@tanstack/react-query";
import getRandomUser from "./getRandomUser/getRandomUser";

const RandomUser = () => {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["randomUser"],
        queryFn: getRandomUser,
        enabled: true // Enable the query to fetch data on mount
    });

    if (isLoading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error.message}</div>;
    }

    if (!data) {
        return <div className="text-center text-gray-500">No user data available</div>;
    }

    const { name, picture, email } = data;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Random User: {`${name.first} ${name.last}`}
                </h1>
                <img
                    src={picture.large}
                    alt={`Picture of ${name.first} ${name.last}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <p className="text-center text-gray-700 mb-4">Email: {email}</p>
                <button
                    onClick={() => refetch()}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Get New User
                </button>
            </div>
        </div>
    );
};

export default RandomUser;

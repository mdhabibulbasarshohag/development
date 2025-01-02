
import { useQuery } from '@tanstack/react-query';

// Function to fetch the country data
const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }
    return response.json();
};

const CountryList = () => {
    // Use TanStack Query to fetch data with the object format
    const { data, error, isLoading } = useQuery({
        queryKey: ['countries'], // query key should be an array still, but passed inside an object
        queryFn: fetchCountries,  // the function that fetches the data
    });

    console.log(data);

    if (isLoading) return <div className="text-center text-xl">Loading...</div>;
    if (error instanceof Error) return <div className="text-center text-xl text-red-600">Error: {error.message}</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-6">Countries</h1>
            <ul className="space-y-4">
                {data.map((country) => (
                    <li
                        key={country.cca3}
                        className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition"
                    >
                        <h2 className="text-2xl font-bold">{country.name.common}</h2>
                        <p className="text-lg mt-2">
                            <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
                        </p>
                        <p className="text-lg">
                            <strong>Region:</strong> {country.region}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;

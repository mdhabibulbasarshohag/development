import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,  // Duration of animations
            easing: 'ease-in-out', // Easing function
            once: true, // Trigger animation only once
        });

        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) {
        return <div className="text-center text-xl text-gray-700">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-500">Error: {error}</div>;
    }

    // Pagination Logic
    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Total pages
    const totalPages = Math.ceil(countries.length / itemsPerPage);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6" data-aos="fade-up-left">
                List of Countries
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentCountries.map((country, index) => (
                    <li
                        key={country.cca3}
                        className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-300"
                        data-aos="fade-up-left"
                        data-aos-delay={`${index * 100}`} // Adding a delay for each item
                    >
                        <div className="flex items-center space-x-4">
                            {/* Flag Image */}
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <img
                                    src={country.flags.svg} // Assuming the flag is in SVG format
                                    alt={`Flag of ${country.name.common}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold text-gray-800">{country.name.common}</h2>
                                <p className="text-gray-600">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                                <p className="text-gray-600">Region: {country.region}</p>
                                <p className="text-gray-600">Languages: {Object.values(country.languages || {}).join(', ')}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mr-2"
                >
                    Previous
                </button>
                <span className="text-lg font-medium text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg ml-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CountryList;

import { getCountries } from "../../components/getData/getCountries/getCountries";
import { useQuery } from '@tanstack/react-query';


const Countries = () => {
    const { data: countries, isLoading, error } = useQuery({
        queryKey: ['countries'],
        queryFn: getCountries
    })

    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Error: {error.message}</div>
    } else if (!countries) {
        return <div>{countries ? `${countries.length}` : 'No countries found'} </div>
    } else {
        console.log(countries);
    } if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!countries || countries.length === 0) {
        return <div>No countries found</div>;
    }

    console.log(countries);


    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold text-blue-500">Countries {countries.length}</h1>
            <div className="grid grid-cols-3">
                {countries.map((country) => <div key={country.cca3} className="border border-gray-300 m-2 p-2">
                    <div className="text-center">
                        <img className="w-full h-[200px]" src={country.flags.png} alt={country.name.common} />
                        <h2>{country.name.common}</h2>
                        <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                        <p>Region: {country.region}</p>
                        <p>Subregion: {country.subregion}</p>
                        <p>Population: {country.population}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Countries;
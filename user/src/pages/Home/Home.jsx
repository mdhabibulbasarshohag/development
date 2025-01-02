import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../components/getData/getCountries/getCountries";


const Home = () => {
    const { data: countries, isLoading, error } = useQuery({
        queryKey: ['countries'],
        queryFn: getCountries
    });

    if (isLoading) return <div className="text-center text-3xl text-blue-500">Loading...</div>;

    if (error) return (
        <div className="text-center text-3xl text-red-500">
            Error: {error.message || 'Something went wrong!'}
        </div>
    );

    if (!countries || countries.length === 0) return (
        <div className="text-center text-3xl text-gray-500">
            No countries found.
        </div>
    );

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-700">Explore Countries</h1>

            {/* First Swiper */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="3"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 5,
                    depth: 100,
                    modifier: 5,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                {countries.map((country) => (
                    <SwiperSlide key={country.cca3} className="flex justify-center items-center">
                        <div className="w-full h-[400px] bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center flex flex-col justify-center items-center rounded-lg p-6 transform transition-transform hover:scale-105 shadow-xl">
                            <img
                                src={country.flags.svg || country.flags.png}
                                alt={`${country.name.common} flag`}
                                className="w-36 h-24 mb-6 object-contain rounded-md shadow-2xl"
                            />
                            <span className="text-2xl font-semibold mb-2">{country.name.common}</span>
                            <span className="text-sm font-light">
                                {country.region} | Population: {country.population.toLocaleString()}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Second Swiper (with EffectCards) */}
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mt-10"
            >
                {countries.map((country) => (
                    <SwiperSlide key={country.cca3} className="flex justify-center items-center">
                        <div className="w-full h-[400px] bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center flex flex-col justify-center items-center rounded-lg p-6 transform transition-transform hover:scale-105 shadow-xl">
                            <img
                                src={country.flags.svg || country.flags.png}
                                alt={`${country.name.common} flag`}
                                className="w-36 h-24 mb-6 object-contain rounded-md shadow-2xl"
                            />
                            <span className="text-2xl font-semibold mb-2">{country.name.common}</span>
                            <span className="text-sm font-light">
                                {country.region} | Population: {country.population.toLocaleString()}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Home;



const getIATACode = async (cityName: string, token: string) => {
    console.log(cityName?.toUpperCase())
    const url = `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${cityName?.toUpperCase()}`;
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json();
    return data.data?.[0]?.iataCode || null;
};

export default getIATACode;
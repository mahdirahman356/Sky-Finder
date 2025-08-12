import config from "@/config";

const getAccessToken = async () => {
  
    const response = await fetch(config.tokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: config.amadeusKey,
            client_secret: config.amadeusSecret
        })
    })

    const data = await response.json()
    return data.access_token;
};

export default getAccessToken;
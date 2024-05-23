const API = "https://api.balldontlie.io/v1";

export const get = (path) => {
   

    return fetch (API + path, {
        headers: {
            "Authorization": "5f48238b-0301-4759-bdfa-855cca2f0e2d",
        }
    }).then((results) => results.json()); 
}
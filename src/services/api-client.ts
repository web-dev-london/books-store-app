import axios from "axios";

export default axios.create({
    baseURL: 'https://all-books-api.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'book-info-hub.p.rapidapi.com',
        'x-rapidapi-key': 'bdd27ebb54msh6b66e41b93bab24p160efajsn3a77e2e78836'
    }
});

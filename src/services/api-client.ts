import axios from "axios";


export default axios.create({
    baseURL: 'https://book-information-library.p.rapidapi.com/api/books',
    headers: {
        'x-rapidapi-host': 'book-information-library.p.rapidapi.com',
        'x-rapidapi-key': 'bdd27ebb54msh6b66e41b93bab24p160efajsn3a77e2e78836'
    }
})

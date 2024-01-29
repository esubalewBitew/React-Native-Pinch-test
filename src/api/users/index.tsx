import { USERS_URI } from "../constans";
const fetchUsers$ = () => {
    return USERS_URI.get('/', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default fetchUsers$;
import axios from 'axios';

export const fetchUnits = async () => {
    const config = {
        params: {
            key: process.env.REACT_APP_MAPON_API_KEY
        }
    }

    try {
        return await axios.get('https://mapon.com/api/v1/unit/list.json', config);
    } catch (error) {
        console.error(error);
    }

};
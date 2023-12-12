import axios from 'axios';

export const fetchRoutes = async (fromPeriod: string, toPeriod: string, unitNumber: number) => {
    const config = {
        params: {
            key: process.env.REACT_APP_MAPON_API_KEY,
            from: new Date(fromPeriod).toISOString().split('.')[0] + 'Z',
            till: new Date(toPeriod).toISOString().split('.')[0] + 'Z',
            unit_id: unitNumber,
            include: ['decoded_route']
        }
    };

    try {
        return await axios.get('https://mapon.com/api/v1/route/list.json', config);
    } catch (error) {
        console.error(error);
    }
};
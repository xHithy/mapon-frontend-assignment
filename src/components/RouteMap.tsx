import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapCenter, mapOptions } from "../config/mapConfig";

const RouteMap = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || ''
	});

	return (
		isLoaded ? (
			<GoogleMap
				mapContainerClassName='w-full h-56'
				center={ mapCenter }
				zoom={ 10 }
				options={ mapOptions }
			></GoogleMap>
		) : (
			<div>Loading...</div>
		)
	);
};

export default RouteMap;
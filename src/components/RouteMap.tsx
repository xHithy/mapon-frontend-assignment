import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapCenter, mapOptions } from "../config/mapConfig";
import RouteSelect from "./RouteSelect";
import SingleRouteStats from "./SingleRouteStats";
import { SingleRouteModel } from "../models/RouteModel";
import SingleRoute from "./SingleRoute";
import MultipleRouteStats from "./MultipleRouteStats";

interface RouteMapProps {
	routes: SingleRouteModel[];
}

const RouteMap = ({
	routes
}: RouteMapProps) => {
	// Always select the first route in the list when initializing the map component
	const [selectedRoute, setSelectedRoute] = useState <number> (routes[0].route_id);

	const selectedRouteData = routes.find(route => route.route_id === selectedRoute);

	const { isLoaded, loadError } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || ''
	});

	if (loadError) {
		return <div>Error loading Google Maps API: {loadError.message}</div>;
	}

	if(isLoaded) {
		return (
		<>
			<RouteSelect
				routes={routes}
				selectedRoute={selectedRoute}
				setSelectedRoute={setSelectedRoute}
			/>
			<GoogleMap
				mapContainerClassName='w-full h-56'
				center={mapCenter}
				zoom={10}
				options={mapOptions}
			>
				{selectedRouteData && selectedRoute !== 0 ? (
					<SingleRoute route={selectedRouteData} />
				) : (
					routes.map((route, index) => (
						<SingleRoute key={index} route={route} />
					))
				)}
			</GoogleMap>

			{selectedRouteData &&
				<SingleRouteStats
					selectedRouteData={selectedRouteData}
				/>
			}

			{ selectedRoute === 0 &&
				<MultipleRouteStats routes={routes}/>
			}
		</>
		);
	}

	return <div className='w-full h-56 bg-gray-200 animate-pulse'></div>;
};

export default RouteMap;

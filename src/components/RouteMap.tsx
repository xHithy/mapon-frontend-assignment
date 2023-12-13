import React, { Fragment, useState } from 'react';
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { mapCenter, mapOptions } from "../config/mapConfig";
import CustomMarker from '../assets/marker.png';
import RouteSelect from "./RouteSelect";
import RouteStats from "./RouteStats";
import { SingleRouteModel } from "../models/RouteModel";

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
				{selectedRouteData && (
					<Fragment>
						<Marker
							position={{ lat: selectedRouteData.start.lat, lng: selectedRouteData.start.lng }}
							icon={{
								url: CustomMarker,
								scaledSize: new window.google.maps.Size(32, 34)
							}}
						/>
						<Marker
							position={{ lat: selectedRouteData.end.lat, lng: selectedRouteData.end.lng }}
							icon={{
								url: CustomMarker,
								scaledSize: new window.google.maps.Size(32, 34)
							}}
						/>
						<Polyline
							path={selectedRouteData.decoded_route.points.map((point: { lat: any; lng: any; }) => ({
								lat: point.lat,
								lng: point.lng
							}))}
							options={{ strokeColor: '#3BAFFA', strokeWeight: 4 }}
						/>
					</Fragment>
				)}
			</GoogleMap>
			{ selectedRouteData &&
				<RouteStats
					selectedRouteData={selectedRouteData}
				/>
			}
		</>
		);
	}

	return <div className='w-full h-56 bg-gray-200 animate-pulse'></div>;
};

export default RouteMap;

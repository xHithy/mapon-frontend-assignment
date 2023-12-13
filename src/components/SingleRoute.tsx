import React, { Fragment } from 'react';
import { Marker, Polyline } from "@react-google-maps/api";
import CustomMarker from "../assets/marker.png";
import { SingleRouteModel } from "../models/RouteModel";

interface SingleRouteProps {
    route: SingleRouteModel
}

const SingleRoute = ({
    route
}: SingleRouteProps) => {
    return (
        <Fragment>
            <Marker
                position={{ lat: route.start.lat, lng: route.start.lng }}
                icon={{
                    url: CustomMarker,
                    scaledSize: new window.google.maps.Size(32, 34)
                }}
            />
            <Marker
                position={{ lat: route.end.lat, lng: route.end.lng }}
                icon={{
                    url: CustomMarker,
                    scaledSize: new window.google.maps.Size(32, 34)
                }}
            />
            <Polyline
                path={route.decoded_route.points.map((point: { lat: any; lng: any; }) => ({
                    lat: point.lat,
                    lng: point.lng
                }))}
                options={{ strokeColor: '#3BAFFA', strokeWeight: 4 }}
            />
        </Fragment>
    );
};

export default SingleRoute;
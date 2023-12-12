export interface RouteModel {
    unit_id: number;
    routes: SingleRouteModel[];
}

export interface SingleRouteModel {
    route_id: number;
    start: RouteLocation;
    start_time: string;
    end: RouteLocation;
    end_time: string;
    distance: number;
    decoded_route: {
        points: PolylineLocation[] | []
    }
}

interface RouteLocation {
    time: string;
    lat: number;
    lng: number;
    address: string;
}

interface PolylineLocation {
    gmt: string;
    lat: number;
    lng: number;
    speed: number;
}
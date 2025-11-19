'use client';
import { locationLatLng } from "@/lib/types";
import { useState, useRef, useCallback, useEffect } from "react";
import { Marker as LeafletMarker } from "leaflet";
import { Marker, Popup } from 'react-leaflet';

interface LatLng {
    lat: number;
    lng: number;
}

export default function Draggable({ location, setLocation }: locationLatLng) {
    const [draggable, setDraggable] = useState(false);
    const markerRef = useRef<LeafletMarker | null>(null);

    const toggleDraggable = useCallback(() => {
        setDraggable(prev => !prev);
    }, []);

    const handleDragEnd = useCallback(() => {
        const marker = markerRef.current;
        if (marker) {
            const newPos: LatLng = marker.getLatLng();
            setLocation(newPos); // Update location immediately after drag
        }
    }, [setLocation]);

    const eventHandlers = {
        dragend: handleDragEnd
    };

    useEffect(() => {
        setLocation(location); // Ensure location is synced with prop changes
    }, [location, setLocation]);

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={location} // Use the original location for the marker
            ref={markerRef}
        >
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'نشانگر قابل کشیدن است'
                        : 'برای کشیدن نشانگر اینجا را کلیک کنید'}
                </span>
            </Popup>
        </Marker>
    );
}

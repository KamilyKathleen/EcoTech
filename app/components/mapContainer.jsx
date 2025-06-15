'use client';

import { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function MapContainer({ selectedMaterial, cep }) {
    const [points, setPoints] = useState([]);
    const [sortedPoints, setSortedPoints] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    });

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const res = await fetch('/api/collection');
                const data = await res.json();

                let filtered = selectedMaterial
                    ? data.filter(point => point.discardedMaterials.includes(selectedMaterial))
                    : data;

                if (cep) {
                    const geoRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`);
                    const geoData = await geoRes.json();
                    const userLocation = geoData.results[0]?.geometry.location;

                    if (userLocation) {
                        filtered = filtered.map(point => {
                            const distance = calcDistance(userLocation.lat, userLocation.lng, point.latitude[0], point.longitude[0]);
                            return { ...point, distance };
                        }).sort((a, b) => a.distance - b.distance);

                        setSortedPoints(filtered);
                    } else {
                        console.warn("Coordenadas não encontradas para o CEP informado.");
                        setSortedPoints(filtered);
                    }
                } else {
                    setSortedPoints(filtered);
                }

                setPoints(filtered);
            } catch (error) {
                console.error("Erro ao carregar pontos:", error);
            }
        };

        fetchPoints();
    }, [selectedMaterial, cep]);

    // Haversine Formula
    const calcDistance = (lat1, lon1, lat2, lon2) => {
        const toRad = (value) => value * Math.PI / 180;
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    return (
        <div className="w-full mx-auto space-y-6">
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '500px' }}
                    center={{ lat: -19.458364032871316, lng: -44.24369692274613 }}
                    zoom={13}
                >
                    {points.map((point, index) =>
                        point.latitude.map((lat, i) => (
                            <Marker
                                key={`${index}-${i}`}
                                position={{ lat, lng: point.longitude[i] }}
                                title={point.name}
                            />
                        ))
                    )}
                </GoogleMap>
            )}

            {cep && sortedPoints.length > 0 && (
                <div className="w-full md:w-[50%] mx-auto shadow-xl rounded-lg my-8 py-2 bg-white">
                    <div className="w-[90%] mx-auto my-4">
                        <h3 className="text-2xl font-semibold text-center mb-4">Pontos mais próximos:</h3>
                        <ul className="space-y-2">
                            {sortedPoints.map((point, idx) => (
                                <li key={idx} className="border-b border-gray-300 pb-2">
                                    <p className="font-semibold green-700">{point.name}</p>
                                    {point.distance && (
                                        <p className="text-sm text-gray-600">Distância: {point.distance.toFixed(2)} km</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [markers, setMarkers] = useState([
    { lat: 6.26262, lng: -75.55797, label: 'Laureles' },
    { lat: 6.22477, lng: -75.57438, label: 'Poblado' },
    { lat: 6.15350, lng: -75.61291, label: 'Sabaneta' },
    { lat: 6.20775, lng: -75.58642, label: 'Aranjuez' },
  ]);

  const [mapCenter, setMapCenter] = useState({ lat: 6.2442, lng: -75.5812 }); // Medellín por defecto

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const handleMapClick = (event) => {
    const clickedLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    const distances = markers.map((marker) => ({
      label: marker.label,
      distance: getDistance(clickedLocation, marker),
    }));
    const closestStore = distances.reduce((prev, current) => (prev.distance < current.distance ? prev : current));

    alert(`La tienda más cercana es: ${closestStore.label}`);
  };

  const getDistance = (point1, point2) => {
    // ... (tu función de cálculo de distancia)
  };

  useEffect(() => {
    // Actualiza el centro del mapa cuando cambia la posición del centro
    // Puedes hacerlo aquí o de otras maneras dependiendo de tus necesidades
    // Por ejemplo, si obtienes la ubicación actual del usuario, puedes actualizar mapCenter con esas coordenadas.
  }, [mapCenter]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDxUHLtEqogp4EZ0KND4mrwYJkNK7RWxp4">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter} onClick={handleMapClick}>
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} label={marker.label} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
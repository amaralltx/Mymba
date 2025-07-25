// src/features/occurrence-map/components/OccurrenceMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerImg from '../../assets/icons/marker.png';

// // Corrige problema de ícones no React Leaflet
const customMarker = new L.Icon({
  iconUrl: markerImg,
  iconRetinaUrl: markerImg,
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
  shadowUrl: undefined,
}); 

export default function OccurrenceMap( { data }: { data: any[] } ) {
  // Coordenadas do centro do Brasil
  const centerPosition = [-14.2350, -51.9253];


  const [currentLayer, setCurrentLayer] = React.useState('openstreetmap');
  const toggleLayer = () => {
    setCurrentLayer((prevLayer) =>
      prevLayer === 'openstreetmap' ? 'google' : 'openstreetmap'
    );
  };
  const getLayerUrl = () => {
    return currentLayer === 'openstreetmap'
      ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      : "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}";
  };

  return (
    <div className="w-150 h-150 relative z-0 overflow-hidden rounded-m shadow-lg border-8 border-gray-900">
      <button 
        onClick={toggleLayer} 
        className=" absolute top-2 right-2 z-999 bg-primary text-white px-4 py-2 rounded cursor-pointer"
      >
        {currentLayer === 'openstreetmap' ? 'Google' : 'OpenStreetMap'}
      </button>
      <MapContainer 
        className='map-container'
        center={centerPosition as L.LatLngTuple} 
        zoom={4} 
        minZoom={4}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url={getLayerUrl()}
        />
        {data.map((occurrence) => (
          <Marker key={occurrence.id} position={[occurrence.lat, occurrence.lon] as L.LatLngTuple} icon={customMarker}>
            <Tooltip>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex flex-row justify-center">
                  <img src={occurrence.user_icon ? occurrence.user_icon : "https://static.inaturalist.org/thumbnails/users/medium/missing.png"} alt={occurrence.user} className="w-10 h-10 rounded-full" />
                </div>
                <p className="text-xs max-w-100 truncate">Usuário: {occurrence.user ? occurrence.user : "Anônimo"}</p>
                <p className="text-xs max-w-100 truncate">Local: {occurrence.place_guess ? occurrence.place_guess : "Não informado"}</p>
                <p className="text-xs max-w-100 truncate">Data: {occurrence.observed_on_string ? occurrence.observed_on_string : "Não informado"}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <div className="flex flex-col justify-center gap-2 text-gray-300">
        <p className="text-sm text-center">Total de ocorrências: {data.length}</p>
        <p className="text-xs italic text-center">*Limite de ocorrências: 100</p>
      </div>
    </div>
  );
}
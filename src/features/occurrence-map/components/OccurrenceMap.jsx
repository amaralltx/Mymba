// src/features/occurrence-map/components/OccurrenceMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../../../assets/icons/marker.png';

// // Corrige problema de ícones no React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker,
  iconUrl: marker,
  shadowUrl: null,
  iconSize: [25, 25],
});

function OccurrenceMap( ) {
  // Coordenadas do centro do Brasil
  const centerPosition = [-14.2350, -51.9253];
  // Coordenadas de um ponto específico
  const casa = [-22.966106006333494, -42.995033764755924]

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
        className=" absolute top-2 right-2 z-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {currentLayer === 'openstreetmap' ? 'Google' : 'OpenStreetMap'}
      </button>
      <MapContainer 
        className='map-container'
        center={centerPosition} 
        zoom={4} 
        minZoom={4}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url={getLayerUrl()}
        />
        <Marker position={casa}>
          <Tooltip>Centro</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default OccurrenceMap;
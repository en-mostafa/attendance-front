'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Draggable from './Draggable';
import { locationLatLng } from '@/lib/types';
delete (L.Icon.Default.prototype as any)._getIconUrl;



L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Map({ location, setLocation }: locationLatLng) {

  return (
    <div className='w-100'>
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer center={location} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Draggable location={location} setLocation={setLocation}/>
        </MapContainer>
      </div>
      {/*<a href={`https://neshan.org/maps/@${center.lat},${center.lng},18.2z,0p/routing/car/destination/${center.lat},${center.lng}`}>Take me there!</a>*/}
    </div>
  )
}


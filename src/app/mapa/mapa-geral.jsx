import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useUserLocation from '../../hooks/useUserLocation';
import { useState, useRef, useEffect } from 'react';
import { PostoService } from '../../services/api/PostoService';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export default function Mapa() {
  const mapRef = useRef(null);
  const { location, loading: locationLoading } = useUserLocation();
  const [postos, setPostos] = useState([]);
  const [postosLoading, setPostosLoading] = useState(true);
  const [error, setError] = useState(null);
  const postoService = new PostoService();

  useEffect(() => {
    if (!locationLoading && location) {
      const fetchPostosProximos = async () => {
        setPostosLoading(true);
        try {
          const response = await postoService.SearchPostosProximos(location);
          setPostos(response);
        } catch (err) {
          setError('Erro ao carregar os postos');
          console.log(err);
        } finally {
          setPostosLoading(false);
        }
      };

      fetchPostosProximos();
    }
  }, [locationLoading]);

  if (locationLoading || postosLoading) {
    return (
      <LoadingSpinner text={"Carregando mapa..."}/>
    );
  }

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: parseFloat(location.latitude),
          longitude: parseFloat(location.longitude),
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(location.latitude),
            longitude: parseFloat(location.longitude),
          }}
          title="Você"
          pinColor="blue"
        />
        {postos.map((posto) => (
          <Marker
            key={posto.id}
            coordinate={{
              latitude: parseFloat(posto.latitude),
              longitude: parseFloat(posto.longitude),
            }}
            title={posto.nome}
            description={`${posto.rua}, ${posto.numero} - ${posto.bairro}`}
          />
        ))}
      </MapView>
    </View>
  );
}

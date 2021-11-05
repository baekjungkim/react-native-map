import React, { useState } from "react";
import NaverMapView from "react-native-nmap";

export default function App() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 37.564362, longitude: 126.977011 });

  return (
    <NaverMapView
      style={{ width: "100%", height: "100%" }}
      showsMyLocationButton={true}
      center={{ ...location, zoom: 16 }}
      // onTouch={(e) => console.warn("onTouch", JSON.stringify(e.nativeEvent))}
      // onCameraChange={(e) => console.warn("onCameraChange", JSON.stringify(e))}
      // onMapClick={(e) => console.warn("onMapClick", JSON.stringify(e))}
    ></NaverMapView>
  );
}

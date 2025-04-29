import "../global.css"
import { Slot } from "expo-router"
import { LocationProvider } from "../hooks/locationContext"

export default function Layout(){
    return (
        <LocationProvider>
          <Slot />
        </LocationProvider>
      );
}
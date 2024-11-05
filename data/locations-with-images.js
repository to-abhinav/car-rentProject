// Import images for each location
import Chandigarh from "../public/assets/images/locations/chandigarhImage.jpeg";
import Kharar from "../public/assets/images/locations/kharar.jpeg";
import Mumbai from "../public/assets/images/locations/mumbai.jpg";
import Delhi from "../public/assets/images/locations/delhi.jpg";
import Bangalore from "../public/assets/images/locations/bangalore.jpg";
import Hyderabad from "../public/assets/images/locations/hyderabad.jpg";
import Kolkata from "../public/assets/images/locations/kolkata.jpg";
import Pune from "../public/assets/images/locations/pune.jpg";
import Jaipur from "../public/assets/images/locations/jaipur.jpg";
import Ahmedabad from "../public/assets/images/locations/ahmedabad.jpg";
import Kochi from "../public/assets/images/locations/kochi.jpg";

import { locations } from "./locations";

// Add images to the respective locations
export const locationsWithImages = locations.map((location) => {
  switch (location.slug) {
    case "chandigarh":
      return { ...location, imageUrl: Chandigarh };
    case "kharar":
      return { ...location, imageUrl: Kharar };
    case "mumbai":
      return { ...location, imageUrl: Mumbai };
    case "delhi":
      return { ...location, imageUrl: Delhi };
    case "bangalore":
      return { ...location, imageUrl: Bangalore };
    case "hyderabad":
      return { ...location, imageUrl: Hyderabad };
    case "kolkata":
      return { ...location, imageUrl: Kolkata };
    case "pune":
      return { ...location, imageUrl: Pune };
    case "jaipur":
      return { ...location, imageUrl: Jaipur };
    case "kochi":
      return { ...location, imageUrl: Kochi };
    default:
      return location; // For locations without images
  }
});

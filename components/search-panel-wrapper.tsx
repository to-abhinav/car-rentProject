import { getLocations } from "@/db/queries/location-repository"

import { SearchPanel } from "./search-panel"

export async function SearchPanelWrapper(props: any) {
  try {
    const locations = await getLocations()
    console.log("fetched locations", locations);
    return <SearchPanel locations={locations} {...props} />
  } catch (error) {
    console.error("failed to fetch locations", error);
    return null;
  }
  
 
}

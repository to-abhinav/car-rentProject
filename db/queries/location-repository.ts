import { db } from "../index"

export async function getLocations() {
  try {
    const locations = await db.query.locationsTable.findMany()
    return locations
  } catch (error) {
    console.error("Error fetching locations", error)
    return null
  }
  
}

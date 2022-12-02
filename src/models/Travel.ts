export interface Travel {
  name: string;
  itinerary: TravelInfo[];
}

export interface TravelInfo {
  from: string;
  to: string;
}

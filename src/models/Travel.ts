export interface Travel {
  carriers: { [key: string]: string };
  options: TravelOption[];
}

export interface TravelOption {
  duration: number;
  itineraryPrice: number;
  journeys: TravelJourney[];
}

export interface TravelJourney {
  arrivalDateTime: string;
  cabinClass: string;
  departureDateTime: string;
  destinationPlace: TravelPlace;
  duration: number;
  layovers: TravelLayovers;
  originPlace: TravelPlace;
  segments: TravelSegment[];
}

export interface TravelPlace {
  cityCode: string;
  code: string;
  name: string;
}

export interface TravelLayovers {
  all: TravelLayover[];
  short: TravelLayover[];
}

export interface TravelLayover {
  location: TravelPlace;
  duration: number;
}

export interface TravelSegment {
  arrivalDateTime: string;
  arrivalDateTimeWithTimeZone: string;
  departureDateTime: string;
  departureDateTimeWithTimeZone: string;
  destinationPlace: TravelPlace;
  duration: number;
  fareBasis: string;
  fareCategory: string;
  marketingAirline: string;
  marketingFlightNumber: string;
  operatingAirline: string;
  operatingFlightNumber: string;
  originPlace: TravelPlace;
}

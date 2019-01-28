export interface Airport {
  airportID?: number;
  airportName: string;
  }

export interface Connections {
  connectionID?: number;
  flightTime: string;
  ticketCost: number;
  departureAirport: Airport;
  arrivalAirport: Airport;
  }


export interface Flight {
  flightID?: number;
  departureDate: Date;
  departureTime: string;
  arrivalDate: Date;
  arrivalTime: string;
  ticketCost: number;
  connection: Connections;
  plane: Plane;

  }

export interface Plane {
  planeID?: number;
  planeName: string;
  }

export interface Ticket {
  ticketID?: number;
  name: string;
  surname: string;
  ticketCost: number;
  category: string;
  whichRow: number;
  place: number;
  user: Users;
  flight: Flight;
  insurance: boolean;
  phonenumber: number;
  pesel: number;
  }

  export interface Seats {
    seatID?: number;
    whichRow: number;
    place: number;
    category: number;
    free: boolean;
    flight: Flight;
    }


export interface Users {
  id?: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: number;
  }

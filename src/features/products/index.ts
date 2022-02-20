import { http } from '../../services';

export const fetchProducts = http.get('/passenger?page=0&size=10');

export type PassengersPaginatedResponse = {
  totalPassengers: number;
  totalPages: number;
  data: Passenger[];
};

export type Airline = {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quatstring: string;
  established: string;
};
export type Passenger = {
  _id: string;
  name: string;
  trips: number;
  __v: number;
};

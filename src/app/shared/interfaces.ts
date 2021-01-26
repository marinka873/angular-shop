export interface Order {
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  state: string;
  zipcode: string;
  phone: string;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface AuthResponse {
  idToken: string;
  expressIn: string;
}

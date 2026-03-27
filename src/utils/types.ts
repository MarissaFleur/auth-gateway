export type User = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type TokenResponse = {
  token: string;
};

export type RefreshTokenRequest = {
  refreshToken: string;
};

export type RefreshTokenResponse = TokenResponse;

export type AuthenticatedUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};
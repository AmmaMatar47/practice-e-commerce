export type Status = 'idle' | 'pending' | 'failed' | 'succeeded';

export interface PostUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserData {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}

export interface UserState {
  user: UserData | null;
  isLoggedIn: boolean;
  status: Status;
  error: null | string;
}

export type RejectValue = { message: string; status: number };

export interface LoginPostValues {
  email: string;
  password: string;
}

export interface UserToken {
  access_token: string;
  refresh_token: string;
}

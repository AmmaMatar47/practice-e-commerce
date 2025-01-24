import { Status } from '../services/apiFetchData';

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
  status: Status;
  error: null | string;
}

export type PostUserArg = { params: string; body: PostUser };
export type RejectValue = { message: string };

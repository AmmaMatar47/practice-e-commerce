import { LoginPostValues, UserToken } from '../types/user';
import { API_ENDPOINTS } from './apiEndPoints';
import { http } from './HTTPService';

export const authUser = async (body: LoginPostValues) =>
  await http.request<UserToken>('post', API_ENDPOINTS.AUTH_USER, body);

export const getUserData = async () => http.request<UserToken>('post', API_ENDPOINTS.LOGIN);

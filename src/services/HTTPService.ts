import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_ENDPOINTS } from './apiEndPoints';
import type { UserToken, PostUser, LoginPostValues } from '../types/user';
import store from '../redux/store';
import { loading, loadingFinished } from '../redux/reducers/global.reducer';

type HttpMethods = 'get' | 'post' | 'delete' | 'patch';

export const HTTPService = class HttpService {
  private instance: AxiosInstance;
  private token: UserToken | null;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      headers: { 'Content-Type': 'application/json' },
    });

    // Store the token dynamically
    this.token = localStorage.getItem('credentials')
      ? JSON.parse(localStorage.getItem('credentials')!)
      : null;

    if (this.token) {
      this.setAuthorizationHeader(this.token.access_token);
    }
  }

  setAuthorizationHeader(access_token: string) {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  }

  async request<Res>(
    method: HttpMethods,
    endpoint: string,
    body?: PostUser | LoginPostValues | undefined,
    customHeaders = {}
  ): Promise<Res> {
    store.dispatch(loading());
    try {
      const res: AxiosResponse<Res> = await this.instance[method](endpoint, body, {
        headers: customHeaders,
      });

      // Store token if the response contains tokens
      if (endpoint === API_ENDPOINTS.AUTH_USER) {
        const tokens = res.data as UserToken;
        if (tokens && tokens.access_token && tokens.refresh_token) {
          this.token = tokens;
          this.storeToken(tokens);
        }
      }

      return res.data;
    } catch (err) {
      throw new Error(this.handleError(err));
    } finally {
      store.dispatch(loadingFinished());
    }
  }

  storeToken({ access_token, refresh_token }: UserToken) {
    localStorage.setItem('credentials', JSON.stringify({ access_token, refresh_token }));
    this.setAuthorizationHeader(access_token);
  }

  handleError(error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.status === 401) return 'Invalid email or password';
        return 'There was an error with the request.';
      } else if (error.request) {
        return error.message;
      } else {
        return error.message || 'Something went wrong. Please try again later.';
      }
    } else {
      return 'An unknown error occurred.';
    }
  }
};

export const http = new HTTPService(import.meta.env.VITE_BASE_URL);

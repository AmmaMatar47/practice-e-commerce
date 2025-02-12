export const API_ENDPOINTS = {
  // PRODUCT
  PRODUCTS: 'products',
  SINGLE_PRODUCT(id: string) {
    return `products/${id}`;
  },

  // USER
  CREATE_USER: '/users/',
  AUTH_USER: 'auth/login',
  LOGIN: 'auth/profile',
};

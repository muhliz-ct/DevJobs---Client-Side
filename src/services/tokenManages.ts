// tokenManager.js
let accessToken: string = '';

// Set the token
export const setAccessToken = (token: string) => {
  accessToken = token;
};

// Get the token
export const getAccessToken = () => accessToken;

// Clear the token
export const clearAccessToken = () => {
  accessToken = '';
};

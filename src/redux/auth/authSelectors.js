export const getUsername = (state) => state.auth.user.name;

export const getUserEmail = (state) => state.auth.user.email;

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getIsRefreshing = (state) => state.auth.isRefreshing;

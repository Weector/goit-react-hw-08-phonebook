export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const tokenSelector = state => state.auth.token;
export const userSelector = state => state.auth.user;

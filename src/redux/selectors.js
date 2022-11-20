export const selectContactsItem = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectLoading = state => state.auth.loading;

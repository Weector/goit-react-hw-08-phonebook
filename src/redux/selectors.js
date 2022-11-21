import { createSelector } from '@reduxjs/toolkit';

export const selectContactsItem = state => state.contacts.items;
export const selectContactsSortedMemoized = category =>
  createSelector(selectContactsItem, items => {
    const newItems = [...items];
    switch (category) {
      case 'revers':
        newItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'name':
        newItems.sort((a, b) => a.name.localeCompare(b.name));

        break;

      default:
        return newItems;
    }
    return newItems;
  });
export const selectFilter = state => state.filter;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectLoading = state => state.auth.loading;

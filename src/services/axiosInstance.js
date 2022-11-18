import axios from 'axios';

const phonebookAxiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set: token => {
    phonebookAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    phonebookAxiosInstance.defaults.headers.common.Authorization = '';
  },
};

export { phonebookAxiosInstance, token };

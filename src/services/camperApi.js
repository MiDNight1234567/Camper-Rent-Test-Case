import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b3a0257fba54a5b7eda6af.mockapi.io/',
});

const requestGetCampers = async () => {
  const { data } = await instance.get('/adverts');
  return data;
};

export { requestGetCampers };

import Cookies from 'universal-cookie';
import { JWT } from '../constant/constant';

interface dataCookie {
  access_token?: string;
}

export const addCookie = (data: dataCookie) => {
  const cookies = new Cookies();
  if (data?.access_token) {
    cookies.set(JWT, data?.access_token, { path: '/' });
  }
};

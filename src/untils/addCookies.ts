import Cookies from 'universal-cookie';
import { ID_PERSON, JWT } from '../constant/constant';

export const addCookie = (data: any) => {
  const cookies = new Cookies();
  if (data?.access_token) {
    cookies.set(JWT, data?.access_token, { path: '/' });
  };
  if (data?.ID) {
    cookies.set(ID_PERSON, data?.ID, { path: '/' });
  }
};

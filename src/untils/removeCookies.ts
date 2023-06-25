import Cookies from 'universal-cookie';

export const removeCookies = () => {
    const cookies = new Cookies();
    cookies.remove('jwt', { path: '/' });
    cookies.remove('id_person', { path: '/' });
};

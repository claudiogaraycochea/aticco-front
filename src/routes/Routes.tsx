import IRoute from '../models/route';

import Home from '../pages/public/home/Home';
import Booking from '../pages/public/booking/Booking';

import PublicLayout from '../layouts/publicLayout/PublicLayout';

import ErrorPage from '../pages/public/errorPage/ErrorPage';

export const routes: IRoute[] = [
    {
      path: '/',
      name: 'Home Page',
      component: Home,
      layout: PublicLayout,
      exact: true
    },
    {
      path: '/booking/:officeId',
      name: 'Booking Page',
      component: Booking,
      layout: PublicLayout,
      exact: true
    },
    {
      path: '',
      name: 'Error Page',
      component: ErrorPage,
      layout: PublicLayout,
      exact: true
    },
  ]
  
  export default routes;
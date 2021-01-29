import { APP_URLS } from './app.urls';
import Home from '../pages/home'
import Details from "../pages/details";
import Edit from "../pages/edit";


export const APP_ROUTES = [
  {
    exact: true,
    path: APP_URLS.home,
    component: Home,
  },
  {
    exact: true,
    path: APP_URLS.video,
    component: Details
  },{
    exact: true,
    path: APP_URLS.edit,
    component: Edit
  }
];

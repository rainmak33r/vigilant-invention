import {APP_URLS} from './app.urls';
import Home from '../pages/home'
import Details from "../pages/details";
import Edit from "../pages/edit";
import Create from "../pages/create";


export const APP_ROUTES = [
  {
    exact: true,
    path: APP_URLS.home,
    component: Home,
  }, {
    exact: true,
    path: APP_URLS.newVideo,
    component: Create
  }, {
    exact: true,
    path: APP_URLS.videoDetails,
    component: Details
  }, {
    exact: true,
    path: APP_URLS.edit,
    component: Edit
  }
];

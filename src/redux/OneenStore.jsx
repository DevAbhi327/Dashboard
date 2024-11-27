import {configureStore} from '@reduxjs/toolkit';
import Sidemenu from './feature/feature-sidemenu';
import UserInfo from './feature/feature-userInfo';

const OneenStore = configureStore({
  reducer: {
    Sidemenu: Sidemenu,
    UserInfo: UserInfo
  },
});

export default OneenStore;

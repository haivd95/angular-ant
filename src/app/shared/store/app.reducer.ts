import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from '../../templates/login/user-info.reducer';
import { AppState } from './app.state';

export const appReducers: ActionReducerMap<AppState> = {
  userInfo: userReducer,
  // Khai báo các reducer khác của ứng dụng nếu có
};

import { ActionReducerMap } from '@ngrx/store';
import { UserState, userReducer } from '../../templates/login/user-info.reducer';
import { AppState } from './app.state';
// Import các reducer khác nếu có



export const appReducers: ActionReducerMap<AppState> = {
  userInfo: userReducer,
  // Khai báo các reducer khác của ứng dụng nếu có
};

import { Action } from '@ngrx/store';
import { SetUserInfoAction, UserActionTypes } from './user-info.actions';

export interface UserState {
  userInfo: any;
  // Khai báo các trạng thái khác của người dùng nếu cần
}

const initialState: UserState = {
  userInfo: null,
  // Khởi tạo các trạng thái khác của người dùng nếu cần
};

export function userReducer(state: UserState = initialState, action: Action): UserState {
  switch (action.type) {
    case UserActionTypes.SetUserInfo:
      return {
        ...state,
        userInfo: (action as SetUserInfoAction).payload
      };
    // Xử lý các action khác tương tự
    default:
      return state;
  }
}

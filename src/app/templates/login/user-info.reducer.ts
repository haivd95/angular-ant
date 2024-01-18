import { UserActionTypes, UserActions } from './user-info.actions';

export interface UserState {
  userInfo: any; // Định dạng thông tin người dùng
}

export const initialState: UserState = {
  userInfo: null
};

export function userReducer(state = initialState, action: UserActions): UserState {
  console.log('________UserActionTypes.SetUserInfo________', UserActionTypes.SetUserInfo);
  switch (action.type) {
    case UserActionTypes.SetUserInfo:

      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}

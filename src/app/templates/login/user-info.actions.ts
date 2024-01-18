import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SetUserInfo = '[User] Set User Info'
}

export class SetUserInfo implements Action {
  readonly type = UserActionTypes.SetUserInfo;

  constructor(public payload: any) {} // payload chứa thông tin người dùng
}

export type UserActions = SetUserInfo;

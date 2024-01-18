import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SetUserInfo = '[User] Set User Info',
  // Định nghĩa các action khác tương tự
}

export class SetUserInfoAction implements Action {
  readonly type = UserActionTypes.SetUserInfo;

  constructor(public payload: any) {}
}

// Định nghĩa các action khác tương tự

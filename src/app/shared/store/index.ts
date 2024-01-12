import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import * as appstate from './appstate';

export interface AppState {
    appstate: any;
}

export const reducers: ActionReducerMap<AppState> = {
    appstate: appstate.reducer,
};


// this will save part of redux store into localstorage
// and restore this part on app init
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['settings'],
        rehydrate: true,
    })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [
    localStorageSyncReducer
]/*.concat(
    environment.production ?
        [] : // production only meta reducers
        [] // dev only meta reducers
)*/;


export const effects = [

];


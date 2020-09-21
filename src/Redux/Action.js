import { LOGIN_CHANGE } from "./actionType";

export function loginChange(userData,userRef){
    return {
        type: LOGIN_CHANGE,
        payload:userData,
        userRef
    }
}
//KYIV MEDIA 05.12.2019
import { CREATE_MESSAGE } from './types';
import { GET_ERRORS } from './types';

//CREATE MESSAGE
export const createMessage = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};
//RETURN ERRORS
export const returnErrors = (msg,status) =>{
    return {
        type: GET_ERRORS,
        payload: { msg, status}
    }
}
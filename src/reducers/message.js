import * as Type from '../constands/ActionType';
import * as Message from '../constands/Message';


const InitialState = Message.MSG_WELLCOME;

const message = (state = InitialState, action) => {
    switch (action.type) {
        case Type.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}

export default message;
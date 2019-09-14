const InitialState = {
    userLogged : false,
    token : "sometokefrombackend"
}

export default function ( state=InitialState , action={}){
    switch(action.type) {
        case 'logUser' : {
            return {...state , userLogged : action.payload}
        }
        default : return state
    }
}
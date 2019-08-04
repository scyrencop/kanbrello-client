import { ADD_NEW_BOARD , FETCH_IMAGES_FOR_BOARDS} from './../constants/index';

const initialState = {
    boards: [
        {
          id: 1,
          title: "board title",
          image: "LoginImage",
          color: "red",
          team : "no_team"
        }
      ],
    images : ""   
}

export default (state = initialState , action={})=>{
    switch (action.type){
        case ADD_NEW_BOARD :
            console.log('action.payload ', action.payload)
            state = {
                ...state,
                boards : [...state.boards , action.payload]
            }
            return state;
        case FETCH_IMAGES_FOR_BOARDS  :
            state = {
                ...state,
                images : action.payload
            } 
            return state;
        default :
            return state;    
    }
}
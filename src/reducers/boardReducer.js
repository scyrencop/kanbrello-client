import { ADD_NEW_BOARD , FETCH_IMAGES_FOR_BOARDS} from './../constants/index';

const initialState = {
    boards: [
        {
          id: 1,
          title: "board title",
          image: "LoginImage",
          color: "red"
        }
      ],
    images : ""   
}

export default (state = initialState , action={})=>{
    switch (action.type){
        case ADD_NEW_BOARD :
            state = {
                ...state,
                boards : action.payload
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
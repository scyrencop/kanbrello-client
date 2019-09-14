import { ADD_NEW_BOARD, FETCH_IMAGES_FOR_BOARDS, LOG_USER } from "./../constants/index";
 
export function imagesFromUnsplsh() {
  return dispatch => {
    //this is  just for a test, i will add unsplash api for backend
    const url = "https://picsum.photos/v2/list?page=2&limit=100";
    fetch(url).then(res => res.json()).then(items=> 
        dispatch({
            type : FETCH_IMAGES_FOR_BOARDS,
            payload : items
    })
    );
  };
}

export function add_new_board(value) {
  return {
    type: ADD_NEW_BOARD,
    payload: value
  };
}

export function logUser(value) {
  return {
    type : LOG_USER,
    payload : value
  }
}

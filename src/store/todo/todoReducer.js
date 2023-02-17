const initialState = [];
export const todoInputType = {
  ADD: "ADD",
  DELETE: "DELETE",
  DELETE_ALL: "DELETE_ALL",
  COMPLETED: "COMPLETED",
  TODO_EDITE: "TODO_EDITE",
};

export const todoReducer = (state = initialState, action) => {
    console.log(state);
  switch (action.type) {
    case todoInputType.ADD:
      return [...state, action.payload];
    case todoInputType.DELETE:
      return state.filter((el) => el.id !== action.payload);
    case todoInputType.DELETE_ALL:
      return initialState;

    case todoInputType.COMPLETED:
      return state.map((el) => {
            console.log(el)
       if(el.id !== action.id) {
        return {
            ...el,
            completed:!el.completed
        }
       }  
         return el 
            
        })

      
    case todoInputType.TODO_EDITE:
       return state.map((item) => {
        if(item.id === action.id){
            return {
                ...item,
                title:action.payload
            }
        }
        return item
       })
    default:
      return state;
  }
};

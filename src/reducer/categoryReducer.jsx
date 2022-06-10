const categoryReducer = (state, action) => {
    switch (action.type) {
      case "savedata":
        return { ...state, categorydata: action.payload};
      default:
        return state;
    }
  };
  
  export default categoryReducer;
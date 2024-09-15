export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (tsx) => tsx.id !== action.payload
        ),
      };
      break;
    case "ADD_TRANSACTION":
      console.log("sdfasd");

      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
      break;
    default:
      return state;
  }
};

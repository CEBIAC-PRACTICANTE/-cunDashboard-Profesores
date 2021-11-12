const contextReducer = (state, action) => {
  let subjects;

  switch (action.type) {
    case "DELETE_SUBJECT":
      subjects = state.filter((s) => s.id !== action.payload);
      localStorage.setItem("subjects", JSON.stringify(subjects));
      return subjects;

    case "ADD_SUBJECT":
      subjects = [action.payload, ...state];
      localStorage.setItem("subjects", JSON.stringify(subjects));
      return subjects;
    default:
      return state;
  }
};

export default contextReducer;

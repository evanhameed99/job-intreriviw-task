const initialState = {
  name: '',
  description: '',
  id: '',
};

export const AddStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BRAND_NAME':
      return { ...state, name: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };

    default:
      return state;
  }
};

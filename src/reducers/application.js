const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';

// REDUCER INCLUDES SETTING POINTS
export default function reducer(state, action) {
  switch (action.type) {
    case SET_APPLICATION_DATA: {
      const { productData } = action;

      return {
        ...state,
        productData,
      };
    }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export { SET_APPLICATION_DATA };

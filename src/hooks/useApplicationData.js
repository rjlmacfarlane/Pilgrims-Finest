import { useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer, { SET_APPLICATION_DATA } from '../reducers/application';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    productData: [],
  });

  // RETRIEVES API AND SETS IT WITH REDUCER
  useEffect(() => {
    axios.get('/productInfo.json').then((res) => {
      const productData = res.data;
      dispatch({
        type: SET_APPLICATION_DATA,
        productData,
      });
    });
  }, []);
  return {
    state,
  };
}

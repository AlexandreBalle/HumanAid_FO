import axios from 'axios';

export const getCompanies = (limit = null) => {
    let limitString = limit ? "?limit=" + limit : "";

  return (dispatch) => {
    dispatch({
      type: 'LOADING'
    });
    return axios.get(`${process.env.REACT_APP_API_HOST}company${limitString}`)
            .then((json) => {
              dispatch({
                type: 'GET_COMP_SUCCESS',
                companies: json.data
              });
            })
            .catch((err) => {
              dispatch({
                type: 'ERROR',
                error: err
              });
            });
  }
};

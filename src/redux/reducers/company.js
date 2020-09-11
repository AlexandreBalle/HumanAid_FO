const INITIAL_STATE = {
    companies: [],
    loading: false,
    error: ""
  };
  
  const companies = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_COMP_SUCCESS':
        return {
          ...state,
          companies: action.companies,
          loading: false,
          error: ""
        }
      case 'LOADING':
        return {
          ...state,
          loading: true,
          error: ""
        }
      case 'ERROR':
        return {
          ...state,
          loading: false,
          error: action.error
        }
      default:
        return state
    }
  }
  
  export default companies;
  
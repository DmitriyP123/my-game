const state = JSON.parse(window.localStorage.getItem("currentState"));

let initialState = {
  name: "",
  email: "",
  logged: false,
};

if (state) {
  initialState = {
    name:state.name,
    email:state.email,
    logged:state.logged
  };
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_USER': 
    return {...state, name:action.payload.name, email:action.payload.email, logged:true} 

    case 'LOGOUT_USER': 
    return {...state, name: "",email: "",logged: false,} 

    default: 
    return state
  }
}

export default reducer

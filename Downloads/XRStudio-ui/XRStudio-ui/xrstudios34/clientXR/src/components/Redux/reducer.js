import {
  CHECK_USER,
  GET_ALL_CASES,
  GET_ALL_MODELS,
  GET_ALL_USERS,
  GET_AR,
  GET_COLLAB,
  GET_INFO,
  GET_MEDICAL,
  GET_SINGLE_CASE,
  GET_SINGLE_MODEL,
  GET_VR,
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_UP,
  GET_MR,
  GET_CUSTOM,
  GET_OTHERS
} from "./constants";

export const signInReducer = (state = { login: false, user: "" }, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action.payload);
      // action.payload = localStorage.setItem("tojen")
      return { ...state, user: action.payload };
    case SIGN_IN_FAIL:
      return false;

    case CHECK_USER:
      return action.payload;
    default:
      return state;
  }
};

export const modelReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_MODELS:
      return action.payload;

    case GET_SINGLE_MODEL:
      return action.payload;

    case GET_ALL_CASES:
      return action.payload;

    default:
      return state;
  }
};

export const checkAuthReducer = (state = "", action) => {
  switch (action.type) {
    case CHECK_USER:
      return action.payload;
    default:
      return state;
  }
};

export const caseReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CASES:
      return action.payload;

    case (GET_SINGLE_CASE, GET_INFO):
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

export const collabReducer = (state = "", action) => {
  switch (action.type) {
    case GET_COLLAB:
      return action.payload;

    default:
      return state;
  }
};



export const MedicalReducer = (state = "", action) => {
  switch(action.type) {
    case GET_MEDICAL:
      return action.payload;

      default:
        return state;
  }
}

export const ARReducer = (state = "", action) => {
  switch(action.type) {
    case GET_AR:
      return action.payload;

      default:
        return state;
  }
}

export const VRReducer = (state = "", action) => {
  switch(action.type) {
    case GET_VR:
      return action.payload;

      default:
        return state;
  }
}

export const MRReducer = (state = "", action) => {
  switch(action.type) {
    case GET_MR:
      return action.payload;

      default:
        return state;
  }
}

export const CustomcallReducer = (state = "", action) => {
  switch(action.type) {
    case GET_CUSTOM:
      return action.payload;

      default:
        return state;
  }
}

export const OthersReducer = (state = "", action) => {
  switch(action.type) {
    case GET_OTHERS:
      return action.payload;
      
      default:
        return state;
  }
}

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload;

    default:
      return state;
  }
};

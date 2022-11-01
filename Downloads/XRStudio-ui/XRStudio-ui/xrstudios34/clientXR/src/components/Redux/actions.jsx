import axios from "axios";
import {
  CHECK_USER,
  GET_ALL_CASES,
  GET_ALL_MODELS,
  GET_ALL_USERS,
  GET_COLLAB,
  GET_INFO,
  GET_SINGLE_CASE,
  GET_SINGLE_MODEL,
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_UP,
  GET_VR,
  GET_MEDICAL,
  GET_AR,
  GET_OTHERS,
  GET_MR,
  GET_CUSTOM
} from "./constants";

axios.defaults.withCredentials = true;
// axios.defaults.xsrfHeaderName = "X-CSRFToken"

export const SignUp = (user, navigate) => async (dispatch) => {
  const res = await axios.post("/auth/signup", user);
  //   console.log(firstName);
  // console.log(user);
  // navigate("/SignInNew");
  // dispatch({
  //   type: SIGN_UP,
  //   payload: res.data,
  // });

  const loginData = {
    email: user.email,
    password: user.password,
  };
  const res2 = await axios.post("/auth/signin", loginData);
  dispatch({
    type: SIGN_IN,
    payload: res2.data,
  });
  let userDetails = await axios.get("/user/me/details");
  console.log(userDetails);

  navigate(`/user/${userDetails.data._id}/general-info`);
};

export const SignIn = (user, navigate, gotoProduct) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signin", user);

    // console.log(res.data);
    dispatch({
      type: SIGN_IN,
      payload: res.data,
    });
    GetCurrentUserDetails();
    // console.log(location.pathname);
    if (gotoProduct) {
      navigate("/user/publicgallery");
    } else {
      navigate("/");
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: SIGN_IN_FAIL });
  }
};
export const SignOut = (navigate) => async (dispatch) => {
  try {
    const res = await axios.get("/auth/signout");
    // navigate("/login");
  } catch (err) {
    console.log(err);
  }
};

export const AddInformation = (details, id) => async (dispatch) => {
  try {
    const res = await axios.post(`/user/${id}/info`, details);
  } catch (err) {
    console.log(err);
  }
};

export const GetGeneralInfo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/user/${id}/info`);
    dispatch({
      type: GET_INFO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetAllModels = () => async (dispatch) => {
  try {
    const res = await axios.get("/products");

    dispatch({
      type: GET_ALL_MODELS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetSingleModel = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/products/single/${id}`);

    dispatch({
      type: GET_SINGLE_MODEL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetSingleCase = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/case/single/${id}`);
    // console.log(res.data);
    dispatch({
      type: GET_SINGLE_CASE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetAllCase = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case`);

    dispatch({
      type: GET_ALL_CASES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetCurrentUserDetails = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/me/details");
    dispatch({
      type: CHECK_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/");

    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetAllCasebyId = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/`);
    dispatch({
      type: GET_ALL_CASES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetCollab = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/collaborator`);
    dispatch({
      type: GET_COLLAB,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetAR = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/arservices`);
    dispatch({
      type: GET_AR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const GetMedical = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/medical`);
    dispatch({
      type: GET_MEDICAL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetVR = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/virtualreality`);
    dispatch({
      type: GET_VR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
}; 

export const GetCustom = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/customcall`);
    dispatch({
      type: GET_CUSTOM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
}; 


export const GetMR = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/mr`);
    dispatch({
      type: GET_MR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const GetOthers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/case/all/others`);
    dispatch({
      type: GET_OTHERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const DeleteModel = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/products/${id}`);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const deleteCase = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/case/${id}`);
    //refresh after update
    window.location.reload();
  } catch (err) {
    console.log(err)
  }
}

export const sendMail = (email) => async (dispatch) => {
  try {
    const res = await axios.post("/user/invite", email);
  } catch (err) {
    console.log(err);
  }
};

export const GeneralInfo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/user/${id}/info`);
  } catch (err) {
    console.log(err);
  }
};

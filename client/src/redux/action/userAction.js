import axios from "axios";
import { server } from "../../store";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "getUserRequest" });
    const { data } = await axios.get(`${server}/api/get-user-details`, {
      withCredentials: true,
    });

    dispatch({ type: "getUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "getUserFail", payload: error.response.data.message });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: "registerUserRequest" });

    const { data } = await axios.post(
      `${server}/api/register`,
      { username: user.name, password: user.password, email: user.email },
      { headers: { "Content-type": "application/json" }, withCredentials: true }
    );

    dispatch({ type: "registerUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "registerUserFail",
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/api/login`,
      { email: user.email, password: user.password },
      { headers: { "Content-type": "application/json" }, withCredentials: true }
    );

    dispatch({ type: "loginSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

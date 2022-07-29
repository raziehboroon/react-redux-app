import axios from "axios";
const fetchUserRequest = () => {
  return { type: "FETCH_USERS_REQUEST" };
};

const fetchUserSuccess = (users) => {
  return { type: "FETCH_USERS_SUCCESS", payload: users };
};

const fetchUserFailure = (error) => {
  return { type: "FETCH_USERS_FAILURE", payload: error };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/userss")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailure(errorMessage));
      });
  };
};

export default fetchUsers;

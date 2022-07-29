import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import fetchUsers from "../redux/users/usersAction";

const Users = () => {
  const state = useSelector((state) => state.usersState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      users
      {state.loading ? (
        <h1>loading...</h1>
      ) : state.error ? (
        <h3>{state.error}</h3>
      ) : (
        state.users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
};

export default Users;

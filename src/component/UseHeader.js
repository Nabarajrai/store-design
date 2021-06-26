import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

function UseHeader({ userId, users }) {
  const user = users.find((user) => user.id === userId);

  return <div>{!user ? null : <h3>{user.name}</h3>}</div>;
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { fetchUser })(UseHeader);

import React from "react";
//import user from "../images/user.png";

const Contactcard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo" alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div style={{ color: "red", marginTop: "7px",display:"flex", justifyContent:"end",textAlign:"center" }}>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      </div>

      
    </div>
  );
};

export default Contactcard;
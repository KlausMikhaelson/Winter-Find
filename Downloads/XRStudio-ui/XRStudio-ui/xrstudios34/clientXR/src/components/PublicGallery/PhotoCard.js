import React, { useContext } from "react";
import "./style.css";
import { AuthContext } from "../../Pages/Auth";
import { RemoveModal } from "../Firebase";
import { Link } from "react-router-dom";

function PhotoCard(props) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.image} alt="srry" />
      </div>
      <div className="cardContent">
        <div className="name">
          <h4>{props.title}</h4>
          <p>by - {props.user}</p>
        </div>
        <div className="line"></div>
        <div className="others">
          <div className="btns">
            <Link to={`/view/${props.title}`}>
              <button>View</button>
            </Link>

            {props.user == currentUser.email && (
              <button onClick={() => RemoveModal(props.id)}>Delete</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;

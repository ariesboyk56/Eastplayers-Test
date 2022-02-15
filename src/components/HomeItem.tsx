import React from "react";
import { useNavigate } from "react-router-dom";
import { IData } from "../Interface";
import "../styles/HomeItem.css";
interface IProps {
  data: IData[];
}
const HomeItem: React.FC<IProps> = (props) => {
  const { data } = props;
  const navigate = useNavigate()
  return (
    <div className="home-container">
      {data.map((item, index) => {
        return <div className="home-item" key={index}>
          <div className="home-item__desc">
            <div className="home-item__ordinal">{index + 1}</div>
            <div className="home-item__name">{item.name}</div>
          </div>
          <div className="home-item__button" onClick={()=>navigate(item.path)}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>;
      })}
    </div>
  );
};

export default HomeItem;

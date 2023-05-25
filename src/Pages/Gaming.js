import React from "react";
import { useContext } from "react";
import { data } from "../Utilities/ContextApi/ContextData";
import HeaderCompo from "../Components/HeaderCompo";
import { Link } from "react-router-dom";
function Gaming() {
  const [detail] = useContext(data);
  return (
    <>
      <HeaderCompo />
      <h2 className="page-titles-right">Gaming Stories</h2>
      <div className="section-container">
        <div className="left-section">
          {" "}
          {detail
            .filter((item) => item.category === "Gaming")
            .map((i, index) => {
              console.log(i, index);
              return (
                <div key={index} className="left-section-info-container">
                  <div className="left-section-avatar">
                    <Link to={`/article/${i.id}`}>
                      <img
                        src={i.image}
                        style={{ width: 250, height: 200, borderRadius: 10 }}
                      ></img>
                    </Link>
                  </div>
                  <div className="info">
                    <h2 className="left-section-name">{i.name}</h2>
                    <p>{i.release}</p>
                    <p className="left-section-para">{i.desc}</p>
                    {/*<p>Desc :{i.content}</p>*/}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="right-section">
          <h2 className="page-titles-left">Top Post</h2>
          {detail
            .filter((item) => item.category === "Gaming")
            .map((i, index) => {
              return (
                <div key={index} className="right-section-info-container">
                  <div className="right-section-avatar">
                    <Link to={`/article/${i.id}`}>
                      <img
                        src={i.image}
                        style={{
                          width: 200,
                          height: 150,
                          borderRadius: 10,
                          marginRight: 40,
                        }}
                      ></img>
                    </Link>
                  </div>
                  <div className="right-section-info">
                    <h3 className="right-section-name">Name :{i.name}</h3>

                    <h4>{i.Date}</h4>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="advertisement-container">Advertisement</div>
      </div>
    </>
  );
}
export default Gaming;

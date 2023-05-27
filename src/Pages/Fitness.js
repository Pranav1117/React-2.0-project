import React from "react";
import { data } from "../Utilities/ContextApi/ContextData";
import { useContext } from "react";
import HeaderCompo from "../Components/HeaderCompo";
import { Link } from "react-router-dom";
function Fitness() {
  const [detail] = useContext(data);

  return (
    <>
      <HeaderCompo />
      <h2 className="page-titles-right">Fitness Stories</h2>
      <div className="section-container">
        <div className="left-section">
          {" "}
          {detail
            .filter((item) => item.category === "Fitness")
            .map((i, index) => {
              console.log(i, index);
              return (
                <>
                  <div className="left-section-info-container">
                    <div className="left-section-avatar">
                      <Link to={`/article/${i.id}`}>
                        <img
                          alt="logo"
                          src={i.image}
                          style={{ width: 250, height: 200, borderRadius: 10 }}
                        ></img>
                      </Link>
                    </div>
                    <div className="info">
                      <h2 className="left-section-name">{i.name}</h2>

                      <p className="left-section-para">{i.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        <div className="right-section">
          <h2 className="page-titles-left">Top Post</h2>
          {detail
            .filter((item) => item.category === "Fitness")
            .map((i, index) => {
              return (
                <div key={index} className="right-section-info-container">
                  <div className="right-section-avatar">
                    <Link to={`/article/${i.id}`}>
                      <img
                        alt="logo"
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

export default Fitness;

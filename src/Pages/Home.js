import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import HeaderCompo from "../Components/HeaderCompo";
import { data } from "../Utilities/ContextApi/ContextData";
import { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [detail] = useContext(data);
  return (
    <>
      <HeaderCompo />

      <div className="homepage-main-images">
        <div className="homepage-main-big-image-container">
          {detail
            .filter((item) => item.name === "Resident evil")
            .map((i, index) => {
              return (
                <>
                  <img className="homepage-main-big-image" src={i.image} />
                </>
              );
            })}
        </div>
        <div className="homepage-small-images">
          {detail
            .filter(
              (item) => item.name === "Top Gun :Maverick",
              "Artificial Inteligence"
            )
            .map((i, index) => {
              return (
                <>
                  <img src={i.image} className="homepage-small-images1" />
                </>
              );
            })}

          {detail
            .filter((item) => item.name === "Artificial Inteligence")
            .map((i, index) => {
              return (
                <>
                  <img src={i.image} className="homepage-small-images2" />
                </>
              );
            })}
        </div>
      </div>

      <h2 className="home-page-headings">
        <span className="home-page-headings-underline"> Latest</span> Bollywood
        Stories
      </h2>
      <hr />
      <div className="homepage-bollystories-container">
        {detail
          .filter((i) => i.category === "Bollywood")
          .map((item, index) => {
            return (
              <div key={index} className="homepage-bollystories">
                <Link to={`article/${item.id}`}>
                  <img src={item.image} style={{ width: 200 }} />
                </Link>
                <h2>{item.name}</h2>
                <p>{item.IMDb}</p>
                <p>{item.desc}</p>
              </div>
            );
          })}
      </div>

      <h2 className="home-page-headings">
        <span className="home-page-headings-underline"> Latest</span> Hollywood
        Stories
      </h2>
      <hr />
      <div className="homepage-hollystories-container">
        <div className="homepage-advertise-container">Advertisement</div>
        {detail
          .filter((i) => i.category === "Hollywood")
          .map((item, index) => {
            return (
              <div key={index} className="homepage-hollystories-wrapper">
                <div className="home-hollywood-stories-img">
                  <Link to={`article/${item.id}`}>
                    <img src={item.image} style={{ width: 200, height: 250 }} />
                  </Link>
                </div>
                <div className="home-hollywood-stories-desc">
                  <h2>{item.name}</h2>
                  <p>{item.IMDb}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="homepage-toppost-container">
        <h2>Top Post</h2>
        {detail
          .filter((i) => i.category === "Technology" && i.id === 19)
          .map((item, index) => {
            return (
              <div className="homepage-toppost-mainpost">
                <Link to={`article/${item.id}`}>
                  <img src={item.image} style={{ width: 450, height: 266 }} />
                </Link>
                <div className="txt-adjust">
                  <h2>{item.name}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}

        <div className="homepage-toppost-smallpost-container">
          {detail
            .filter((i) => i.category === "Technology")
            .map((item, index) => {
              return (
                <div className="homepage-toppost-smallpost">
                  <Link to={`article/${item.id}`}>
                    <img src={item.image} style={{ width: 101, height: 104 }} />
                  </Link>
                  <div className="homepage-toppost-smallpost-info">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Home;

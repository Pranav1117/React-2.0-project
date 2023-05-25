import React from "react";
import { data } from "../Utilities/ContextApi/ContextData";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./article.css";
const Article = () => {
  var params = useParams();
  var path = parseInt(params.Id);

  const location = useLocation();

  console.log(location);
  const [detail] = useContext(data);
  var categor;

  for (var i = 0; i < detail.length; i++) {
    if (detail[i].id === path) {
      categor = detail[i].category;
      break;
    }
  }

  return (
    <>
      <div>
        {detail
          .filter((item) => item.id === path)
          .map((i, index) => {
            return (
              <>
                <div className="article-above-container" key={index}>
                  <h2 className="article-heading">{i.name}</h2>
                  <img
                    alt="image"
                    className="article-main-image"
                    src={i.image}
                    style={{ width: 300 }}
                  />
                  <p className="article-main-para">{i.details}</p>
                  <br />

                  <br />
                </div>
              </>
            );
          })}
      </div>
      <h2 className="more">More from Siren </h2>
      <hr className="article-lower-line" />
      <div className="article-lower-conatiner">
        {detail
          .filter((item) => item.category === categor && item.id !== path)
          .map((i, index) => {
            return (
              <>
                <div>
                  <div className="article-lower-wrapper">
                    <Link
                      className="article-bottom-name"
                      to={`/article/${i.id}`}
                    >
                      <img
                        alt="image"
                        className="article-bottom-images article-bottom "
                        src={i.image}
                        style={{ width: 200 }}
                      />
                      <h4 className=" article-bottom">{i.name}</h4>
                    </Link>
                    <h5 className="article-bottom-date article-bottom">
                      {i.release}
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Article;

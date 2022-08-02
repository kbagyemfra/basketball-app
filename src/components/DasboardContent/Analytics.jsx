import React, { useContext } from "react";
import { profile } from "../../data/bio";

const Analytics = () => {
  return (
    <>
      <div className="analyze">
        {profile.map((data, index) => (
          <a
            href={`/player/${data.personId}`}
            key={index}
            // onClick={() => handleOnClick(data)}
          >
            <div className="analytic">
              <img src={data.imageUrl} />
              <div className="top">
                <h5 className="name">{data.playerName}</h5>
              </div>
              <div className="content">{/* <h2>{data[1]}</h2> */}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Analytics;

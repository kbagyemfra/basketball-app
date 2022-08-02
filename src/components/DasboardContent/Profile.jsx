import React, { useContext } from "react";
import { profile } from "../../data/bio";
import { GlobalContext } from "../../context/global";
import { FaBirthdayCake } from "react-icons/fa";

const Profile = ({ params }) => {
  // const { activePlayer } = useContext(GlobalContext);

  const profileI = profile.filter((data) => {
    return data.personId.includes(params.id);
  });

  console.log(params.id);

  return (
    <>
      {params &&
        profileI.map((data, index) => (
          <div className="profile" key={index}>
            <div className="col-a">
              <div className="image">
                <img src={data.imageUrl} alt="profile" key={index} />
              </div>
              <div className="title">
                <h2>{data.playerName}</h2>
              </div>
            </div>
            <div className="col-b">
              <div className="title">
                <h2>
                  <span>DOB: </span>
                  {data.birthDate}
                </h2>
                <h2>
                  <span>Weight: </span>
                  {data.weight} lb
                </h2>
                <h2>
                  <span>Height: </span>
                  {data.height}
                </h2>
                <h2>
                  <span>Years Played: </span>
                  {data.yearsProService}
                </h2>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Profile;

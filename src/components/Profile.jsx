import React from "react";

const Profile = ({ firstName, lastName, job, state, city, avatar }) => {
  return (
    <div className="card flex-center-column text-center gap-min p-3">
      <div className="profile-big">
        <img src={avatar} alt={firstName} className="profile-img" />
      </div>
      <h5 className="mt-2">{`${firstName} ${lastName}`}</h5>
      <h6 className="h7">{job}</h6>
      <h6 className="h7 color-gray">{`${city}, ${state}`}</h6>
    </div>
  );
};

export default Profile;

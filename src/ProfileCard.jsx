import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, age, location, image,email }) => {
    return (
        <div className="profile-card">
            <img className="profile-image" src={image} alt={name} />
            <div className="profile-details">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-age">Age: {age}</p>
                <p className="profile-location">Location: {location}</p>
                {/* Button to send an email */}
                <a href={`mailto:${email}`} className="email-button">
                    <button>Contact</button>
                </a>
            </div>
        </div>
    );
}

export default ProfileCard;

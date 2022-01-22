import React from "react";
import { UserCardProps } from "./UserCard.props";

const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {userData.name}
            <span>@{userData.login.toLowerCase()}</span>
          </h1>
          <p className="app-user_about">{userData.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{userData.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{userData.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Подписок
          <span>{userData.following}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{userData.location}</li>
        <li className="app-user_location-item">
          <a href={userData.html_url}>{userData.html_url}</a>
        </li>
      </ul>
    </div>
  );
};

export default UserCard;

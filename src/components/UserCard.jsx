import React from 'react';
import './UserCard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor, faCrown, faUser, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function UserCard({ avatarUrl, nickname, farmCount, status, userId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${userId}`);
  };

  let statusIcon = null;
  if (status === 'Глава') {
    statusIcon = <FontAwesomeIcon icon={faCrown} style={{ color: '#e6c200' }} title="Глава" />;
  } else if (status === 'Участник') {
    statusIcon = <FontAwesomeIcon icon={faUser} style={{ color: '#555' }} title="Участник" />;
  } else if (status === 'Следящий') {
    statusIcon = <FontAwesomeIcon icon={faShieldAlt} style={{ color: '#007bff' }} title="Следящий" />;
  } else {
    statusIcon = null;
  }

  console.log('avatarUrl:', avatarUrl);

  return (
    <div className="user-card" onClick={handleClick}>
      <div className="user-card__avatar">
        <img src={avatarUrl} alt="Аватар" />
      </div>
      <div className="user-card__info">
        <div className="user-card__nickname">{nickname}</div>
        <div className="user-card__bottom-row">
          <span title="Число ферм">
            <FontAwesomeIcon icon={faTractor} /> {farmCount}
          </span>
          <span className="user-card__status" title={status}>
            {statusIcon}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCard; 
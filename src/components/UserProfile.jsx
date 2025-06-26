import React from 'react';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faUser, faShieldAlt, faTractor, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function getStatusIcon(status) {
  if (status === 'Глава') return <FontAwesomeIcon icon={faCrown} style={{ color: '#e6c200' }} title="Глава" />;
  if (status === 'Участник') return <FontAwesomeIcon icon={faUser} style={{ color: '#555' }} title="Участник" />;
  if (status === 'Следящий') return <FontAwesomeIcon icon={faShieldAlt} style={{ color: '#007bff' }} title="Следящий" />;
  return null;
}

const UserProfile = ({ user }) => {
  const navigate = useNavigate();

  const goToFarm = (url) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="user-profile fade-in">
      <button className="user-profile__back" onClick={() => navigate(-1)} title="Назад">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="user-profile__avatar">
        <img src={user.avatarUrl} alt="Аватар" />
      </div>
      <div className="user-profile__nickname">{user.nickname}</div>
      <div className="user-profile__info">
        <span><FontAwesomeIcon icon={faTractor} /> Всего ферм: {user.farmCount}</span>
        <span className="user-profile__status">Статус: {getStatusIcon(user.status)} {user.status}</span>
      </div>
      <div className="user-profile__farms-title">Фермы:</div>
      <div className="user-profile__farms-list">
        {user.farms && user.farms.length > 0 ? user.farms.map((farm, idx) => (
          <div className="user-profile__farm" key={idx} onClick={() => goToFarm(farm.url)} style={{cursor:'pointer'}}>
            <img src={farm.screenshot} alt={farm.name} className="user-profile__farm-img" />
            <div className="user-profile__farm-info">
              <div className="user-profile__farm-name">{farm.name}</div>
              <div className="user-profile__farm-coords"><FontAwesomeIcon icon={faMapMarkerAlt} /> {farm.coords}</div>
            </div>
          </div>
        )) : <div className="user-profile__no-farms">Нет ферм</div>}
      </div>
    </div>
  );
};

export default UserProfile; 
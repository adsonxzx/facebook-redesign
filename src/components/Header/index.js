import React from 'react';
import './header.scss';
import iconFacebook from '../../assets/icon-facebook.png';
import iconUser1 from '../../assets/user_1.png';

export default () => (
  <header className="main-header">
    <img src={iconFacebook} alt="" />
    <div className="perfil">
      <img src={iconUser1} alt="" />
      <div className="icon">
        <i className="fas fa-user"></i>
      </div>
      <div className="icon">
        <i className="fas fa-comment"></i>
      </div>
      <div className="icon active">
        <i className="fas fa-bell"></i>
        <span>9</span>
      </div>
    </div>
  </header>
)
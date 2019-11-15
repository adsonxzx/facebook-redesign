import React from 'react';
import './header.scss';
import iconFacebook from '../../assets/icon-facebook.png';
import iconUser from '../../assets/user.png';

export default () => (
  <header className="main-header">
    <img src={iconFacebook} alt=""/>
    <div className="perfil">
      <span className="perfil">Meu perfil</span>
      <img src={iconUser} alt=""/>
    </div>
  </header>
)
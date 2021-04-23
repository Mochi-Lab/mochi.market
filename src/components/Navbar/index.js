import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import logo from 'assets/img/logo.png';
import iconBar from 'assets/icons/icon-bar.svg';
import './style.css';
import { Link } from 'react-router-dom';

import twitter from 'assets/icons/twitter.svg';
import telegram from 'assets/icons/telegram.svg';
import medium from 'assets/icons/medium.svg';
import discord from 'assets/icons/discord.svg';

export default function Navbar() {
  const [btnMenu, setBtnMenu] = useState(false);

  return (
    <div className='navbar-menu'>
      <div className='container'>
        <div className='content-navbar'>
          <Link to='/'>
            <div className='left-navbar'>
              <img src={logo} alt='logo-mochi' />
            </div>
          </Link>
          <div className='btn-bar' onClick={() => setBtnMenu(!btnMenu)}>
            {btnMenu ? <CloseOutlined /> : <img src={iconBar} alt='btn-bar' />}
          </div>
          <div className={`right-navbar  ${btnMenu ? 'active' : ''}`}>
            <Link to='/papers'>
              <div className='route-papers'>Papers</div>
            </Link>
            <Link to='/faq'>
              <div className='route-faq'>FAQs</div>
            </Link>
            <div className='community-channels'>
              <a href='https://twitter.com/MarketMochi' target='_blank' rel='noreferrer'>
                <img src={twitter} alt='twitter' />
              </a>
              <a href='https://t.me/mochi_market' target='_blank' rel='noreferrer'>
                <img src={telegram} alt='telegram' />
              </a>
              <a href='https://mochi-market.medium.com/' target='_blank' rel='noreferrer'>
                <img src={medium} alt='medium' />
              </a>
              <a href='https://discord.com/invite/TarCMncJNm' target='_blank' rel='noreferrer'>
                <img src={discord} alt='discord' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

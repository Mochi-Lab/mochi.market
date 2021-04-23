import './style.css';
import twitter from 'assets/icons/twitter.svg';
import tele from 'assets/icons/tele.svg';
import medium from 'assets/icons/medium.svg';
import discord from 'assets/icons/discord.svg';

export default function Community() {
  return (
    <div className='footer background-pink community'>
      <div className='container'>
        <p className='be-a-part'>Want to be a part of Mochi.Market?</p>
        <p className='join-discussion'>Join the discussion!</p>
      </div>
      <div className='icon-area'>
        <div className='row'>
          <a
            className='col-3 center mg-0'
            href='https://twitter.com/MarketMochi'
            target='_blank'
            rel='noreferrer'
          >
            <div className='cm-icon'>
              <img src={twitter} alt='twitter' />
            </div>
          </a>
          <a
            className='col-3 center mg-0'
            href='https://t.me/mochi_market'
            target='_blank'
            rel='noreferrer'
          >
            <div className='cm-icon'>
              <img src={tele} alt='tele' />
            </div>
          </a>
          <a
            className='col-3 center mg-0'
            href='https://mochi-market.medium.com/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='cm-icon'>
              <img src={medium} alt='medium' />
            </div>
          </a>
          <a
            className='col-3 center mg-0'
            href='https://discord.gg/ZHq7arVS'
            target='_blank'
            rel='noreferrer'
          >
            <div className='cm-icon'>
              <img src={discord} alt='discord' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

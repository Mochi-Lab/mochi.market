import imgIntroductions from 'assets/img/img-introductions.svg';
import './style.css';

export default function Introductions() {
  return (
    <div className='introductions'>
      <div className='content-into'>
        <div className='intro-left'>
          <div className='first-product'>
            First product of{' '}
            <a href='mochilab.org' target='_blank'>
              Mochilab.org
            </a>
          </div>
          <div className='slogan-intro'>
            The multi-chain <br /> decentralized exchange <br /> ecosystem for <br /> non-fungible
            tokens
          </div>
          <div className='description-intro'>
            Mochi.Market initially aims to solve three important current challenges: lack of
            liquidity in the NFT market, lack of monetization strategy for NFT holders during their
            holding period, and lack of crosschain usage between NFTs and FTs.
          </div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`${process.env.PUBLIC_URL}/WhitePaper.pdf`}
          >
            <button type='button' className='btn btn-download-paper'>
              Download Whitepaper
            </button>
          </a>
        </div>
        <div className='intro-right'>
          <img src={imgIntroductions} alt='img-introductions' />
        </div>
      </div>
    </div>
  );
}

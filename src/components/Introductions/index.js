import imgIntroductions from 'assets/img/img-introductions.svg';
import './style.css';

export default function Introductions() {
  return (
    <div className='introductions background-dark'>
      <div className='content-into'>
        <div className='intro-left'>
          <div className='first-product sans-font'>
            First product of{' '}
            <a
              className='purple-color'
              href='https://mochilab.org'
              target='_blank'
              rel='noreferrer'
            >
              MochiLab.org
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
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/file/d/1v2dKeTgOeqWYa6Js93HRJsquVbAAw1KJ/view?usp=sharing'
            >
              <button type='button' className='btn btn-download-paper'>
                Download Whitepaper
              </button>
            </a>
          </div>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://app.uniswap.org/#/swap?inputCurrency=0xbd1848e1491d4308ad18287a745dd4db2a4bd55b'
            >
              <button type='button' className='btn-introductions'>
                Buy $MOMA at Uniswap
              </button>
            </a>
          </div>
          <div>
            <a target='_blank' rel='noopener noreferrer' href='https://www.gate.io/trade/MOMA_USDT'>
              <button type='button' className='btn-introductions'>
                Buy $MOMA at Gate.io
              </button>
            </a>
          </div>
          <div>
            <a target='_blank' rel='noopener noreferrer' href='https://farm.mochi.market'>
              <button type='button' className='btn-introductions'>
                MOMA-ETH LP Farming
              </button>
            </a>
          </div>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://docs.google.com/forms/d/14YF6yKCiAIeDUojWqZj4auAzkg0nyf_zfuvYiZSnB_0/viewform?edit_requested=true'
            >
              <button type='button' className='btn-introductions'>
                NFT Launchpad Application Form
              </button>
            </a>
          </div>
        </div>
        <div className='intro-right'>
          <img src={imgIntroductions} alt='img-introductions' />
        </div>
      </div>
    </div>
  );
}

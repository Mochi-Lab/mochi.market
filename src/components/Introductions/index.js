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
            <a target='_blank' rel='noopener noreferrer' href='https://app.mochi.market'>
              <button type='button' className='btn btn-download-paper'>
                Enter App
              </button>
            </a>
          </div>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xB72842D6F5feDf91D22d56202802Bb9A79C6322E'
            >
              <button type='button' className='btn-introductions'>
                Buy $MOMA at PancakeSwap
              </button>
            </a>
          </div>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://app.uniswap.org/#/swap?outputCurrency=0xbd1848e1491d4308ad18287a745dd4db2a4bd55b&use=V2'
            >
              <button type='button' className='btn-introductions'>
                Buy $MOMA at Uniswap
              </button>
            </a>
          </div>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://quickswap.exchange/#/swap?outputCurrency=0xe3ab61371ecc88534c522922a026f2296116c109'
            >
              <button type='button' className='btn-introductions'>
                Buy $MOMA at Quickswap
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
                $MOMA Liquidity Farming
              </button>
            </a>
          </div>
          <div>
            <a target='_blank' rel='noopener noreferrer' href='https://multichain.xyz/swap'>
              <button type='button' className='btn-introductions'>
                $MOMA ETH-BSC Bridge
              </button>
            </a>
          </div>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://anyswap.exchange/bridge?inputCurrency=0xe3ab61371ecc88534c522922a026f2296116c109&network=polygon'
            >
              <button type='button' className='btn-introductions'>
                $MOMA ETH-Polygon Bridge
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

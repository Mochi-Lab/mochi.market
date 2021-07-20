import './style.css';
import upIcon from 'assets/icons/up-icon.png';
import { useState } from 'react';
import { Collapse } from 'reactstrap';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function FAQ() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);
  const [showAnswer7, setShowAnswer7] = useState(false);
  const [showAnswer8, setShowAnswer8] = useState(false);
  const [showAnswer9, setShowAnswer9] = useState(false);
  const [showAnswer10, setShowAnswer10] = useState(false);
  const [showAnswer11, setShowAnswer11] = useState(false);
  const [showAnswer12, setShowAnswer12] = useState(false);

  const visibleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const visibleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };
  const visibleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };

  const visibleAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
  };

  const visibleAnswer5 = () => {
    setShowAnswer5(!showAnswer5);
  };

  const visibleAnswer6 = () => {
    setShowAnswer6(!showAnswer6);
  };
  const visibleAnswer7 = () => {
    setShowAnswer7(!showAnswer7);
  };
  const visibleAnswer8 = () => {
    setShowAnswer8(!showAnswer8);
  };
  const visibleAnswer9 = () => {
    setShowAnswer9(!showAnswer9);
  };

  const visibleAnswer10 = () => {
    setShowAnswer10(!showAnswer10);
  };

  const visibleAnswer11 = () => {
    setShowAnswer11(!showAnswer11);
  };

  const visibleAnswer12 = () => {
    setShowAnswer12(!showAnswer12);
  };

  return (
    <>
      <Navbar />
      <div className='background-gradient-pink center container-flud'>
        <div className='row justify-content-center'>
          <p className='title-faq col-12'>faq</p>
          <div className='questions col-12 col-md-10'>
            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer1()}>
                  <p className='title-question'>What is MochiLab and Mochi.Market?</p>
                  <img
                    width='25px'
                    className={showAnswer1 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer1}>
                    <p className='answer'>
                      Mochi.Market is the first product of Mochilab.org - a team dedicated to
                      developing practical and innovative technological solutions to enable a
                      seamless web3 NFT economy. For more information on Mochilab.org, please visit{' '}
                      <a href='https://mochilab.org/' target='_blank' rel='noreferrer'>
                        https://mochilab.org/
                      </a>
                      .
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            {/* <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer2()}>
                  <p className='title-question'>What is the aim of Mochi.Market?</p>
                  <img
                    width='25px'
                    className={showAnswer2 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer2}>
                    <p className='answer'>
                      Mochi.Market envisions to be the multi-chain decentralized exchange ecosystem
                      for non-fungible tokens (“NFT”). For more information on how we plan to
                      achieve this aim, please visit our{' '}
                      <a
                        href='https://mochi.market/WhitePaper.pdf'
                        target='_blank'
                        rel='noreferrer'
                      >
                        https://mochi.market/WhitePaper.pdf
                      </a>
                      .
                    </p>
                  </Collapse>
                </div>
              </div>
            </div> */}

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer3()}>
                  <p className='title-question'>Does Mochi have its own token?</p>
                  <img
                    width='25px'
                    className={showAnswer3 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer3}>
                    <p className='answer'>
                      <strong>$MOMA</strong>, initially an ERC20 token and will be bridged over to
                      other chains
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer4()}>
                  <p className='title-question'>What is the total supply of $MOMA tokens?</p>
                  <img
                    width='25px'
                    className={showAnswer4 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer4}>
                    <p className='answer'>100,000,000 $MOMA tokens</p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer5()}>
                  <p className='title-question'>
                    What is the initial circulating token supply of $MOMA tokens?
                  </p>
                  <img
                    width='25px'
                    className={showAnswer5 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer5}>
                    <p className='answer'>8,648,933 $MOMA tokens</p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer6()}>
                  <p className='title-question'>What is the price of $MOMA tokens?</p>
                  <img
                    width='25px'
                    className={showAnswer6 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />

                  <Collapse isOpen={showAnswer6}>
                    <p className='answer'>Our initial listing will be priced at $0.1</p>
                    <p className='answer'>
                      Now that we have listed our MOMA token, for current price, please see one of
                      these websites below:
                    </p>
                    <p className='answer'>
                      <a
                        href='https://www.coingecko.com/en/coins/mochi-market'
                        target='_blank'
                        rel='noreferrer'
                      >
                        CoinGecko
                      </a>
                    </p>
                    <p className='answer'>
                      <a
                        href='https://coinmarketcap.com/currencies/mochi-market/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        CoinMarketCap
                      </a>
                    </p>
                    <p className='answer'>
                      <a
                        href='https://www.dextools.io/app/uniswap/pair-explorer/0x611abc072ee91c0cc19ffef97ac7e69a1a7a17ec'
                        target='_blank'
                        rel='noreferrer'
                      >
                        DexTools
                      </a>
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer7()}>
                  <p className='title-question'>What is the initial market cap?</p>
                  <img
                    width='25px'
                    className={showAnswer7 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer7}>
                    <p className='answer'>$864,893 (including liquidity)</p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer8()}>
                  <p className='title-question'>
                    What does it offer to the users? / Product Suites
                  </p>
                  <img
                    width='25px'
                    className={showAnswer8 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />

                  <Collapse isOpen={showAnswer8}>
                    <p className='answer'>
                      Mochi Marketplace - Where people can buy, sell, exchange peer-to-peer,
                      lending, and borrow peer-to-peer through an exchange like a traditional
                      exchange.
                      <br />
                      <br />
                      Mochi DEX - Where users can use automated market making (“AMM”) mechanisms to
                      exchange between FTs and NFTs on the same or cross-chains.
                      <br />
                      <br />
                      Mochi Rewards System - To increase user interaction in the Mochi.Market
                      ecosystem, there will be a lot of reward systems for users such as trading
                      reward, referral, airdrop, lottery, and NFT launchpad.
                      <br />
                      <br />
                      Mochi Earn - Providing Staking, Yield Farming programs so that users can earn
                      passive profits by providing NFT and FT liquidity for the services of the
                      Mochi.Market ecosystem.
                      <br />
                      <br />
                      Mochi Integration - Provides a way to directly integrate with popular NFT
                      platforms such as OpenSea or Rarible.
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer9()}>
                  <p className='title-question'>Which blockchains are currently supported?</p>
                  <img
                    width='25px'
                    className={showAnswer9 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />

                  <Collapse isOpen={showAnswer9}>
                    <p className='answer'>
                      The Mochi.Market will be launched initially on Binance Smart Chain ("BSC"),
                      followed by other chains such as Harmony, Solana, Ethereum, Polkadot, Cosmos,
                      Near, and popular Layer 2 protocols.
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer10()}>
                  <p className='title-question'>Where is Mochi based?</p>
                  <img
                    width='25px'
                    className={showAnswer10 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer10}>
                    <p className='answer'>
                      The team behind Mochi is spread out internationally while the entity is based
                      in Singapore.
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer11()}>
                  <p className='title-question'>
                    Will the Mochi.Market be able to interact with more blockchains besides Binance
                    Smart Chain?
                  </p>
                  <img
                    width='25px'
                    className={showAnswer11 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />

                  <Collapse isOpen={showAnswer11}>
                    <p className='answer'>
                      We develop Mochi.Market with the cross-chain vision in mind from the beginning
                      of our product development so that users can freely buy, sell, and exchange
                      NFTs as well as use other services between multiple chains easily and
                      transparently.
                      <br />
                      <br />
                      We will launch our product first on BSC in order to take advantage of its
                      active and growing ecosystems, as well as the low transaction fees and fast
                      transaction time on BSC. In the near future, our product will be deployed on
                      Harmony, and other chains such Ethereum, Cosmos, Polkadot, Solana, Near
                      Protocol and other blockchains, allowing users to tap into various blockchain
                      ecosystems.
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className='item col-12 col-md-10'>
              <div className='question'>
                <div className='question__content' onClick={() => visibleAnswer12()}>
                  <p className='title-question'>What is the Mochi.Market Airdrop Service?</p>
                  <img
                    width='25px'
                    className={showAnswer12 ? 'up-icon' : 'up-icon rotate-icon'}
                    src={upIcon}
                    alt='faq'
                  />
                  <Collapse isOpen={showAnswer12}>
                    <p className='answer'>
                      As we are warming up to opening our doors, we would like to reward and
                      encourage early testers and adopters for giving our service a try. This will
                      help us to gather feedback and improve. An NFT will be considered similar to a
                      lottery ticket. Everyone who holds an NFT will be able to take part in the
                      airdrop campaign. Only NFT holders will be able to claim the airdrop. For more
                      info on the first{' '}
                      <a
                        href='https://mochi-market.medium.com/mochi-market-airdrop-service-81ff03bb3454'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Mochi.Market Airdrop Service
                      </a>
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

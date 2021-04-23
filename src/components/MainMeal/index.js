import bring1 from 'assets/icons/main-meal-1.png';
import bring2 from 'assets/icons/main-meal-2.png';
import bring3 from 'assets/icons/main-meal-3.png';
import bring4 from 'assets/icons/main-meal-4.png';
import bring5 from 'assets/icons/main-meal-5.png';

import './style.css';

export default function MainMeal() {
  return (
    <div className='main-meal'>
      <div className='circle'>
        <div />
      </div>
      <div className='container'>
        <div className='title-section'>
          <h1 className='big-title'>The main meal</h1>
        </div>
        <div className='list-main-meal'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-6 col-lg-4 mt-3 mb-3'>
              <div className='item-main-meal'>
                <div className='item-main-meal__content'>
                  <img src={bring1} alt='img-main-meal' />
                  <div className='title-item-main-meal'>Mochi Marketplace</div>
                  <div className='descripton-item-main-meal'>
                    Where people can buy, sell, exchange peer-to-peer, lending, and borrow
                    peer-to-peer through an exchange like a traditional exchange.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4 mt-3 mb-3'>
              <div className='item-main-meal'>
                <div className='item-main-meal__content'>
                  <img src={bring2} alt='img-main-meal' />
                  <div className='title-item-main-meal'>Mochi DEX</div>
                  <div className='descripton-item-main-meal'>
                    Where users can use automated market making (“AMM”) mechanisms to exchange
                    between FTs and NFTs on the same or cross-chains.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4 mt-3 mb-3'>
              <div className='item-main-meal'>
                <div className='item-main-meal__content'>
                  <img src={bring3} alt='img-main-meal' />
                  <div className='title-item-main-meal'>Mochi Rewards System</div>
                  <div className='descripton-item-main-meal'>
                    To increase user interaction in the Mochi Market ecosystem, there will be a lot
                    of reward systems for users such as trading reward, referral, airdrop, lottery,
                    and NFT launchpad.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4 mt-3 mb-3'>
              <div className='item-main-meal'>
                <div className='item-main-meal__content'>
                  <img src={bring4} alt='img-main-meal' />
                  <div className='title-item-main-meal'>Mochi Earn</div>
                  <div className='descripton-item-main-meal'>
                    Staking and yield farming programs, giving opportunity for users to earn passive
                    income by providing NFT and FT liquidity.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4 mt-3 mb-3'>
              <div className='item-main-meal'>
                <div className='item-main-meal__content'>
                  <img src={bring5} alt='img-main-meal' />
                  <div className='title-item-main-meal'>Mochi Integration</div>
                  <div className='descripton-item-main-meal'>
                    Provides a way to directly integrate with popular NFT platforms such as OpenSea
                    or Rarible.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

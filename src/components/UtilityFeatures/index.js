import './style.css';
import utilfeat from 'assets/img/UtilityFeatures.png';
import diamon from 'assets/img/diamon.png';
import liquidity from 'assets/img/liquidity.png';
import sales from 'assets/img/sales.png';
import ticket from 'assets/img/ticket.png';

export default function UtilityFeatures() {
  return (
    <div className='background-light-pink'>
      <div className='utility-features container'>
        <div className='col-12'>
          <p className='big-title purple-color utility-title'>Utility features</p>
          <p className='utility-content'>
            The $MOMA tokens give access to a number of special services on the platform, such as:
          </p>
        </div>
        <div className='col-12' style={{ position: 'relative' }}>
          <div className='center pt-4'>
            <img src={utilfeat} alt='utilfeat' />
            <p></p>
          </div>
          <div className='cera center'>
            <div style={{ width: '100%', height: '70%' }}>
              <div style={{ marginBottom: '50px' }} className='utili-card-area'>
                <div className='center'>
                  <div className='relcar'>
                    <div className='utili-card-back' />
                    <div className='utili-card'>
                      <img src={sales} alt='sales' />
                      <p className='lc-color'>
                        Having a discount on transaction fees if transacted in $MOMA tokens.
                      </p>
                    </div>
                  </div>
                </div>
                <div />
                <div className='center'>
                  <div className='relcar'>
                    <div className='utili-card-back' />
                    <div className='utili-card'>
                      <img src={ticket} alt='ticket' />
                      <p className='lc-color'>
                        Getting special offers and rewards for NFT lotteries and airdrops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='utili-card-area'>
                <div className='center'>
                  <div className='relcar'>
                    <div className='utili-card-back' />
                    <div className='utili-card'>
                      <img src={liquidity} alt='liquidity' />
                      <p className='lc-color'>Provide liquidity to earn more $MOMA.</p>
                    </div>
                  </div>
                </div>
                <div />
                <div className='center'>
                  <div className='relcar'>
                    <div className='utili-card-back' />
                    <div className='utili-card'>
                      <img src={diamon} alt='diamon' />
                      <p className='lc-color'>Staking to earn NFTs.</p>
                    </div>
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

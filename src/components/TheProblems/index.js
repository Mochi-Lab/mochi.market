import './style.css';

import highTicket from 'assets/icons/icon-high-ticket.svg';
import noProfitable from 'assets/icons/no-profitable.svg';
import difficulToSell from 'assets/icons/difficul-to-sell.svg';
import frictionCosts from 'assets/icons/friction-costs.svg';

export default function TheProblems() {
  return (
    <div className='the-problems background-dark-pink'>
      <div className='container'>
        <div className='title-problems'>
          <div className='big-text'>
            <h1 className='big-title'>The Problems</h1>
          </div>
          <div className='small-text col'>What the early NFT adopters are saying:</div>
        </div>
        <div className='list-items-problems'>
          <div className='row'>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={highTicket} alt='item-problems' />
                <div className='title-item'>High Ticket Size</div>
                <div className='description-item'>
                  Buying an NFT is expensive (high ticket size) and costly (high transaction fee)
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={noProfitable} alt='item-problems' />
                <div className='title-item'>Lack of monetization strategy</div>
                <div className='description-item'>
                  Holding NFT very rarely does provide yield and utility
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={difficulToSell} alt='item-problems' />
                <div className='title-item'>Difficult To Sell</div>
                <div className='description-item'>
                  It is difficult to sell an NFT (not enough liquidity)
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={frictionCosts} alt='item-problems' />
                <div className='title-item'>Friction Costs</div>
                <div className='description-item'>
                  Friction costs and untapped participants (lack of interoperability)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

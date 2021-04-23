import highTicket from 'assets/icons/high-ticket.png';
import noProfitable from 'assets/icons/no-profitable.png';
import difficulToSell from 'assets/icons/difficul-to-sell.png';
import frictionCosts from 'assets/icons/friction-costs.png';

import './style.css';

export default function TheProblems() {
  return (
    <div className='the-problems background-dark'>
      <div className='container'>
        <div className='title-problems'>
          <div className='big-text'>
            <h1 className='big-title white-color'>The Problems</h1>
          </div>
          <div className='small-text col background-gradient-pink'>
            What the early NFT adopters are saying:
          </div>
        </div>
        <div className='list-items-problems'>
          <div className='row'>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={highTicket} alt='item-problems' />
                <div className='title-item background-gradient-pink'>High Ticket Size</div>
                <div className='description-item white-color'>
                  Buying an NFT is expensive (high ticket size) and costly (high transaction fee)
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={noProfitable} alt='item-problems' />
                <div className='title-item background-gradient-pink'>
                  Lack of monetization strategy
                </div>
                <div className='description-item white-color'>
                  Holding NFT very rarely does provide yield and utility
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={difficulToSell} alt='item-problems' />
                <div className='title-item background-gradient-pink'>Difficult To Sell</div>
                <div className='description-item white-color'>
                  It is difficult to sell an NFT (not enough liquidity)
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='item-problem'>
                <img src={frictionCosts} alt='item-problems' />
                <div className='title-item background-gradient-pink'>Friction Costs</div>
                <div className='description-item white-color'>
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

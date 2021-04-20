import bring1 from 'assets/icons/bring-to-1.png';
import bring2 from 'assets/icons/bring-to-2.png';
import bring3 from 'assets/icons/bring-to-3.png';

import './style.css';

export default function WeBringTo() {
  return (
    <div className='we-bring-to'>
      <div className='container'>
        <div className='title-section'>
          <h1>What we bring to the table</h1>
        </div>
        <div className='list-itm-bring'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <div className='item-bring'>
                <img src={bring1} alt='bring to 1' />
                <div className='description-bring-to'>
                  An economy where NFT want-to-owns do not feel being left out - everyone can buy it
                </div>
                <ul className='text-bring-to'>
                  <li>Fractionalization</li>
                  <li>Low Transaction Fee</li>
                  <li>DEX</li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='item-bring'>
                <img src={bring2} alt='bring to 1' />
                <div className='description-bring-to'>
                  An economy where NFT holders do not feel being left out for holding NFT - Holding
                  incentives
                </div>
                <ul className='text-bring-to'>
                  <li>Fractionalization</li>
                  <li>Staking</li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='item-bring'>
                <img src={bring3} alt='bring to 1' />
                <div className='description-bring-to'>
                  An economy where NFT and Fungible tokens (“FT”) are seamlessly intersecting across
                  multiple blockchains - Interoperability
                </div>
                <ul className='text-bring-to'>
                  <li>Interoperability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

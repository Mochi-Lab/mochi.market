import './style.css';
import logo from 'assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer background-pink footer-pt'>
      <div className='container '>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-4 mb-5'>
            <div className='col'>
              <img className='footer-logo' src={logo} alt='mochi logo' />
              <p className='company-name sasoon-font'>MochiLab Foundation Ltd</p>
              <p className='company-address sasoon-font'>
                3 Fraser Street #5-25 Duo Tower, Singapore
              </p>
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <div className='row fttn'>
              <div className='col-12 col-lg-4 mb-5'>
                <p className='fttn-hd mb-4'>Navigation</p>
                <p className='fttn-ct mb-4'>Product</p>
                <p className='fttn-ct mb-4'>Tokenomics</p>
                <p className='fttn-ct mb-4'>Roadmap</p>
                <p className='fttn-ct'>Team</p>
                <Link to='/privacy-policy-and-terms-conditions'>
                  <p className='fttn-ct'>Privacy Policy & Tern and Conditions</p>
                </Link>
              </div>
              <div className='col-12 col-lg-4 mb-5'>
                <p className='fttn-hd mb-4'>Documents</p>
                <p className='fttn-ct mb-4'>One Page</p>
                <p className='fttn-ct mb-4'>Pitch Deck</p>
                <p className='fttn-ct mb-4'>White Paper</p>
                <p className='fttn-ct'>Light Paper</p>
              </div>
              <div className='col-12 col-lg-4 mb-5'>
                <p className='fttn-hd mb-4'>Community</p>
                <a href='https://t.me/mochi_market' target='_blank' rel='noreferrer'>
                  <p className='fttn-ct mb-4'>Telegram</p>
                </a>
                <a href='https://twitter.com/MarketMochi' target='_blank' rel='noreferrer'>
                  <p className='fttn-ct mb-4'>Twitter</p>
                </a>
                <a href='https://mochi-market.medium.com/' target='_blank' rel='noreferrer'>
                  <p className='fttn-ct mb-4'>Medium</p>
                </a>
                <a href='https://discord.gg/ZHq7arVS' target='_blank' rel='noreferrer'>
                  <p className='fttn-ct'>Discord</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

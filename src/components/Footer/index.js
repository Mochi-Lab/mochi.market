import './style.css';
import logo from 'assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer footer-pt'>
      <div className='container '>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-4 mb-5'>
            <div className='col'>
              <img className='footer-logo' src={logo} alt='mochi logo' />
              <a href='mailto:contact@mochilab.org'>
                <p className='company-name sasoon-font'>contact@mochilab.org</p>
              </a>
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
                <p className='fttn-ct mb-4'>
                  <Link to='/#Product'>Product</Link>
                </p>
                <p className='fttn-ct mb-4'>
                  <Link to='/#Tokenomics'>Tokenomics</Link>
                </p>
                <p className='fttn-ct mb-4'>
                  <Link to='/#Roadmap'>Roadmap</Link>
                </p>
                <p className='fttn-ct'>
                  <Link to='/#Team'>Team</Link>
                </p>
                <Link to='/privacy-policy-and-terms-conditions'>
                  <p className='fttn-ct'>Privacy Policy & Terms and Conditions</p>
                </Link>
              </div>
              {/* <div className='col-12 col-lg-4 mb-5'>
                <p className='fttn-hd mb-4'>Documents</p>
                <p className='fttn-ct mb-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/1p5gr8lP1NONWPTiozgHPUZwsbRSpLwB2/view?usp=sharing'
                  >
                    One Page
                  </a>
                </p>
                <p className='fttn-ct mb-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/15Dj5Igoftcl3ddC7ePkfa3Z1h_4F--lQ/view?usp=sharing'
                  >
                    Pitch Deck
                  </a>
                </p>
                <p className='fttn-ct mb-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/1v2dKeTgOeqWYa6Js93HRJsquVbAAw1KJ/view?usp=sharing'
                  >
                    White Paper
                  </a>
                </p>
                <p className='fttn-ct'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/1XmWdBMIPJxZB9VYISMXmAXp3dPZsNkgk/view?usp=sharing'
                  >
                    Light Paper
                  </a>
                </p>
              </div> */}
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
                {/* <a href='https://discord.gg/TarCMncJNm' target='_blank' rel='noreferrer'>
                  <p className='fttn-ct'>Discord</p>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

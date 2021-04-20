import './style.css';
import logo from 'assets/img/logo.png';

export default function Footer() {
  return (
    <div className='footer background-pink footer-pt'>
      <div className='container '>
        <div className='row'>
          <div className='col-4'>
            <img className='footer-logo' src={logo} alt='mochi logo' />
            <p className='company-name sasoon-font'>MochiLab Foundation Ltd</p>
            <p className='company-address sasoon-font'>
              3 Fraser Street #5-25 Duo Tower, Singapore
            </p>
          </div>
          <div className='col-8'>
            <div className='row fttn'>
              <div className='col-4'>
                <p className='fttn-hd mb-4'>Navigation</p>
                <p className='fttn-ct sans-font mb-4'>Product</p>
                <p className='fttn-ct sans-font mb-4'>Tokenomics</p>
                <p className='fttn-ct sans-font mb-4'>Roadmap</p>
                <p className='fttn-ct sans-font'>Team</p>
              </div>
              <div className='col-4'>
                <p className='fttn-hd mb-4'>Documents</p>
                <p className='fttn-ct sans-font mb-4'>One Page</p>
                <p className='fttn-ct sans-font mb-4'>Pitch Deck</p>
                <p className='fttn-ct sans-font mb-4'>White Paper</p>
                <p className='fttn-ct sans-font'>Light Paper</p>
              </div>
              <div className='col-4'>
                <p className='fttn-hd mb-4'>Community</p>
                <p className='fttn-ct sans-font mb-4'>Telegram</p>
                <p className='fttn-ct sans-font mb-4'>Twitter</p>
                <p className='fttn-ct sans-font mb-4'>Medium</p>
                <p className='fttn-ct sans-font'>Discord</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

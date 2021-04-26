import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import paper1 from 'assets/icons/paper-1.png';
import paper2 from 'assets/icons/paper-2.png';
import paper3 from 'assets/icons/paper-3.png';
import paper4 from 'assets/icons/paper-4.png';

import './style.css';

export default function Papers() {
  return (
    <>
      <Navbar />
      <div className='papers background-gradient-pink'>
        <div className='container'>
          <div className='title-paper'>
            <h1 className='big-title light-pink'>Papers</h1>
          </div>
          <div className='list-item-papers'>
            <div className='row justify-content-center'>
              <div className='col-6 col-md-3 align-self-center mt-3 mb-3'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/OnePage.pdf`}
                >
                  <div className='item-paper'>
                    <div className='content-item-paper'>
                      <img src={paper1} alt='papers' />
                      <div className='name-paper'>Onepager</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-6 col-md-3 align-self-center mt-3 mb-3'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/PitchDeck.pdf`}
                >
                  <div className='item-paper'>
                    <div className='content-item-paper'>
                      <img src={paper2} alt='papers' />
                      <div className='name-paper'>Pitch Deck</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-6 col-md-3 align-self-center mt-3 mb-3'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/LightPaper.pdf`}
                >
                  <div className='item-paper'>
                    <div className='content-item-paper'>
                      <img src={paper3} alt='papers' />
                      <div className='name-paper'>Lightpaper</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-6 col-md-3 align-self-center mt-3 mb-3'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/WhitePaper.pdf`}
                >
                  <div className='item-paper'>
                    <div className='content-item-paper'>
                      <img src={paper4} alt='papers' />
                      <div className='name-paper'>Whitepaper</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

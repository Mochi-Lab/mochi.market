import './style.css';
import cinchBlock from 'assets/partners/cinchblock.png';
import blockStar from 'assets/partners/blockstar.svg';
import btxCapital from 'assets/partners/btx-capital.png';
import existential from 'assets/partners/existential.png';
import magnus from 'assets/partners/magnus_capital.png';
import raptor from 'assets/partners/raptor.png';
import x21 from 'assets/partners/x21.svg';
import seedify from 'assets/partners/seedify.png';
import blocksync from 'assets/partners/blocksync.png';
import mercurius from 'assets/partners/mercurius.png';
import moonWhale from 'assets/partners/moon-whale.png';

const members = [
  {
    image: magnus,
    url: 'https://magnusdigitalassets.com/',
    name: 'magnus capital',
    height: '76px',
    width: '144px',
  },
  {
    image: raptor,
    url: 'https://www.raptorcapital.io/',
    name: 'raptor capital',
    height: '55px',
    width: '178px',
  },
  {
    image: btxCapital,
    url: 'https://btx.capital/',
    name: 'btx capital',
    height: '23px',
    width: '219px',
  },
  {
    image: x21,
    url: 'https://x21digital.com/',
    name: 'x21 digital',
    height: '82px',
    width: '101px',
  },
  {
    image: moonWhale,
    url: 'https://moonwhale.ventures/',
    name: 'moonwhale',
    height: '89px',
    width: '129px',
  },
  {
    image: cinchBlock,
    url: 'https://www.cinchblock.com/',
    name: 'cinch block',
    height: '35px',
    width: '182px',
  },
  {
    image: seedify,
    url: 'https://seedify.fund/',
    name: 'seedify fund',
    height: '35px',
    width: '220px',
  },
  {
    image: existential,
    url: 'https://exst.vc/',
    name: 'existential capital',
    height: '46px',
    width: '203px',
  },
  {
    image: blocksync,
    url: 'https://www.blocksync.com/',
    name: 'blocksync ventures',
    height: '55px',
    width: '188px',
  },
  {
    image: blockStar,
    url: 'https://blockstar.vc/',
    name: 'block star',
    height: '41px',
    width: '152px',
  },
  {
    image: mercurius,
    url: '',
    name: 'mercurius',
    height: '61px',
    width: '215px',
  },
];

function Partner({ data }) {
  const { image, name, url, height, width } = data;
  return (
    <a className='center' href={url} target='_blank' rel='noreferrer'>
      <div className='partner-card'>
        <img style={{ height, width }} src={image} alt={name} />
      </div>
    </a>
  );
}

export default function Partners() {
  return (
    <div className='background-dark'>
      <div className='partners center container'>
        <div>
          <p className='big-title lc-color'>Investors And Partners</p>
        </div>
        <div>
          <div className='image-area row'>
            {members.map((partner, index) => (
              <div className='col-6 col-md-4 col-lg-3 center' key={index}>
                <Partner data={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

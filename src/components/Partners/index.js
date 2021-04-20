import './style.css';
import cinchBlock from 'assets/partners/cinchblock.png';
import blockStar from 'assets/partners/blockstar.svg';
import btxCapital from 'assets/partners/btx-capital.png';
import existential from 'assets/partners/existential.png';
import magnus from 'assets/partners/magnus_capital.png';
import raptor from 'assets/partners/raptor.png';
import x21 from 'assets/partners/x21.png';
import seedify from 'assets/partners/seedify.png';
import blocksync from 'assets/partners/blocksync.svg';
import mercurius from 'assets/partners/mercurius.png';
import moonWhale from 'assets/partners/moon-whale.png';

function Partner({ data }) {
  const { image, name, url } = data;
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div className='partner-card cursor-pointer content flex justify-center rounded-xl'>
        <img src={image} alt={name} />
        {/* <p className='name'>{name}</p> */}
      </div>
    </a>
  );
}

export default function Partners() {
  const members = [
    {
      image: magnus,
      url: 'https://magnusdigitalassets.com/',
      name: 'magnus capital',
    },
    {
      image: raptor,
      url: 'https://www.raptorcapital.io/',
      name: 'raptor capital',
    },
    {
      image: btxCapital,
      url: 'https://btx.capital/',
      name: 'btx capital',
    },
    {
      image: x21,
      url: 'https://x21digital.com/',
      name: 'x21 digital',
    },
    {
      image: moonWhale,
      url: 'https://moonwhale.ventures/',
      name: 'moonwhale',
    },
    {
      image: cinchBlock,
      url: 'https://www.cinchblock.com/',
      name: 'cinch block',
    },
    {
      image: seedify,
      url: 'https://seedify.fund/',
      name: 'seedify fund',
    },
    {
      image: existential,
      url: 'https://exst.vc/',
      name: 'existential capital',
    },
    {
      image: blocksync,
      url: 'https://www.blocksync.com/',
      name: 'blocksync ventures',
    },
    {
      image: blockStar,
      url: 'https://blockstar.vc/',
      name: 'block star',
    },
    {
      image: mercurius,
      url: '',
      name: 'mercurius',
    },
  ];

  return (
    <div className='partners center container'>
      <div>
        <p className='big-title'>Investors And Partners</p>
      </div>
      <div>
        <p className='title-partner'></p>
        <div className='image-area row justify-content-center'>
          {members.map((partner, index) => (
            <div className='col-6 col-md-4 col-lg-3' key={index}>
              <Partner data={partner} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

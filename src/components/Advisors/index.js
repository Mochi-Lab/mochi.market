import './style.css';

import matth from 'assets/advisors/matth.png';
import oliver from 'assets/advisors/oliver.png';
import hatu from 'assets/advisors/hatu.png';
import anirban from 'assets/advisors/anirban.jpg';
import lester from 'assets/advisors/lester.png';

import iconLinkedin from 'assets/icons/linkedIn.svg';
import iconTwitter from 'assets/icons/red-tw.svg';

const advisors = [
  {
    image: matth,
    name: 'Matthijs van Driel',
    role: 'ADVISOR',
    linkedin: 'https://vn.linkedin.com/',
    twitter: 'https://twitter.com/',
  },
  {
    image: oliver,
    name: 'Oliver Nguyen',
    role: 'ADVISOR',
    linkedin: 'https://www.linkedin.com/in/oliver-ngg-756128159/',
    twitter: 'https://twitter.com/Oliver_ngg',
  },
  {
    image: hatu,
    name: 'Hassan (Hatu) Sheikh',
    role: 'ADVISOR',
    linkedin: 'https://www.linkedin.com/in/hassan-hatu-sheikh-182a94a8/',
    twitter: 'https://twitter.com/TheHatuSS',
  },
  {
    image: anirban,
    name: 'Anirban Saha',
    role: 'PRODUCT ADVISOR',
    linkedin: 'https://vn.linkedin.com/',
    twitter: 'https://twitter.com/home',
  },
  {
    image: lester,
    name: 'Lester Lim',
    role: 'ADVISOR',
    linkedin: 'https://www.linkedin.com/in/lesterlim15/',
    twitter: 'https://twitter.com/home',
  },
];

function Advidor({ data }) {
  let { image, name, role, linkedin, twitter } = data;
  return (
    <div className='member-card'>
      <div className='center'>
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <div className='member-image img-bg' />
          <div className='member-image'>
            <img src={image} alt={name + role} />
          </div>
        </div>
      </div>

      <p className='name lc-color'>{name}</p>
      <p className='role lc-color'>{role}</p>
      <div className='footer-card row center'>
        <div className='background-dark' style={{ marginRight: '20px' }}>
          <img src={iconLinkedin} alt='linkedin' onClick={() => window.open(linkedin)} />
        </div>
        <div className='background-dark'>
          <img src={iconTwitter} alt='twitter' onClick={() => window.open(twitter)} />
        </div>
      </div>
    </div>
  );
}

export default function Advisors() {
  return (
    <div className='background-dark'>
      <div className='advisors container'>
        <div className='col-12'>
          <p className='big-title lc-color'>Advisors</p>
        </div>
        <div className='col-12'>
          <div className='image-area row justify-content-center'>
            {advisors.map((advisor, index) => (
              <div className='col-6 col-md-4 col-lg-4 center' key={index}>
                <Advidor key={index} data={advisor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

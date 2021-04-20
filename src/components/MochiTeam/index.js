import './style.css';

import chien from 'assets/member/chien.png';
import cong from 'assets/member/cong.png';
import ha from 'assets/member/ha.png';
import hoang from 'assets/member/hoang.png';
import kien from 'assets/member/kien.png';
import nghia from 'assets/member/nghia.png';
import tan from 'assets/member/tan.png';
import andrew from 'assets/member/andrew.jpg';

import iconLinkedin from 'assets/icons/linkedIn.svg';
import iconTwitter from 'assets/icons/twitter.svg';

const members = [
  {
    image: ha,
    name: 'Sophia Ho',
    role: 'CO-FOUNDER & CEO',
    linkedin: 'https://www.linkedin.com/in/sophia-ha-ho/',
    twitter: 'https://twitter.com/SophiaHaHo',
  },
  {
    image: kien,
    name: 'Kevin Do',
    role: 'CO-FOUNDER & CTO',
    linkedin: 'https://www.linkedin.com/in/dotrungkien',
    twitter: 'https://twitter.com/kevindo90',
  },
  {
    image: chien,
    name: 'Charles Tran',
    role: 'CO-FOUNDER & CPO',
    linkedin: 'https://www.linkedin.com/in/chien-tran-b52339159',
    twitter: 'https://twitter.com/',
  },
  {
    image: hoang,
    name: 'Taio Newgate',
    role: 'CO-FOUNDER & DEV',
    linkedin: 'https://www.linkedin.com/in/taio-newgate-7027771b1/',
    twitter: 'https://twitter.com/SnowstormAnivia',
  },
  {
    image: nghia,
    name: 'Nolan Ngo',
    role: 'CO-FOUNDER & DEV',
    linkedin: 'https://www.linkedin.com/in/ngo-nolan-b5b67720b/',
    twitter: 'https://twitter.com/nolanngo97',
  },
  {
    image: tan,
    name: 'Elio Tan',
    role: 'CO-FOUNDER & DEV',
    linkedin: 'https://www.linkedin.com/in/elio-tan-b13b3a203/',
    twitter: 'https://twitter.com/TnTrnh5',
  },
  {
    image: cong,
    name: 'Roberto Le',
    role: 'CO-FOUNDER & DEV',
    linkedin: 'https://www.linkedin.com/in/l%C3%AA-th%C3%A0nh-c%C3%B4ng-b937a1164/',
    twitter: 'https://twitter.com/lwconga7',
  },
  {
    image: andrew,
    name: 'Andrew Fennell',
    role: 'COMMUNITY MANAGER \n & BDM',
    linkedin: 'https://www.linkedin.com/in/andrewfennellbdm/',
    twitter: 'https://twitter.com/Andrewfunbags',
  },
];

function Member({ data }) {
  let { image, name, role, linkedin, twitter } = data;
  return (
    <div className='member-card '>
      <div className='center'>
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <div className='member-image team-purble' />
          <div className='member-image'>
            <img className='memimg' src={image} alt={name + role} />
          </div>
        </div>
      </div>

      <p className='name dark-color'>{name}</p>
      <p className='role purple-color'>{role}</p>
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

export default function MochiTeam() {
  return (
    <div className='background-light'>
      <div className='container mochiteam'>
        <div className='col-12'>
          <p className='big-title dark-color'>Team</p>
        </div>
        <div className='col-12'>
          <div className='image-area row justify-content-center'>
            {members.map((member, index) => (
              <div className='col-6 col-md-4 col-lg-3 center' key={index}>
                <Member key={index} data={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

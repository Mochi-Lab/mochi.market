import './style.css';

export default function Roadmap() {
  const timelines = [
    {
      stage: 'Q1, 2021',
      content: 'Project Commencement',
    },
    {
      stage: 'Q2, 2021',
      content: 'Mochi Marketplace & Mochi Earn',
    },
    {
      stage: 'Q3, 2021',
      content: 'Mochi DEX',
    },
    {
      stage: 'Q4, 2021',
      content: 'NFT Launchpad & Mochi Integration',
    },
    {
      stage: '2022',
      content: 'Growing Mochi Ecosystem',
    },
    {
      stage: '2023',
      content: 'Community Driven Ecosystem',
    },
  ];

  return (
    <div className='background-light'>
      <div className='container roadmap'>
        <div className='col-12'>
          <p className='big-title dark-color'>The Roadmap</p>
        </div>
        <div style={{ position: 'relative' }} className='col-12'>
          <div className='line row'>
            {timelines.map((timeline, index) => (
              <div key={index} className='col-lg-2 center'>
                <div className='dot '>
                  <div className={`${index === 1 ? '' : 'inactive'}`} />
                </div>
              </div>
            ))}
          </div>
          <div className='row underline'>
            {timelines.map((timeline, index) => (
              <div key={index} className='timeline-box col-lg-2'>
                <p className='purple-color time-stage '>{timeline.stage}</p>
                <p className='dark-color'>{timeline.content}</p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

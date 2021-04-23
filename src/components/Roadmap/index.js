import './style.css';
import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

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
  const items = [
    {
      from: 0,
      to: 3,
    },
    {
      from: 3,
      to: 6,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const road = (from, to) => {
    return (
      <div style={{ position: 'relative', marginTop: '20px' }} className='col-12'>
        <div className='line row'>
          <div className='line-dot'>
            {timelines.slice(from, to).map((timeline, index) => (
              <div key={index} className='center'>
                <div className='dot '>
                  <div className={`${timeline.stage === 'Q2, 2021' ? '' : 'inactive'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='row underline'>
          {timelines.slice(from, to).map((timeline, index) => (
            <div key={index} className='timeline-box'>
              <p className='lc-color time-stage '>{timeline.stage}</p>
              <p className='lc-color time-content'>{timeline.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.from}
      >
        {road(item.from, item.to)}
      </CarouselItem>
    );
  });

  return (
    <div className='background-purple'>
      <div className='container roadmap'>
        <div className='col-12'>
          <p className='big-title white-color'>The Roadmap</p>
        </div>
        {window.innerWidth < 1196 ? (
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
          </Carousel>
        ) : (
          road(0, 6)
        )}
      </div>
    </div>
  );
}

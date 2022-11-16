import { useEffect } from 'react';

import './Content.styles.css';

const Adam = {
  work: {
    'Daily standup': [true, 'Lorem ipsum'],
    'Fix bug': [true],
    'Mentor intern': [true],
    'Interview candidates': [false],
    'Launch site': [false],
    'Buy starbucks for co-workers': [true],
  },
  clean: { 'clean kitchen': [true, 'Lorem ipsum'] },
  groceries: {},
  'practice instrument': {},
  read: {},
};

const Content = () => {
  return (
    <>
      <hr
        style={{
          height: '2px',
          backgroundColor: 'rgb(244,244,244)',
          border: 'none',
          margin: '0 20px',
        }}
      />

      {/* Content */}
      {Object.keys(Adam).map((section, index) => {
        return (
          <div key={index}>
            <div className='content-container'>
              <div>
                <span>{drag}</span>
              </div>

              <div className='chevron-down'>
                <span>{chevronDown}</span>
              </div>

              <p>{section}</p>

              <span>{dots}</span>
            </div>

            {/* tasks */}
            {Object.entries(Adam[section]).map(([task, value], subindex) => {
              return (
                <div key={subindex} className={'tasks-container'}>
                  <span className='checkbox-icon'>
                    {value[0] ? checkedBox : uncheckedBox}
                  </span>
                  <p className={value[0] ? 'checked' : 'unchecked'}>{task}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Content;

const checkedBox = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20px'
    height='20px'
    viewBox='0 0 512 512'
  >
    <path d='M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z' />
  </svg>
);

const uncheckedBox = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20px'
    height='20px'
    viewBox='0 0 512 512'
    style={{
      fill: 'rgb(217,217,217)',
    }}
  >
    <path d='M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64z' />
  </svg>
);

const chevronDown = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20px'
    height='20px'
    viewBox='0 -30 512 512'
  >
    <path d='M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z' />
  </svg>
);

const chevronRight = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20px'
    height='20px'
    viewBox='0 0 512 512'
  >
    <path d='m184.7 413.1 2.1-1.8 156.5-136c5.3-4.6 8.6-11.5 8.6-19.2 0-7.7-3.4-14.6-8.6-19.2L187.1 101l-2.6-2.3C182 97 179 96 175.8 96c-8.7 0-15.8 7.4-15.8 16.6v286.8c0 9.2 7.1 16.6 15.8 16.6 3.3 0 6.4-1.1 8.9-2.9z' />
  </svg>
);

const drag = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='1 0 24 24'
    style={{
      width: '15px',
      height: '15px',
      fill: 'rgba(106,106,106,0.5)',
    }}
  >
    <path fill='none' d='M0 0h24v24H0V0z' />
    <path d='M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
  </svg>
);

const dots = (
  <svg
    viewBox='0 0 13 3'
    style={{
      width: '14px',
      height: '14px',
      fill: 'rgba(106,106,106,0.5)',
    }}
  >
    <g>
      <path d='M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z'></path>
      <path d='M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z'></path>
      <path d='M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z'></path>
    </g>
  </svg>
);

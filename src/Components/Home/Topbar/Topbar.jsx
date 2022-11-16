import { useEffect, useRef, useState } from 'react';
import './Topbar.styles.css';

const Topbar = () => {
  const [isTaskDrpdwnOpen, setIsTaskDrpdwnOpen] = useState(false);
  const myTasksDots = useRef();

  // check to see if mouse is clicked outside of sort button
  useEffect(() => {
    const allTasksBtnHandler = event => {
      if (!myTasksDots.current.contains(event.target)) {
        setIsTaskDrpdwnOpen(false);
      }
    };
    document.addEventListener('mousedown', allTasksBtnHandler);
    return () => {
      document.removeEventListener('mousedown', allTasksBtnHandler);
    };
  });

  // open or close dropdown
  useEffect(() => {
    const myTasksDrpdwn = myTasksDots.current;

    isTaskDrpdwnOpen
      ? myTasksDrpdwn.classList.add('active')
      : myTasksDrpdwn.classList.remove('active');
  }, [isTaskDrpdwnOpen]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  return (
    <div className='topbar'>
      <span>
        <p>My Tasks</p>
      </span>
      <span className='task-count-circle'>
        <p className='task-count'>5</p>
      </span>

      {/* my tasks dots dropdown */}
      <div ref={myTasksDots} className='my-tasks-dots-container'>
        <span
          className='my-tasks-dots'
          onClick={() =>
            setIsTaskDrpdwnOpen(isTaskDrpdwnOpen => !isTaskDrpdwnOpen)
          }
        >
          {dots}
        </span>

        <div className='my-tasks-drpdwn'>
          <button>
            <span>{addSection}</span>
            <p>Add new section</p>
          </button>

          <button>
            <span>{clearSection}</span>
            <p>Clear sections</p>
          </button>

          <hr
            style={{
              height: '2px',
              backgroundColor: 'rgb(244,244,244)',
              border: 'none',
              width: '100%',
              margin: '7.5px 0',
            }}
          />

          <button>
            <span>{trashcan}</span>
            <p>Clear tasks</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

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

const addSection = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className='add-section-icon'
    style={{
      width: '18px',
      height: '18px',
      fill: 'rgba(106,106,106,0.5)',
    }}
  >
    <path d='M14,12.5H13v-1a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm5-7H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z' />
  </svg>
);

const clearSection = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    style={{
      width: '18px',
      height: '18px',
      fill: 'rgb(204,96,81)',
    }}
  >
    <path d='M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V10H20ZM20,8H4V4H20Z' />
  </svg>
);

const trashcan = (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: '18px',
      height: '18px',
      fill: 'rgb(204,96,81)',
    }}
  >
    <path d='M4.8623 15.4287H11.1445C12.1904 15.4287 12.8672 14.793 12.915 13.7402L13.3799 3.88965H14.1318C14.4736 3.88965 14.7402 3.62988 14.7402 3.28809C14.7402 2.95312 14.4736 2.69336 14.1318 2.69336H11.0898V1.66797C11.0898 0.62207 10.4268 0 9.29199 0H6.69434C5.56641 0 4.89648 0.62207 4.89648 1.66797V2.69336H1.86133C1.5332 2.69336 1.25977 2.95312 1.25977 3.28809C1.25977 3.62988 1.5332 3.88965 1.86133 3.88965H2.62012L3.08496 13.7471C3.13281 14.7998 3.80273 15.4287 4.8623 15.4287ZM6.1543 1.72949C6.1543 1.37402 6.40039 1.14844 6.7832 1.14844H9.20312C9.58594 1.14844 9.83203 1.37402 9.83203 1.72949V2.69336H6.1543V1.72949ZM4.99219 14.2188C4.61621 14.2188 4.34277 13.9453 4.32227 13.542L3.86426 3.88965H12.1152L11.6709 13.542C11.6572 13.9453 11.3838 14.2188 10.9941 14.2188H4.99219ZM5.9834 13.1182C6.27051 13.1182 6.45508 12.9336 6.44824 12.667L6.24316 5.50293C6.23633 5.22949 6.04492 5.05176 5.77148 5.05176C5.48438 5.05176 5.2998 5.23633 5.30664 5.50293L5.51172 12.667C5.51855 12.9404 5.70996 13.1182 5.9834 13.1182ZM8 13.1182C8.28711 13.1182 8.47852 12.9336 8.47852 12.667V5.50293C8.47852 5.23633 8.28711 5.05176 8 5.05176C7.71289 5.05176 7.52148 5.23633 7.52148 5.50293V12.667C7.52148 12.9336 7.71289 13.1182 8 13.1182ZM10.0166 13.1182C10.29 13.1182 10.4746 12.9404 10.4814 12.667L10.6934 5.50293C10.7002 5.23633 10.5088 5.05176 10.2285 5.05176C9.95508 5.05176 9.76367 5.22949 9.75684 5.50293L9.54492 12.667C9.53809 12.9336 9.72949 13.1182 10.0166 13.1182Z'></path>
  </svg>
);

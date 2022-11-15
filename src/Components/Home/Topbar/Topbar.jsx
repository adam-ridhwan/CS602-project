import './Topbar.styles.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <span>
        <p>My Tasks</p>
      </span>

      <span className='task-count-circle'>
        <p className='task-count'>5</p>
      </span>

      <span className='dots'>
        <div>{dots}</div>
      </span>
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

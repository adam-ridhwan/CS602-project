import './Adjustments.styles.css';

const Adjustments = () => {
  return (
    <>
      <div className='adjustments-container'>
        <div className='adjustments-alignment'>
          <button className='tasks'>
            <p>All Tasks</p>
          </button>

          <button className='sorting'>
            <p>Sort</p>
          </button>

          <button className='search'>
            <span>{searchIcon}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Adjustments;

const searchIcon = (
  <svg
    viewBox='0 0 15 15'
    style={{
      width: '13px',
      height: '13px',
      fill: 'rgba(106,106,106,0.5)',
    }}
  >
    <path d='M0 6.35938C0 9.86719 2.85156 12.7188 6.35938 12.7188C7.66406 12.7188 8.85938 12.3203 9.85938 11.6406L13.4531 15.2344C13.6719 15.4609 13.9766 15.5625 14.2812 15.5625C14.9453 15.5625 15.4219 15.0625 15.4219 14.4141C15.4219 14.1016 15.3125 13.8125 15.1016 13.5938L11.5312 10.0156C12.2734 8.99219 12.7188 7.72656 12.7188 6.35938C12.7188 2.85156 9.86719 0 6.35938 0C2.85156 0 0 2.85156 0 6.35938ZM1.65625 6.35938C1.65625 3.76562 3.75781 1.65625 6.35938 1.65625C8.95312 1.65625 11.0625 3.76562 11.0625 6.35938C11.0625 8.95312 8.95312 11.0625 6.35938 11.0625C3.75781 11.0625 1.65625 8.95312 1.65625 6.35938Z'></path>
  </svg>
);

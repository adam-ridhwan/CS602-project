import { useEffect, useRef, useState } from 'react';
import './SortButton.styles.css';

const SortButton = () => {
  const [isSortDrpdwnOpen, setIsSortDrpdwnOpen] = useState(false);
  const sortBtnRef = useRef();

  useEffect(() => {
    const sortBtnHandler = event => {
      if (!sortBtnRef.current.contains(event.target)) {
        setIsSortDrpdwnOpen(false);
      }
    };
    document.addEventListener('mousedown', sortBtnHandler);
    return () => {
      document.removeEventListener('mousedown', sortBtnHandler);
    };
  });

  useEffect(() => {
    const sortDrpdwn = sortBtnRef.current;

    if (isSortDrpdwnOpen) {
      sortDrpdwn.classList.add('active');
      return;
    } else {
      sortDrpdwn.classList.remove('active');
    }
  }, [isSortDrpdwnOpen]);

  useEffect(() => {
    console.log(isSortDrpdwnOpen);
  }, [isSortDrpdwnOpen]);

  return (
    <>
      <div ref={sortBtnRef} className='sort-container'>
        <button
          className='link'
          onClick={() =>
            setIsSortDrpdwnOpen(isSortDrpdwnOpen => !isSortDrpdwnOpen)
          }
        >
          <p>Sort</p>
        </button>

        <div className='dropdown-menu'>
          <div>
            <p>Ascending</p>
          </div>

          <div>
            <p>Descending</p>
          </div>

          <hr
            style={{
              height: '2px',
              backgroundColor: 'rgb(244,244,244)',
              border: 'none',
              margin: '7.5px 0',
            }}
          />

          <div>
            <p>Remove Sort</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortButton;

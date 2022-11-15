import './Adjustments.styles.css';
import SearchButton from './Search Button/SearchButton';

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

          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default Adjustments;

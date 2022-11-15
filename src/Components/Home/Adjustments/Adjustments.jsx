import './Adjustments.styles.css';
import SearchButton from './SearchButton/SearchButton';
import SortButton from './SortButton/SortButton';

const Adjustments = () => {
  return (
    <>
      <div className='adjustments-container'>
        <div className='adjustments-alignment'>
          <button className='tasks'>
            <p>All Tasks</p>
          </button>

          <SortButton />

          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default Adjustments;

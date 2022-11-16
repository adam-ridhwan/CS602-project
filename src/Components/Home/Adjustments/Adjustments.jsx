import './Adjustments.styles.css';
import AllTasksButton from './AllTasksButton/AllTasksButton';
import SearchButton from './SearchButton/SearchButton';
import SortButton from './SortButton/SortButton';

const Adjustments = () => {
  return (
    <>
      <div className='adjustments-container'>
        <div className='adjustments-alignment'>
          <AllTasksButton />
          <SortButton />
          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default Adjustments;

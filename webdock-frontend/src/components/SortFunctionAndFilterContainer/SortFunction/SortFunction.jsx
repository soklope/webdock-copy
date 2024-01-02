import { useState, useEffect, useRef } from 'react';
import '../../SortFunctionAndFilterContainer/SortFunction/SortFunction.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';


export default function SortFunction() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Trending');
  const [dataToSort, setDataToSort] = useState([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]);
  const sortRef = useRef(null); 

  useEffect(() => {
    // Add an event listener to the document to handle clicks outside the button and dropdown
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    setDropdownOpen(false);

    let sortedData;

    switch (sortOption) {
      case 'Trending':
        sortedData = [...dataToSort].sort((a, b) => {
          return b.numberOfComments - a.numberOfComments;
        });
        break;
      case 'Top':
        sortedData = [...dataToSort].sort((a, b) => {
          return b.numberOfUpvotes - a.numberOfUpvotes;
        });
        break;
      case 'New':
        sortedData = [...dataToSort].sort((a, b) => {
          return b.createdAt - a.createdAt;
        });
        break;
      default:
        sortedData = dataToSort;
    }

    setDataToSort(sortedData);
  };

  const sortOptions = ['Trending', 'Top', 'New'];

  return (
    <div ref={sortRef} className="sort-function">
      <button
        className={`sort-function-btn ${isDropdownOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {selectedSortOption ? selectedSortOption : 'Sort'}
        <span className="sort-function-btn__icon"></span>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            {sortOptions.map((option) => (
              <li className="dropdown-menu__list-item" key={option} onClick={() => handleSortChange(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      {dataToSort.map((item) => (
        <div key={item.title}>
        <RoadmapChildren 
        title={item.title}
        numberOfComments={item.numberOfComments}
        totalUpvotes={item.numberOfUpvotes}
        category={item.category}
        status={item.status}
        statusColor={item.statusColor}
        />
    </div>
    ))}
    </div>
  );
}
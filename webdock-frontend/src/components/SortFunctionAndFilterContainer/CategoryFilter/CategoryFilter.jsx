import { useState, useEffect, useRef } from 'react';
import '../CategoryFilter/CategoryFilter.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';

export default function CategoryFilter() {
  const [state, setState] = useState({
    selectedCategory: 'All Categories',
    isCategoryDropdownOpen: false,
    categorySelected: false,
    dataToSort: [...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb],
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setState((prev) => ({ ...prev, isCategoryDropdownOpen: false }));
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const { selectedCategory, isCategoryDropdownOpen, categorySelected, dataToSort } = state;

  const categoryDropdownRef = useRef(null);

  const toggleCategoryDropdown = () => {
    setState((prev) => ({ ...prev, isCategoryDropdownOpen: !prev.isCategoryDropdownOpen }));
  };

  const handleCategoryChange = (category) => {
    if (category === selectedCategory && categorySelected) {
      return;
    }

    setState((prev) => ({ ...prev, selectedCategory: category, categorySelected: true, isCategoryDropdownOpen: false }));
  };

  const handleClearCategory = () => {
    // Stop the event propagation to prevent toggleCategoryDropdown from being triggered
    setState((prev) => ({ ...prev, selectedCategory: 'All Categories', categorySelected: false, isCategoryDropdownOpen: !isCategoryDropdownOpen }));
  };

  const handleSearch = () => {
    return dataToSort.filter((item) => selectedCategory === 'All Categories' || item.category === selectedCategory);
  };

  const categoryOptions = [
    'All Categories',
    'Dashboard Features',
    'Documentation',
    'Billing Features',
    'Networking',
    'Hardware and Products',
    'Perfect Server Stacks',
    'Mobile App',
    'Webdock API',
    'Competition',
  ];

  const filteredData = handleSearch();

  return (
    <div className="category-filter">
      <div ref={categoryDropdownRef} className="category-filter">
        <div className="category-filter-btn-container">
          <button onClick={toggleCategoryDropdown} className={`category-filter-btn ${isCategoryDropdownOpen ? 'active' : ''}`}>
            {selectedCategory}
            <span className={`category-filter-btn__icon ${categorySelected ? 'close-icon' : ''}`} onClick={handleClearCategory}></span>
          </button>
          {isCategoryDropdownOpen && (
            <div className="category-list">
              <ul>
                {categoryOptions.map((category) => (
                  <li key={category}>
                    <button onClick={() => handleCategoryChange(category)}>{category}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {filteredData.map((item) => (
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
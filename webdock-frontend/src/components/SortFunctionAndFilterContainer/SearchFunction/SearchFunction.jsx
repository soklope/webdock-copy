import '../SearchFunction/SearchFunction.scss';
import { useState, useEffect, useRef } from 'react';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';

function SearchFunction() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const closeInput = () => {
    setInputVisible(false);
    setSearchQuery(''); // Clear the search query
    setSearchResults([]); // Clear the search results
  };

  useEffect(() => {
    if (isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Trigger the search as the user types
    performSearch(query);
  };

  const handleIconClick = () => {
    // Trigger the search with the current searchQuery value
    performSearch(searchQuery);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Trigger the search when the Enter key is pressed
      performSearch(searchQuery);
    }
  };

  // Perform search and return matching items from the dummyDb arrays
  const performSearch = (query) => {
    const allData = [
      ...plannedArrayDb,
      ...inProgressArrayDb,
      ...completeArrayDb,
    ];

    const results = allData.filter((item) => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();

      return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
    });

    setSearchResults(results);
  };

  return (
    <div>
      {isInputVisible ? (
        <div className="search-input">
          <div className="input-container">
            <span className="input-icon" onClick={handleIconClick}></span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
              placeholder="Search..."
              className={`search-input ${isInputVisible ? 'active' : ''} ${isInputVisible ? 'no-border' : ''}`}
              ref={inputRef}
            />
            <span className="close-icon" onClick={closeInput}></span>
          </div>
        </div>
      ) : (
        <button onClick={toggleInput} className="search-function-btn">
          Search...
          <span className="search-function-btn__icon"></span>
        </button>
      )}

      {searchResults.length > 0 && (
        <div>
            {searchResults.map((item) => (
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
      )}
    </div>
  );
}
export default SearchFunction;
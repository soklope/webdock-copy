// import SearchFunction from './SearchFunction/SearchFunction';
// import SortFunction from './SortFunction/SortFunction';'./SortFunction/SortFunction.jsx'
import '../SortFunctionAndFilterContainer/SortFunctionFilterContainer.scss';
import FilterContainer from './FilterContainer/FilterContainer';

export default function SortFunctionAndFilterContainer() {
    return (
        <div className="sort-function-and-filter-container">
            <FilterContainer />  
        </div>
    )
}
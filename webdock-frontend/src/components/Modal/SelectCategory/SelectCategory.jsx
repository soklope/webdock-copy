import React, { useState, useRef, useEffect } from "react";
import '../SelectCategory/SelectCategory.scss'

export default function SelectCategory({categoryArray, onCategoryChange}) {
const [selectedCategory, setSelectedCategory] = useState(null);
const [showOptions, setShowOptions] = useState(false);
const dropdownRef = useRef(null);
const [hasChanged, setHasChanged] = useState(false)

// const categoryOptions = [
//     'Dashboard Features',
//     'Documentation',
//     'Billing Features',
//     'Networking',
//     'Hardware and Products',
//     'Perfect Server Stacks',
//     'Mobile App',
//     'Webdock API',
//     'Competition',
// ];

const handleCategoryChange = (category, id) => {
    setSelectedCategory(category);
    setShowOptions(false);
    setHasChanged(true);

    onCategoryChange(id);
};

const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
    }
};

useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, []);

return (
    <div className="category-selector" ref={dropdownRef}>
        <div className="category-selector-dropdown">
            <button className={`category-selector-btn ${hasChanged ? 'hasChanged' : ''}`} onClick={() => setShowOptions(!showOptions)}>
                {selectedCategory || 'Select Category'}
                <span className="category-selector-btn-icon"></span>
            </button>
        {showOptions && (
        <div className="category-options">
            {categoryArray.map((category, index) => (
            <div
                key={index}
                className="category-option"
                onClick={() => handleCategoryChange(category.category, category.id)}
            >
                {category.category}
            </div>
            ))}
        </div>
        )}
    </div>
    </div>
);
}

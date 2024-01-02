import React, { useState } from "react";
import useModalStore from "../../../stores/modalStore";

export default function AdminToolBar( {itemId} ) {
  const [showDropdown, setShowDropdown] = useState(false)
  const { toggleMergeModal } = useModalStore()

  const handleDelete = async () => {
      try {
        const response = await fetch(`${window.apiHostName}/v1/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          console.log('Item deleted successfully');
          window.location.href = '/';
        } else {
          console.error('Failed to delete item');
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };

  const handleChangeStatus = async (newStatus) => {
    try {
        const response = await fetch(`${window.apiHostName}/v1/changePostStatus/${itemId}/status/${newStatus}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
          const data = await response.json();
          window.location.href = '/';
          console.log('Post status updated successfully', data);
        } else {
          console.error('Failed to update post status');
        }
    } catch (error) {
        console.error('Error updating post status:', error);
    }
  };

  return (
      <div className="admin-toolbar-container">
          <div className="admin-toolbar-container__tool" onClick={() => setShowDropdown(!showDropdown)}>
              <p>Change Status</p>
              <span className="admin-toolbar-container__tool__move" />

              { showDropdown &&
                <ul className="admin-toolbar-container__dropdown">
                  <li onClick={() => handleChangeStatus(1)}>Review</li>
                  <li onClick={() => handleChangeStatus(2)}>Planned</li>
                  <li onClick={() => handleChangeStatus(3)}>In Progress</li>
                  <li onClick={() => handleChangeStatus(4)}>Complete</li>
                  <li onClick={() => handleChangeStatus(5)}>Deprecated</li>
                </ul>
              }
          </div>

          {/* <div className="admin-toolbar-container__tool" onClick={() => handleMerge(10, 1)}> */}
          <div className="admin-toolbar-container__tool" onClick={() => toggleMergeModal()}>
              <p>Merge</p>
              <span className="admin-toolbar-container__tool__merge" />
          </div>

          <div className="admin-toolbar-container__tool" onClick={handleDelete}>
              <p>Delete</p>
              <span className="admin-toolbar-container__tool__delete" />
          </div>
      </div>
  )
}
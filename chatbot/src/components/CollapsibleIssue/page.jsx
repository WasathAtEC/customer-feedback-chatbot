import React, { useState } from 'react';

const CollapsibleIssue = ({ issue, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <button
        onClick={toggleDetails}
        className="text-blue-600 cursor-pointer"
      >
        {issue}
      </button>
      {isOpen && (
        <div className="ml-4 text-gray-600">
          {details}
        </div>
      )}
    </div>
  );
};

export default CollapsibleIssue;

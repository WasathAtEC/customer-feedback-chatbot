import React, { useState } from "react";

const CollapsibleIssue = ({ issue, details, isOpen, onClick }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onClick}
        className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1"
      >
        {issue}
      </button>
    </div>
  );
};

export default CollapsibleIssue;

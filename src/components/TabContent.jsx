import React from "react";

export default function TabContent({ children, onSubmit, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSubmit}>{children}</button>
    </li>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { MenuDropdownProps } from "./MenuDropdown.types";

export const MenuDropdown = ({
  onEdit,
  onDelete,
  className = "",
}: MenuDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = () => {
    setIsOpen(false);
    onEdit();
  };

  const handleDelete = () => {
    setIsOpen(false);
    onDelete();
  };

  return (
    <div
      ref={dropdownRef}
      className={`food-menu-dropdown relative ${className}`}
    >
      {/* Menu Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="food-menu-btn text-[#424242] cursor-pointer text-lg md:text-xl hover:text-selected transition-colors"
        data-test-id="food-menu-btn"
        aria-label="Menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 md:w-5 md:h-5"
        >
          <circle cx="10" cy="4" r="1.5" />
          <circle cx="10" cy="10" r="1.5" />
          <circle cx="10" cy="16" r="1.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="food-menu-items absolute right-0 top-8 w-[70px] md:w-20 2xl:w-[84px] h-auto bg-white rounded-[5px] border border-[#EDEEF1] py-1 pl-2 md:pl-3 shadow-lg z-10"
          data-test-id="food-menu-items"
        >
          <button
            onClick={handleEdit}
            className="food-menu-item-edit cursor-pointer block w-full text-left text-[10px] md:text-xs 2xl:text-[12px] font-medium text-[#425466] hover:text-selected py-1.5 transition-colors"
            data-test-id="food-menu-edit-btn"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="food-menu-item-delete cursor-pointer block w-full text-left text-[10px] md:text-xs 2xl:text-[12px] font-medium text-[#FF3B30] hover:opacity-80 py-1.5 transition-colors"
            data-test-id="food-menu-delete-btn"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

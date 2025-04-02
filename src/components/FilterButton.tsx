"use client"
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    noAnswers: false,
    noAcceptedAnswer: false,
    noStagingGround: false,
    hasBounty: false,
    daysOld: "",
    sortedBy: "Newest",
    taggedWith: "custom",
    tags: "",
  });

  const toggleFilter = () => setIsOpen(!isOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <button
        onClick={toggleFilter}
        className="flex items-center space-x-2 border px-3 py-2 rounded-lg text-blue-600 border-blue-500 hover:bg-blue-100 transition"
      >
        <FaFilter />
        <span>Filter</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

            {/* Filter By Section */}
            <div className="mb-4">
              <h3 className="font-medium">Filter by</h3>
              <label className="block">
                <input
                  type="checkbox"
                  name="noAnswers"
                  checked={filters.noAnswers}
                  onChange={handleChange}
                  className="mr-2"
                />
                No answers
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  name="noAcceptedAnswer"
                  checked={filters.noAcceptedAnswer}
                  onChange={handleChange}
                  className="mr-2"
                />
                No accepted answer
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  name="noStagingGround"
                  checked={filters.noStagingGround}
                  onChange={handleChange}
                  className="mr-2"
                />
                No Staging Ground
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  name="hasBounty"
                  checked={filters.hasBounty}
                  onChange={handleChange}
                  className="mr-2"
                />
                Has bounty
              </label>
              <input
                type="number"
                name="daysOld"
                placeholder="Days old"
                value={filters.daysOld}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-2"
              />
            </div>

            {/* Sorted By Section */}
            <div className="mb-4">
              <h3 className="font-medium">Sorted by</h3>
              {["Newest", "Recent activity", "Highest score", "Most frequent", "Bounty ending soon", "Trending", "Most activity"].map((option) => (
                <label key={option} className="block">
                  <input
                    type="radio"
                    name="sortedBy"
                    value={option}
                    checked={filters.sortedBy === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Tagged With Section */}
            <div className="mb-4">
              <h3 className="font-medium">Tagged with</h3>
              <label className="block">
                <input
                  type="radio"
                  name="taggedWith"
                  value="watched"
                  checked={filters.taggedWith === "watched"}
                  onChange={handleChange}
                  className="mr-2"
                />
                My watched tags
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="taggedWith"
                  value="custom"
                  checked={filters.taggedWith === "custom"}
                  onChange={handleChange}
                  className="mr-2"
                />
                The following tags:
              </label>
              <input
                type="text"
                name="tags"
                placeholder="e.g. javascript or python"
                value={filters.tags}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-2"
                disabled={filters.taggedWith !== "custom"}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => console.log("Applied Filters:", filters)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Apply filter
              </button>
              <button onClick={toggleFilter} className="text-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;

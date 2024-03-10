import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsPen } from "react-icons/bs";
import { initialCategories } from "./Story";

export function Form({
  content,
  showContent,
  subject,
  handleValue,
  describe,
  handleShow,
  selectedCategory,
  show,
  searchText,
  handleSearch,
  handleAdd,
  handleSubmit,
  handleCategorySelect,
}) {
  return (
    <form className="section-1">
      <div className="section-1-head">
        <h1>Write your own story</h1>
        <BsPen className="pen" onClick={showContent} />
      </div>
      {content && (
        <div className="section-1-content">
          <div className="subject">
            <label htmlFor="subject">
              <h3>Topic</h3>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="write the topic for your story "
              value={subject}
              onChange={(e) => handleValue(e)}
              required
            />
          </div>

          <div className="description">
            <label htmlFor="describe">
              <h3>Description</h3>
            </label>
            <textarea
              value={describe}
              name="description"
              id="describe"
              placeholder="write what your story is about here"
              onChange={(e) => handleValue(e)}
              required
            />
          </div>

          <div className="selectCategory">
            <div className="select-btn" onClick={handleShow}>
              {selectedCategory ? (
                <span>{selectedCategory.toUpperCase()}</span>
              ) : (
                <span>Select a category</span>
              )}
              <BiChevronDown className="down" />
            </div>

            {show && (
              <div className="content">
                <div className="search">
                  <AiOutlineSearch className="search-btn" />
                  <input
                    type="text"
                    id="category"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleSearch}
                    required
                  />
                </div>

                {searchText.length === 0 ? (
                  <ul className="search-list">
                    {initialCategories.map((category) => (
                      <li
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                ) : searchResults.length > 0 ? (
                  <ul className="search-list">
                    {searchResults.map((category) => (
                      <li
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="search-list">
                    <li onClick={handleAdd}>Add new category</li>
                  </ul>
                )}
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            PUBLISH YOUR STORY
          </button>
        </div>
      )}
    </form>
  );
}

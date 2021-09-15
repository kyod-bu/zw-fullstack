import React from "react";

export const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-wrap">
        <div className="tt-autocomplete">
          <div className="tt-input tt-input-group tt-input-group--append">
            <input
              type="text"
              placeholder="搜索站内咨询、视频或用户"
              autoComplete="off"
              className="tt-input__inner"
            />

            <div className="tt-input-group__append">
              <button type="button" className="tt-button tt-button--default">
                <span>搜索</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

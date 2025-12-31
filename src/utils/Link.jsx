import React from "react";

const Link = ({ to, children, className }) => {
  const handleClick = (e) => {
    // allow browser default for:
    // ctrl, cmd, middle click, right click
    if (
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.button === 1
    ) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Link;

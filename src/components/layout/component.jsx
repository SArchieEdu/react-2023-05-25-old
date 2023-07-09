import React from "react";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};

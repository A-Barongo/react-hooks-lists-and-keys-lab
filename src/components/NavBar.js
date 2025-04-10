import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return <nav>{links.map((btn)=><a key={btn} href={`#${btn}`}>{btn}</a>)}</nav>;
}

export default NavBar;

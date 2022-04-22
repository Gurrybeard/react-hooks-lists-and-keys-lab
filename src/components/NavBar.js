import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const aMap = links.map(e=>(
    <a key={e} href={`#${e}`}>{e}</a>
  ));

  return <nav>{aMap}</nav>;
}

export default NavBar;
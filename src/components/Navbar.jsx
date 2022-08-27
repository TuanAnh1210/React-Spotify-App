import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar(props) {
  return (
    <div className="h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl">
      <FontAwesomeIcon className="mr-4" icon={faSpotify} />
      Spotify
    </div>
  );
}

export default Navbar;

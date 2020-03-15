import React from "react";
import Spinner from "../../img/planets/spinner.svg";
export default function Planet(props) {
  return (
    <div className="gallery">
      <a target="_blank" href={props.planet}>
        <img
          src={Spinner}
          data-src={props.planet}
          className="lazyload"
          alt={
            props.dwarf
              ? "dwarf planet " + props.alt
              : "" + "planet " + props.alt
          }
        />
      </a>
      <div className="desc">{props.description}</div>
    </div>
  );
}

import React from "react";
import Planet from "./Gallery/Planet.js";

import Sun from "../img/planets/sun.jpg";
import Mercury from "../img/planets/mercury.jpg";
import Venus from "../img/planets/venus.jpg";
import Earth from "../img/planets/earth.jpg";
import Mars from "../img/planets/mars.jpg";
import Jupiter from "../img/planets/jupiter.jpg";
import Saturn from "../img/planets/saturn.jpg";
import Uranus from "../img/planets/uranus.jpg";
import Neptune from "../img/planets/neptune.jpg";
// Dwarf planets
import Ceres from "../img/planets/Ceres_dwarf_planet.jpg";
import Pluto from "../img/planets/pluto.jpg";
import Haumea from "../img/planets/haumea_dwarf_planet.jpg";
import Makemake from "../img/planets/Makemake_dwarf_planet.jpg";
import Eris from "../img/planets/eris_dwarf_planet.jpeg";

export default Gallery => {
  document.body.style.backgroundColor = "#000000";
  return (
    <div className="gallery-planets">
      <h1>Solar System</h1>
      <h2></h2>
      <p>Technologies used:</p>
      <p>
        <a href="https://github.com/aFarkas/lazysizes" target="_blank">
          lazySizes
        </a>
        &nbsp; is the ultimate and lightweight lazyLoader which lazy loads
        images (including responsive images (picture/srcset)), iframes and
        scripts. It is written in VanillaJS and with high performance in mind.
        Simply add the JS to your website and put the class lazyload to all
        elements, which should be lazy loaded.
      </p>
      <Planet
        planet={Sun}
        alt="Image of the sun"
        description="The Sun is the star at the center of the Solar System"
      />
      <Planet
        planet={Mercury}
        alt="Mercury"
        description="Mercury is the smallest and innermost planet in the Solar System."
      />
      <Planet
        planet={Venus}
        alt="Venus"
        description="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty."
      />
      <Planet
        planet={Earth}
        alt="Earth"
        description="Earth is the planet we live on. It is the third planet from the Sun. It is the only planet known to have life on it"
      />
      <Planet
        planet={Mars}
        alt="Mars"
        description="Mars is the fourth planet from the Sun in the Solar System and the second-smallest solid planet."
      />
      <Planet
        planet={Ceres}
        alt="Ceres"
        description="Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter."
        dwarf={true}
      />
      <Planet
        planet={Jupiter}
        alt="Jupiter"
        description="Jupiter is the fifth planet from the Sun and the largest in the Solar System. "
      />
      <Planet
        planet={Saturn}
        alt="Saturn"
        description="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter."
      />
      <Planet
        planet={Uranus}
        alt="Uranus"
        description="Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
      />
      <Planet
        planet={Neptune}
        alt="Neptune"
        description="Neptune is the eighth and farthest known planet from the Sun in the Solar System."
      />
      <Planet
        planet={Pluto}
        alt="Pluto"
        description="Pluto is an icy dwarf planet in the Kuiper belt"
        dwarf={true}
      />
      <Planet
        planet={Haumea}
        alt="Haumea"
        description="Haumea is a likely dwarf planet located beyond Neptune's orbit."
        dwarf={true}
      />
      <Planet
        planet={Makemake}
        alt="Makemake"
        description="Makemake is a likely dwarf planet and perhaps the second largest Kuiper belt object in the classical population"
        dwarf={true}
      />
      <Planet
        planet={Eris}
        alt="Eris"
        description="Eris is the most massive and second-largest known dwarf planet in the Solar System."
        dwarf={true}
      />
      <Planet
        planet={Mars}
        alt="Mars"
        description="Mars is the fourth planet from the Sun in the Solar System and the second-smallest solid planet."
        dwarf={true}
      />

      {/* 


   
      <img
        src={Spinner}
        data-src={Jupiter}
        className="lazyload"
        alt="planet Jupiter"
      />
      <img
        src={Spinner}
        data-src={Ceres}
        className="lazyload"
        alt="dwarf planet Ceres"
      />
      <img
        src={Spinner}
        data-src={Saturn}
        className="lazyload"
        alt="planet Saturn"
      />
      <img
        src={Spinner}
        data-src={Uranus}
        className="lazyload"
        alt="planet Uranus"
      />
      <img
        src={Spinner}
        data-src={Neptune}
        className="lazyload"
        alt="planet Neptune"
      />
      <img
        src={Spinner}
        data-src={Pluto}
        className="lazyload"
        alt="dwarf planet Pluto"
      />
      <img
        src={Spinner}
        data-src={Haumea}
        className="lazyload"
        alt="dwarf planet Haumea"
      />
      <img
        src={Spinner}
        data-src={Makemake}
        className="lazyload"
        alt="dwarf planet Makemake"
      />
      <img
        src={Spinner}
        data-src={Eris}
        className="lazyload"
        alt="dwarf planet Eris"
      /> */}
    </div>
  );
};

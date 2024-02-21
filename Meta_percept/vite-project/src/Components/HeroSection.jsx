
import React, { useEffect, useState } from "react";

import { data } from "../db";
function HeroSection() {
  const [main, setMain] = useState([]);
  useEffect(() => {
    setMain(data);
  }, []);
  console.log(main);
  return (
    <div>
      <div className="clases">
        <h5 className="h5">Classes</h5>
        <div className="lorem">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            dolore ratione! Blanditiis officia possimus harum nisi recusandae ut
            !
          </p>
        </div>
      </div>

      <div className="data-show">
        {main?.map((el) => {
          return (
            <div key={el.id} className="data_div">
              <img
                width="100%"
                src="https://img.freepik.com/free-photo/closeup-shot-red-rose-with-dew-top-black_181624-28079.jpg?w=740&t=st=1708518732~exp=1708519332~hmac=e9cf1d25a304be79178e498cf77dec731fcd0487963197f472b0a56181074c54"
                alt=""
              />

              <h3 className="text">{el.ID}</h3>
              <p className="text">{el.ShortDesc}</p>
              <button className="text op">View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection;
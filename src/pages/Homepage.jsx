import React from "react";
import Banner from "../components/Banner/Banner";

const Homepage = () => {
  return (
    <>
      <Banner />
      <div>
        <h2>
          Homepage{" "}
          <span role="img" aria-label="Rocket">
            🚀🚀
          </span>{" "}
        </h2>
      </div>
    </>
  );
};

export default Homepage;

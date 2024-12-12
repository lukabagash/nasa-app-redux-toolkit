import React from "react";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  return (
    <div className="home">
      <Link to="/photo" className="home__link">
        See one photo
      </Link>
      <Link to="/random" className="home__link">
        See random 4 posts
      </Link>
      <Link to="/galery" className="home__link">
        See post of choisen dates
      </Link>
    </div>
  );
};

export default Home;

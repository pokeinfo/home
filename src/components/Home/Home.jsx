import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    환영합니다.
    <br />
    <Link to="iv-checker">개체값 계산기</Link>
  </div>
);

export default Home;

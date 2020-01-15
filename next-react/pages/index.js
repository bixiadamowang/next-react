import React from "react";
import Link from "next/link";

const Home = () => (
  <>
    <div>首页</div>
    <div>
      <Link href="/hanA">
        <a>去HanA</a>
      </Link>
    </div>
    <div>
      <Link href="/hanB">
        <a>去HanB</a>
      </Link>
    </div>
  </>
);

export default Home;

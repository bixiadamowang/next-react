import React from "react";
import Router from "next/router";
import Link from "next/link";

const Home = () => {
  function goA() {
    Router.push("/hanA");
  }
  return (
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
      <div>
        <button
          onClick={goA}
        >
          Router方式去HanA
        </button>
      </div>
    </>
  );
};

export default Home;

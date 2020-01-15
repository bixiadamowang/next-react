import React from "react";
import Router from "next/router";
import Link from "next/link";

const Home = () => {
  function goA() {
    Router.push({
      pathname: '/hanB',
      query: {
        name: '笔下大魔王B'
      }
    });
  }
  return (
    <>
      <div>首页</div>
      <div>
        <Link href="/hanA?name=笔下大魔王A">
          <a>去HanA</a>
        </Link>
      </div>
      <div>
        <Link href="/hanB?name=笔下大魔王B">
          <a>去HanB</a>
        </Link>
      </div>
      <div>
        <button
          onClick={goA}
        >
          Router方式去HanB
        </button>
      </div>
    </>
  );
};

export default Home;

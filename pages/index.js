import React from 'react';
import Layout from "../components/layout";

export default function Home({newWorld}) {

  return (
    <Layout>
      <div id="home">

          <h1>Paper & Garden</h1>

          <div className="quote"><p /><i>“I think there are two types of writers, the architects and the gardeners. The architects plan everything ahead of time, like an architect building a house. They have the whole thing designed and blueprinted out before they even nail the first board up. The gardeners dig a hole, drop in a seed and water it. As the plant comes up and they water it, they don't know how many branches it's going to have, they find out as it grows."</i>
          <br />-George R.R. Martin</div>

          <p />Paper & Garden is a free service that assists storytellers in developing their setting. Whether you're designing a story or planting it, your locations can be as rich as characters. Each region and city has a unique personality that interacts with your story and the people within it. Help to maintain consistency by saving the details of those places here for easy reference.

          <p /><button className="headerButton" onClick={newWorld}>BEGIN</button>
          <p />
      </div>
    </Layout>
    );
}
import React from 'react';
import Layout from "../components/Layout.js";

export default function Home({newWorld}) {

  return (
    <Layout>
      <div>

        <div id="logo"></div>
        <div id="homeQuote">
          <div className="quote"><p /><i>“I think there are two types of writers, the architects and the gardeners. The architects plan everything ahead of time, like an architect building a house. They have the whole thing designed and blueprinted out before they even nail the first board up. The gardeners dig a hole, drop in a seed and water it. As the plant comes up and they water it, they don't know how many branches it's going to have, they find out as it grows."</i>
          <br />-George R.R. Martin</div>
        </div>
        <div id="bodyTextHome">
        <p />Paper & Garden is a service that assists storytellers in developing their setting. 

        <p /> Whether you're meticulously designing a story or simply planting its seed to watch it grow, your locations can be as rich as characters. Each area of your world has a unique personality that interacts with your characters, informs your plot, and illustrates your themes. 

        <p/>We can help you discover the world your story deserves.
        </div>

          
      </div>
    </Layout>
    );
}
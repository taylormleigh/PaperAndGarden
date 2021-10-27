import React from 'react';
import Layout from '../components/layout.js'

export default function NewWorld({newRegion, inputs, handleInputChange, handleSubmit}) {
  
  return (
    <Layout>

    <div id="F1">
      <h1>New World</h1>
      <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
      <br />

      <form>

        <label>Name your world</label>
        <br />
        <input 
          name="World Name" 
          placeholder="world name"
          onChange={handleInputChange} 
          // value={inputs["World Name"]}
          ></input>
        <br />
        <h2>PLANET</h2>
        <br />
        <br />
        How many days are in the year?
        <br />
        <input placeholder="revolution"></input>
        <br />
        How many hours are in a day?
        <br />
        <input placeholder="rotation"></input>
        <br />
        What are the seasons?
        <br />
        <textarea  placeholder="and how long does each season last?"></textarea>
        <br />
        How many suns & moons?
        <br />
        <input  placeholder="do the satellites have names?"></input>
        <br />
        What are the seasons?
        <br />
        <textarea  placeholder="and how long does each season last?"></textarea>
        <br />
        <h2>LOGIC</h2>
        <br />
        Could this world exist with our current laws of physics or is there a fundamental difference?
        <br />
        <textarea placeholder="spell out the logic if it differs from the universe we know, i.e. magic is real and energy can come from nothing"></textarea>
        <br />
        What other quirks about this reality exist?
        <br />
        <textarea placeholder="i.e. physics still hold, but humans have gills and can breathe underwater"></textarea>
        <br />
        <h2>LIFE</h2>
        <br />
        Describe the intelligent lifeforms that exist on this planet
        <br />
        <textarea placeholder="If more than one race, how and when did each race evolve"></textarea>
        <textarea placeholder="general appearance(s)"></textarea>
        <textarea placeholder="average lifespan(s)"></textarea>
        <textarea placeholder="unique facets, physical and otherwise"></textarea>
        <textarea placeholder="how each interacts with other races"></textarea>








        <br />
        {/* <button onClick={newRegion}>NEW REGION</button> */}

      </form>

    </div>
    </Layout>
  );
}
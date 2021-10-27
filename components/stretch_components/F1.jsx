import React from 'react';

export default class F1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      worldName: '',
    }
  }

  formFill(e){
    var worldName = e.target.value
    this.setState({
      worldName: worldName
    })
  }

  render() {
    return (
      <div id="F1">
        <h1>NEW WORLD</h1>
        <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
        <br />
        Name your world
        <br />
        <input onChange={this.formFill.bind(this)} value={this.state.worldName} placeholder="world name"></input>
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
        <textarea placeholder="spell out the logic if it differs from the universe we know, i.e. magic is real"></textarea>
        <br />
        What quirks about this reality exist?
        <br />
        <textarea placeholder="i.e. physics still hold, but people have gills and can breathe underwater"></textarea>
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
      </div>
    );
  }
}


{/* <form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form> */}
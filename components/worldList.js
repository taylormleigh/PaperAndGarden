import React from 'react';
import axios from 'axios';
import World from './world.js';


export default class WorldList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worlds: []
    }
    this.worlds = this.props.worlds;
  }

  componentDidMount() {
    this.getWorlds();
  }

  //fetches data from savedWorlds
  getWorlds = () => {
    axios.get('/api/SavedWorlds')
    .then((res) => {
      res.data.map(world => {
        this.setState({
          worlds: [...this.state.worlds, world]
        })
      })
    })
    .catch(err => {
      console.error('ruh roh in worldList.js getWorlds: ', err);
    })
  }

  render() {
    return (
      <div id="singleWorld">
        {this.state.worlds.map((each => {
          return  <div key={each._id}>
                    <World world={each}/>
                  </div>
        }))
        }
      </div>
    )
  }

}
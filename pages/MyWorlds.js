import React from 'react';
import Layout from '../components/Layout';
// import TabsNav from '../components/TabsNav.js';
// import World from '../components/world';

class MyWorlds extends React.Component{

  constructor(){
    super()
    this.state = {
      worlds: [], //send to WorldList
      worldNames: [] //send to TabsNav
    }
  }

  componentDidMount() {
    this.getWorlds();
  }

  //gets entire world object and adds to state
  getWorlds() {

  }

  render() {
    return (
      <Layout>
        <div id="tabsNav">
          Tabs Navigation 
        </div>
        <div id="worldViewDiv" className="greenContainer">
          <div id="worldViewContainer">
            {/* <WorldList/> */}
          </div>
        </div>
        <div id="exportWorld">Export World</div>
      </Layout>
    )
  }
}

export default MyWorlds;
import React from 'react';
import axios from 'axios'; //pull info from saved world
import Layout from '../components/Layout.js';
import CreateObj from '../components/CreateObj.js';

// questions & subsection keys
import { world, city, region } from './api/questionFile.js';


class CreateWorld extends React.Component {

  constructor() {
    super()
    this.state = {
      userObj: world,

      answer: "", //user input
      section: "world"
    }
  }

  componentDidMount() {

  }

  // //handles user input into answer
  handleInput = (e) => {
    this.setState({
      answer: answer
    })
  }

  //submits world object to database
  handleSubmit = (section, obj) => {
    //usr object pushes city into cities array in region
    //pushes region into regions array in world
    this.setState({
      userObj: obj
    }, () => {
      this.setState({
        section: section
      })
    })

    //axios update request sends entire world object to database
  }

  // on pressing +region or +city button, changes section view
  handleSectionChange = (e) => {
    let section = e.target.section;
    this.setState({
      section: section
    })
  }

  //new region submits current user object and re-renders with CreateRegion
  submitNewRegion = () => {
    //push region obj into userObj.regions
    let newUserObject = this.state.userObj;
    newUserObject.regions.push(this.state.newRegion)

    this.handleSubmit("region", newUserObject);
  }

  submitNewCity = () => {
    //push city obj into region
    let newUserObject = this.state.userObj;
    newUserObject.regions[region].cities.push(this.state.newCity);

    this.handleSubmit("city", newUserObject)
  }

  submitNewAnswer = (e) => {
    // sends user input as answer to the question at index to a user object
    let answer = this.state.answer;
    let section = this.state.section;
    let subsection = e.target.subsection;
    let newUserObject = this.state.userObj;
    
    if (section === "world") {
      newUserObject[section].subsections[subsection] = answer;
    } else if (section === "region" ) {
      // TO DO: pushes to whichever region the user
      newUserObject.world.regions[0].subsections[subsection] = answer;
    } else if (section === "city") {

    }

    this.setState({
      userObj: userObject
    })

  }

  
  render() {
    
      return (
        <Layout pathname={"create"}>
          <CreateObj
            obj={this.state.userObj}
            />
        </Layout>
      );
    
  }
}

export default CreateWorld;
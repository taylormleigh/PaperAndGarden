import React from 'react';
import Layout from '../components/Layout';
import axios from 'axios'; //pull info from saved world
import { world, city, region } from './api/questionFile.js';
import { worldSects, citySects, regionSects } from './api/questionFile.js';

import CreateHeading from '../components/CreateHeading.js';
import QuestionGenerator from '../components/QuestionGenerator';
// import QuoteGenerator from '../components/QuoteGenerator';
// import Progress from '../components/Progress';

class CreateWorld extends React.Component {

  constructor() {
    super()
    this.state = {
      userObj: {
        world: {},
        region: {},
        city: {}
      },

      titleName: "",
      currentSection: 0,
      allSections: ["world", "region", "city"],
      currentSubsection: 0,
      allSubsections: [], //["string", length]
      qIndex: 0, //index of current question
      lastIndex: 0, //length of current subsection array -1
      
      answer: "", //user input
    }
    this.handleAnswers = this.handleAnswers.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.currentSection = this.state.allSections[this.state.currentSection];
  }

  componentDidMount() {
    this.getObjects();
    this.getQuestions();
  }

  // create empty objects for user to fill & submit
  getObjects = () => {
    // console.log("world", world);
    this.setState({
      userObj: {
        world: world,
        region: region,
        city: city
      }
    })
  }

  getQuestions = () => {

    if (this.currentSection === "world") {
      let newIndex = worldSects[this.state.currentSubsection[1]];

      this.setState({
        allSubsections: worldSects,
        lastIndex: newIndex
      })
    } else if (this.currentSection === "region") {
      let newIndex = regionSects[this.state.currentSubsection[1]];

      this.setState({
        allSubsections: regionSects,
        lastIndex: newIndex
      })
    } else if (this.currentSection === "city") {
      let newIndex = citySects[this.state.currentSubsection[1]];

      this.setState({
        allSubsections: citySects,
        lastIndex: newIndex
      })
    }
  }

  //sets section title names
  getSectionTitle = () => {
    let worldName = this.state.userObj.world.subsections["basics"][0].answer;
    let regionName = this.state.userObj.region.subsections["basics"][0].answer;
    let cityName = this.state.userObj.city.subsections["basics"][0].answer;

    if (cityName) {
      this.setState({
        titleName: worldName
      })
    } else if (regionName) {
      this.setState({
        titleName: worldName
      })
    } else if (worldName) {
      this.setState({
        titleName: worldName
      })
    }

    return;
  }

  // axios request submits answers on 
  handleAnswers = (e) => {
    e.preventDefault();
    // sends e.target.value as answer to the question at index to a user object
    let answer = e.target.value;

    this.setState({
      answer: answer
    })

  }

  //submits world object to database
  handleSubmit = () => {
    //axios update request sends entire world object to database
  }

  //goes to next or previous question
  handleNext = (e) => {
    e.preventDefault();
    let answer = this.state.answer;
    let section = this.currentSection;
    let subsection = this.state.allSubsections[this.state.currentSubsection][0];
    let qIndex = this.state.qIndex;

    let newUserObj = this.state.userObj;
    newUserObj[section].subsections[subsection][qIndex].answer = answer;

    
    //update user input title with every new section
    if (qIndex === 0 && subsection === "basics"){
      //if user has not input a title, prevent them from moving forward
      if (answer !== "") {
        this.getSectionTitle();

      } else {
        return;
      }
    }

    
    //clear text value and update user object
    this.setState({
      userObj: newUserObj,
      answer: "",
    })
    //submit updated user object to database
    this.handleSubmit();

    if (e.target.id === "backArrow") {
      this.setState({
        qIndex: this.state.qIndex-=1
      })
    } else if (e.target.id === "forwardArrow") {
      this.setState({
        qIndex: this.state.qIndex+=1
      })
    }

  }

  //goes forward a subsection or section
  nextSection = () => {

  }

  
  render() {
 
    return (
      <Layout>
        <CreateHeading section={this.currentSection} subsection={this.state.allSubsections[this.state.currentSubsection]} titleName={this.state.titleName} />

        <QuestionGenerator
          section={this.state.userObj[this.currentSection]}
          subsection={this.state.allSubsections[this.state.currentSubsection]}
          qIndex={this.state.qIndex}
          answer={this.state.answer}
          handleAnswers={this.handleAnswers}
          handleNext={this.handleNext}
        />
        <span className="quoteComponent">
          quote component
        </span>
        <div className="greenContainer">
          <div className="progressComponent">
            <div className="greenContainerText">
              progress component 
              <br/>input index of question
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CreateWorld;
import React from 'react';
import axios from 'axios'; //pull info from saved world
import Layout from "../components/Layout.js";

// questions & subsection keys
import { world, city, region } from './api/questionFile.js';
import { worldSects, citySects, regionSects } from './api/questionFile.js';

import CreateHeading from '../components/CreateHeading.js';
import QuestionGenerator from '../components/QuestionGenerator';
import QuoteGenerator from '../components/QuoteGenerator';
import Progress from '../components/Progress';

class CreateWorld extends React.Component {

  constructor() {
    super()
    this.state = {
      userObj: {
        world: {},
        region: {},
        city: {}
      },//on submit, city will be pushed into region into world

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
    // this.currentSection = this.state.allSections[this.state.currentSection];
  }

  componentDidMount() {
    this.getObjects();
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
    }, () => {
      this.getQuestions();
    })
  }

  getQuestions = () => {
    let currentSection = this.state.allSections[this.state.currentSection];

    if (currentSection === "world") {
      let newIndex = worldSects[this.state.currentSubsection][1];
      
      this.setState({
        allSubsections: worldSects,
        lastIndex: newIndex
      })

    } else if (currentSection === "region") {
      let newIndex = regionSects[this.state.currentSubsection][1];

      this.setState({
        allSubsections: regionSects,
        lastIndex: newIndex
      })
    } else if (currentSection === "city") {
      let newIndex = citySects[this.state.currentSubsection][1];

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
    //usr object pushes city into cities array in region
    //pushes region into regions array in world

    //axios update request sends entire world object to database
  }

  //goes to next or previous question
  handleNext = (e) => {
    e.preventDefault();
    let answer = this.state.answer;
    let section = this.state.allSections[this.state.currentSection];
    let subsection = this.state.allSubsections[this.state.currentSubsection][0];
    let qIndex = this.state.qIndex;

    //update user input title with every new section
    // if (qIndex === 0 && subsection === "basics"){
      //if user has not input a title, prevent them from moving forward
      // if (answer !== "") {
        this.getSectionTitle();
        
      // } else {
      //   return;
      // }
    // }

    //object with user answers
    let newUserObj = this.state.userObj;
    newUserObj[section].subsections[subsection][qIndex].answer = answer;
    //clear text value and update user object
    this.setState({
      userObj: newUserObj,
      answer: "",
    })
    //submit updated user object to database
    this.handleSubmit();

    // if going backwards
    if (e.target.id === "backArrow") {
      this.nextSection("back");
    // if going forward
    } else if (e.target.id === "forwardArrow") {
      this.nextSection("forward");
    }
  }

  //goes forward a subsection or section
  nextSection = (dir) => {
    let section = this.state.currentSection;
    let subsection = this.state.currentSubsection;
    let subsectionsLength = this.state.allSubsections.length-1;
    let qIndex = this.state.qIndex;
    let lastIndex = this.state.lastIndex;
    //if we click the back button
    if (dir === "back") {
      //we can't move back a question if we're at the first question
      if (qIndex === 0) {
        //We can't move back a subsection if at the first subsection
        if (subsection === 0) {
          //We can't move back a section if at the first section
          section === 0 ? null :
          // We can move back a section to the last subsection
          this.setState({
            currentSection: section-=1,
          }, () => {
            this.getQuestions();
            this.setState({
              // currentSubsection: this.state.allSubsections.length-1,
              qIndex: this.state.lastIndex
            })
          })
        // We can move back one subsection
        } else {
          this.setState({
            currentSubsection: subsection-=1,
          }, () => {
            this.getQuestions();
            this.setState({
              qIndex: this.state.lastIndex
            })
          })
        }
      } else {
        //we can move back one question
        this.setState({
          qIndex: qIndex-=1
        })
      }

    //if we press the forward button
    } else if (dir === "forward") {
      //we can't move forward if at the last question
      if (qIndex === lastIndex) {
        //we can't move to next subsection if at the last subsection
        if (subsection === subsectionsLength) {
          //we can't go to next section if at the last section
          section === 2 ? null :
          //we can move forward a section to its first subsection
          this.setState({
            currentSection: section+=1,
            currentSubsection: 0,
            qIndex: 0
          }, ()=> {
            //get new subsection questions
            this.getQuestions();
          })
        // we can move forward a subsection
        } else {
          this.setState({
            currentSubsection: subsection+=1,
            qIndex: 0
          }, () => {
            //get new subsection questions
            this.getQuestions();
          })
        }
      } else {
        //we can move forward a question
        this.setState({
          qIndex: qIndex+=1
        })
      }
    }
  }

  
  render() {
 
    return (
      <Layout>
        <CreateHeading section={this.state.allSections[this.state.currentSection]} subsection={this.state.allSubsections[this.state.currentSubsection]} titleName={this.state.titleName} />

        <QuestionGenerator
          section={this.state.userObj[this.state.allSections[this.state.currentSection]]}
          subsection={this.state.allSubsections[this.state.currentSubsection]}
          qIndex={this.state.qIndex}
          answer={this.state.answer}
          handleAnswers={this.handleAnswers}
          handleNext={this.handleNext}
        />
        <QuoteGenerator />

        <Progress 
          index={this.state.qIndex}
          total={this.state.lastIndex}
          subsection={this.state.allSubsections[this.state.currentSubsection]}
        />

      </Layout>
    );
  }
}

export default CreateWorld;
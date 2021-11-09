//create Obj takes in an empty world, region, or city object
  //if a world object, go through world questions, submit pushes to new world object and to database
  //if a region object, go through region questions, submit pushes to existing world object regions array and submits to database
  //if a city object, go through city questions, submit pushes to city array in region

//returns with user answers and is updated to existing world object
import React from 'react';

import CreateHeading from '../components/CreateHeading.js';
import QuestionGenerator from '../components/QuestionGenerator';
import QuoteGenerator from '../components/QuoteGenerator';
import Progress from '../components/Progress';

import { worldSects, citySects, regionSects } from '../pages/api/questionFile.js';

class CreateObj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userObj: {},//on submit, city will be pushed into region into world

      titleName: "", //display title of current section
      currentSubsection: 0, //index of current subsection in allSubsections
      allSubsections: [], //["string", length]
      qIndex: 0, //index of current question
      lastIndex: 0, //length of current subsection array -1
      
      answer: "", //user input
    }
    this.currentSection = this.props.currentSection;
    this.obj = this.props.obj;
  }

  componentDidMount() {
    
  }

  //sets section title names
  getSectionTitle = () => {
    let title = this.state.answer;
      this.setState({
        titleName: title
      })
    return;
  }

  //moves through questions
  traverseQuestions = (dir) => {
    //if at the beginning/end of questions array, moves forward a subsection
    this.traverseSubsections();
  }

  //moves through subsections
  traverseSubsections = (dir) => {
    //if at the beginning/end of subsection array do nothing
  }

  
  render() {
    console.log(this.currentSection)
    return (
      <>
        {/* <CreateHeading section={this.state.allSections[this.state.currentSection]} subsection={this.state.allSubsections[this.state.currentSubsection]} titleName={this.state.titleName} />

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
        /> */}
      </>
    )
  }
}

export default CreateObj;
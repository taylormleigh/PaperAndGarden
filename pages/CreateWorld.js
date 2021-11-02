import React from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

import CreateHeading from '../components/CreateHeading.js';
import QuestionGenerator from '../components/QuestionGenerator';
// import QuoteGenerator from '../components/QuoteGenerator';
// import Progress from '../components/Progress';

class CreateWorld extends React.Component {

  constructor() {
    super()
    this.state = {
      sections: [], //questions
      sectionsLength: 0,
      questionsLength: 0,
      answer: "", //user input
      index: [0,0], //index of [current section, current question]
    }
    this.handleAnswers = this.handleAnswers.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  // axios request questions
  getQuestions = () => {
    axios.get('/api/questions')
    .then((response) => {
      // console.log(response.data)
      response.data.map((item) => {
        this.setState({
          sections: [...this.state.sections, item]
        })
      })

      this.setState({
        sectionsLength: response.data.length
      })

      let questLength = response.data[this.state.index[0]].questions.length;
      this.setState({
        questionsLength: questLength
      })


    })
    .catch((err) => {
      console.error('ruh roh in index.js in componentDidMount', err);
    })
  }

  // axios request submits answers on 
  handleAnswers = (e) => {
    e.preventDefault();
    // sends e.target.value as answer to the question at index to a newWorld object

  }

  //goes to next or previous question
  handleNext = (e) => {
    e.preventDefault();

    let section = this.state.index[0];
    let question = this.state.index[1];

    let endOfSections = this.state.sectionsLength - 1;
    let endOfQuestions = this.state.questionsLength - 1;
    
    //depending on e.target.id goes back or forward
    if (e.target.id === "backArrow") {
      
      // don't go negative if at the first question/section
      if (section === 0 && question === 0) {

        // if at the beginning of questions go back to previous section
      } else if (question === 0 && section !== 0) {
        this.getQuestions();
        
        this.setState({
          index: [section-=1, endOfQuestions]
        })

      } else {
        this.getQuestions();
        
        this.setState({
          index: [section, question-=1]
        })

      }

    } else if (e.target.id === "forwardArrow") {

      //if at the end of questions and sections, don't move forward
      if (question === endOfQuestions && section === endOfSections) {
        
        //if at end of questions list, move forward a section
      } else if (question === endOfQuestions && section !== endOfSections) {
        this.getQuestions();

        this.setState({
          index: [section+=1, 0]
        })
        // move forward a question
      } else {
        this.getQuestions();
        this.setState({
          index: [section, question+=1]
        })
      }

    }
  }
  
  render() {
    return (
      <Layout>
        <CreateHeading section={this.state.sections[this.state.index[0]]} />

        <QuestionGenerator
          section={this.state.sections[this.state.index[0]]}
          current={this.state.index[1]}
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
import React from 'react';
import Layout from '../components/Layout';
// import QuestionGenerator from '../components/QuestionGenerator';
// import QuoteGenerator from '../components/QuoteGenerator';
// import Progress from '../components/Progress';

class CreateWorld extends React.Component {

  constructor() {
    super()
    this.state = {
      questions: [], //question/saved answer objects
      answer: "", //user input
      index: 0, //index of current question
    }
  }

  componentDidMount() {

  }

  // axios request questions and their saved answers
  getQuestions() {

  }

  // axios request submits answers on 
  handleAnswers(e) {
    e.preventDefault();
    // sends e.target.value as answer to the question at index

  }
  
  render() {
    return (
      <Layout>
        <div className="sectionHeading">
          <h3>Section: Title
          <br/><small>Subsection</small></h3>
        </div>

        <div className="questionComponent">
          question component 
          <br/>input questionsList= answersList=
          <br/>returns user answers
          <br/>returns index of question for progress component
        </div>
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
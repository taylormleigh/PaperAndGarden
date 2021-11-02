import ArrowNavButton from './ArrowNavButton';

const QuestionGenerator = ({section = {questions: []}, current, handleAnswers, handleNext}) => {
  
  if (section.questions.length) {
    let question = section.questions[current].question;
    let placeholder = section.questions[current].placeholder;
    let inputType = section.questions[current].type;

    return (
      <div className="questionComponent">

        <div className="question">
        {question}
        </div>
        
        <div className="row">
          <div className="col-xs">
            <ArrowNavButton handleNext={handleNext} direction={"previous"}/>
          </div>

          <div className="col-xs">
            <textarea className="questionTextArea" placeholder={placeholder} onChange={handleAnswers}/>
          </div>

          <div className="col-xs">
            <ArrowNavButton handleNext={handleNext} direction={"next"}/>
          </div>
        </div>
        
      </div>
    );

  } else {

    return (
      <div className="questionComponent">
        loading...
      </div>
    );

  }

}

export default QuestionGenerator;
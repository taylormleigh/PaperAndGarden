import ArrowNavButton from './ArrowNavButton';

const QuestionGenerator = (
  {section, //world, region, or city section
    subsection, //subsection key
    qIndex,  //question index
    answer, //user input
    handleAnswers, //handles user input
    handleNext} //handles arrow navigation
  ) => {
    
  if (subsection !== undefined) {
    let q = section.subsections[subsection[0]][qIndex];
    let question = q.question;
    let placeholder = q.placeholder;
    let inputType = q.type;

    return (
      <div className="questionComponent">

        <div className="question row">
        {question}
        </div>
        
        <div className="question row">
          <div className="col-xs">
            <ArrowNavButton handleNext={handleNext} direction={"previous"}/>
          </div>

          <div className="col-xs">
            <textarea className="questionTextArea" placeholder={placeholder} onChange={handleAnswers} value={answer}/>
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
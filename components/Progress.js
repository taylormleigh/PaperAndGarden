const Progress = ({index, total, subsection}) => {
  if (subsection !== undefined) {
    return (
      <div className="greenContainer">
        <div className="progressComponent row">
          <div className="greenContainerText progressText">
            {subsection[0]} : {index+1} / {total+1}
          </div>
          <div className="progressBar row">
            <div className="progressMeter box p20">
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="greenContainer">
        <div className="progressComponent">
          <div className="greenContainerText">
            loading...
          </div>
        </div>
      </div>
    )
  }
}

export default Progress;
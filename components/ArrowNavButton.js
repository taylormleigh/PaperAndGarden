const ArrowNavButton = ({handleNext, direction}) => {

  if (direction === "previous") {
    return (
      <div className="arrowNavButton">
        <div id="backArrow" onClick={handleNext}>
        </div>
      </div>
    )
  } else {
    return (
      <div className="arrowNavButton">
        <div id="forwardArrow" onClick={handleNext}>
        </div>
      </div>
    )
  }
}

export default ArrowNavButton;
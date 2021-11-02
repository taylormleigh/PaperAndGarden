import Link from 'next/link';

const ArrowNavButton = ({handleNext, direction}) => {

  if (direction === "previous") {
    return (
      <div className="arrowNavButton">
        <div id="backArrow" onClick={handleNext}>
        </div>
      </div>
    )
  } else if (direction === "next") {
    return (
      <div className="arrowNavButton">
        <div id="forwardArrow" onClick={handleNext}>
        </div>
      </div>
    )
  } else {
    return (
      <Link href={direction}>
        <div className="arrowNavButton">
          <div id="beginArrow">
          </div>
        </div>
      </Link>
    )
  }
}

export default ArrowNavButton;
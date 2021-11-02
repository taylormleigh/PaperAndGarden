import React from 'react';

const CreateHeading = ({titleName, section, subsection}) => {

  if (section && subsection) {

    return (
      <div className="sectionHeading">
        <h3>{section}: {titleName}
        <br/><small>{subsection[0]}</small>
        </h3>
      </div>
    );

  } else {

    return (
      <div className="sectionHeading">
        loading...
      </div>
    );

  }
}

export default CreateHeading;
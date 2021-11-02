import React from 'react';

const CreateHeading = ({section}) => {
  if (section) {

    return (
      <div className="sectionHeading">
        <h3>World: WorldName
        <br/><small>{section.sectionName}</small>
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
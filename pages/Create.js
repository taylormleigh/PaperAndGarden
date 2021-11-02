import React from 'react';
import Layout from '../components/Layout';
import ArrowNavButton from '../components/ArrowNavButton';


const Create = () => {
  
  return (
    <Layout>
      <div className="bodyText">
        <h2>Create a New World</h2>
        These questions are designed to inspire you to develop a setting that exists more realistically within your own head and therefore in your writing.

        <p/>Most of the questions assume you are creating a universe from scratch, but they can also be applied to real life locations that you might be altering just enough to put your characters through a more exciting adventure.

        <p/>Let your mind wander - if the question sparks an idea for a scene, just start typing. You can skip any prompt and keep moving forward - it’s easy to edit your world later. 

        <p/>Click the right arrow to begin.
        <br/><h5>(Your progress will be saved automatically)</h5>
      </div>
      <ArrowNavButton direction={"/CreateWorld"}/>
    </Layout>
  );
}

export default Create;
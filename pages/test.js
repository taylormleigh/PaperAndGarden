// import React from 'react';
// import axios from 'axios';
// import Layout from '../components/layout.js';

// class CreateWorld extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       section1: [],
//       section2: [],
//       section3: []
//     }
//   }

//   componentDidMount() {
//     axios.get('/api/questions')
//     .then((response) => {
//       console.log(response.data)
//       response.data[0].questions.map((item) => {
//         this.setState({
//           section1: [...this.state.section1, item]
//         })
//       })
//     })
//     .catch((err) => {
//       console.error('ruh roh in index.js in componentDidMount', err);
//     })
//   }

//   render() {
//     return (
//       <Layout>
//       <div>
//         {this.state.section1.map((q) => {
//           return (
//             <div key={q.question}>{q.question}
//               <br/><textarea placeholder={q.placeholder} type={q.type} className={q.type}/>
//             </div>
//           )
//         })}
//       </div>
//       </Layout>
//     )
//   }
// }

// export default CreateWorld;

import React from 'react';
import axios from 'axios';
import Layout from '../components/layout.js';

class CreateWorld extends React.Component {
  constructor(){
    super();
    this.state = {
      section1: [],
      section2: [],
      section3: []
    }
  }

  componentDidMount() {
    axios.get('/api/questions')
    .then((response) => {
      console.log(response.data)
      response.data[0].questions.map((item) => {
        this.setState({
          section1: [...this.state.section1, item]
        })
      })
    })
    .catch((err) => {
      console.error('ruh roh in index.js in componentDidMount', err);
    })
  }

  render() {
    return (
      <Layout>
      <div>
        {this.state.section1.map((q) => {
          return (
            <div key={q.question}>{q.question}
              <br/><input placeholder={q.placeholder} type={q.type} class={q.type}/>
            </div>
          )
        })}
      </div>
      </Layout>
    )
  }
}

// export default function Home({ isConnected }) {
//   return (
//     <div className="container">
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       <main>
//         testtesttest
//         {}
//       </main>
//     </div>
//   )
// }

export default CreateWorld;

// export async function getServerSideProps(context) {
//   const client = await clientPromise

//   // client.db() will be the default database passed in the MONGODB_URI
//   // You can change the database by calling the client.db() function and specifying a database like:
//   const db = client.db("sample_mflix");
//   // Then you can execute queries against your database like so:
//   // db.find({}) or any of the MongoDB Node Driver commands
//   const movies = await db
//     .collection("movies")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(1000)
//     .toArray();


//     console.log(movies)

//   const isConnected = await client.isConnected()

//   return {
//     props: { isConnected },
//   }
// }

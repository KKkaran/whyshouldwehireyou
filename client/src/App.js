import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useEffect, useState } from 'react';
import {MemoizedChild} from './components/Users';
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {

  //state vars for information to be sent to the DB

  const [data, setData] = useState({
    firstName: "",
    friend: "",
    personality:""
  })
  const [name,setName] = useState("Karan")
  //const { loading, data: dbData } = useQuery(users)
  //setting the state var for db Data of users

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data)
    console.log("submitting form now!!!")
  }

  return (
    <ApolloProvider client={client}>
      <style>{'body { background-color: #084340; }'}</style>
      <div className='p-3 text-light border border-light d-flex justify-content-center text-center flex-column'>
        <div className="App text-center text-light border p-5 border-light w-75">
        
        <form className='w-100' onSubmit={submitForm} >
          <div className="form-group">
            <input type="text" className="form-control" onChange={(e) => 
               setData({...data,firstName:e.target.value})
            } placeholder="Your name" required/>
          </div> <br /><br />
          <div className="form-group">
            <input type="text" className="form-control" onChange={(e) => 
               setData({ ...data, friend: e.target.value })
          } placeholder="Friend's name" required />
          </div> <br /><br />
          <div className="form-group">
            <input type="text" className="form-control" onChange={(e) => 
               setData({...data,personality:e.target.value})
            } placeholder="Describe your friend in 3 adjectives" required/>
          </div> <br /><br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <MemoizedChild name={name}/>
      </div>
    </ApolloProvider>
  );
}

export default App;

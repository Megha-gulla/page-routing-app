import { useState } from 'react';
import './App.css';
// import About from './Components/about';
import Header from './Components/Header';
import Home from './Components/home';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const[query,setQuery]=useState("")
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className='mainContainer'>
    <Header setQuery={setQuery}/>
    <Home query={query}/>
    {/* <About/> */}
    </div>
    </QueryClientProvider>
  );
}

export default App;

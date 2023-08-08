import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
    const [views, setViews] = useState("")

    useEffect(()=>{
      axios.get("https://counterapi-ywst.onrender.com/")
      .then(res=>{
        setViews(res.data.counter)
      })
    },[])

  return (
    <>
    <p id="Content">{views} views</p>
    </>
  );
}

export default App;

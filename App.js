
import React, {useState} from 'react'
import axios from 'axios';
import Gallery from '../src/Gallery'

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data,setData] = useState([])
  const [Search,setsearch] = useState("")
  const changeHandler = e => {
    setsearch(e.target.value);
  }
  const SubmitHandler = e => {
    e.preventDefault();
    
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${Search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    
  }
  return (
    

    <div>
      <center>
        <h2>Gallery Search</h2>
      <form onSubmit={SubmitHandler}>
        <input size="30" type='text' value={Search} onChange={changeHandler}/><br/><br/>
        <input type='Submit' name='Search'/>
      </form>
      <br />
        {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
      </center>
    </div>
  )
}

export default App

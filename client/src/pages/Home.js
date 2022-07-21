import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((resp) => {
             console.log(resp.data);
            setListOfPosts(resp.data);
        });
     }, []);

  return (
     <div>
    { listOfPosts.map((value, index) => {
        return ( <div key={index} className='post'>
                <div className='title' >  {value.title} </div>
                <div className='body'>{value.postText}</div>
                <div className='footer'>{value.userName}</div>
           </div>
        )
     })}
     </div>
  )
}

export default Home
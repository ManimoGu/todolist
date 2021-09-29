import React, {useState} from 'react'
import Add from '../Addmovies/Add'

const Home = () => {
  
  const [movies,setMovies] = useState([
    {
    id : 1,
    title : 'Invasion',
    description : 'Si-fiction',
    posterURL : 'https://www.youtube.com/watch?v=UPFIY8GO4oE',
    rating : 2,
    image : '/public/Invasion.jpg'
},

{
    id : 2,
    title : 'Wonder',
    description : 'Drama',
    posterURL : 'https://www.youtube.com/watch?v=ngiK1gQKgK8',
    rating : 3,
    image : 'https://static2.tribute.ca/poster/660x980/wonder-121473.jpg'
},

{
    id : 3,
    title : 'Fantastic Beasts',
    description : 'Driver Film',
    posterURL :'https://www.youtube.com/watch?v=ViuDsy7yb8M',
    rating :4,
    image : 'https://m.media-amazon.com/images/I/71IJprrGokL._AC_SY679_.jpg'
}
])


   const AddMovie = (movie) =>{

      setMovies([...movies,movie])

   }
    
  

    return (
        

          <>

            
            <Add New={AddMovie}/>
          

            </>

            
    )
}

export default Home

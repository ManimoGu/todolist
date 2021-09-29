import React, {useState, useRef} from 'react'
import './Add.css'

const Add = (props) => {


    
    const [show,setShow] = useState(false)
    const [movie, setMovie] = useState({title: "", description: "", posterURL: "",  rating: 0, image:""})


    const inputT = useRef();
    const inputR = useRef();
    const inputD = useRef();
    const inputP = useRef();
    const inputU= useRef();

    const handleSubmit = e => {

      //e.preventDefault();
      //props.New(movie)
      

    }


    return (


        <>
            
            <button onClick = {() => setShow(!show) }  className='ajouter'>Add</button>
            {
              
              show && (

                <div className='main'>

                <div className='describe'>

                <h1>Add a movie</h1>
              
                <h4>Title</h4>
                <input type='text' ref={inputT} onChange ={() => setMovie({title : inputT.current.value})}></input>
                <h4>Rating</h4>
                <input type='range' min='0' max='5' ref={inputR} onChange ={() => setMovie({rating : parseInt(inputR.current.value)})}></input>
                <h4>Description</h4>
                <textarea ref={inputD} onChange ={() => setMovie({description : inputD.current.value})} ></textarea>
                <h4>Poster</h4>
                <input type ='text' ref ={inputP} onChange ={() => setMovie({image : inputP.current.value})} ></input>
                <h4>Trailer</h4>
                <input type ='url'  ref={inputU} onChange ={() => setMovie({posterURL : inputU.current.value})}></input>
                <button type='Submit' onClick = {() => {
                  setShow(!show)
                  props.New(movie)
                  console.log(movie)
                  
                  } }>Submit</button>
              
                </div>

                </div>
    

              )

            }
            
        </>

    )
}

export default Add

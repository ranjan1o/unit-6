import { useState } from "react"
import styled from "styled-components"
const A = styled.div`
margin-left: 3rem;
background-color: grey;
width: 80%;
margin: auto;
.heading{
    font-size: large;
    font-weight: bolder;
}
.box{
    margin-top: 20px;
    line-height: 60px;
    margin-left: 15px;
   
}
button{
    background-color: darkgray;
    cursor: pointer;
    border:none;
    padding: 10px;
    font-size: larger;
    margin:1px;
    }
.line{
margin-left: 5px;
width:5px;
background-color: black;
position:absolute;
min-height: 11rem;

}
`
export function ReactPractice({ tweet }) {
  const [show,setShoew]=useState(false)
    return <A>
        <div className="line" onClick={() => {
                setShoew(!show)
          }} >
           
       
        </div>
      
        <div className="box">
            <div>{tweet.author}  { tweet.points}Points {tweet.timestamp}</div>
            <div className="heading">{tweet.body}</div>
            
            <div >
                <button>reply</button>
                <button>forward</button>
                <button>give award</button>
                <button>share report</button>
                <button>save</button>
            </div>
        </div>
    
        {show && (
            <div>{tweet.replies?tweet.replies.map((data) => {
                return <ReactPractice tweet={ data}/>
            }):""}</div>
        )}
        </A>
}
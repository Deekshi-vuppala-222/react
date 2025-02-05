import React from 'react'

const FBCPropEx = (props) => {

  if(props.isMarried==true){
    return <div><h1>{props.username} Good girl</h1>
    {
        props.hobbies.map(hobby=>{
            return <li>{hobby}</li>
        })
    }
    </div>
  }else{
    return <h1>very good</h1>
  }
}

export default FBCPropEx

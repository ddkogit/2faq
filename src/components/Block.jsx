import { useState } from "react";

function Block({question,answer}) {

    
  const [hidden,setHidden] = useState(false);

  
  const handleClick =(e)=>{


        setHidden(!hidden);
        
    
  }


  return (
    <div className="block">
        <div className="question" onClick={(e)=>handleClick(e)}>
            {question}
            <button className="button">
                {hidden?"+":"-"}
            </button>
        </div>

{
    hidden?<></>:

        <div className="answer">
            {answer}
        </div>
}
    </div>
  )
}

export default Block
import { useState } from 'react'
import './CustomePopUps.css';

function CustomePopUps() {
  const [showModelPop, setShowModel] = useState(true);
  const handleShowModel = ()=>{
    if(showModelPop === false)
    {
      setShowModel(true);
    }
    if(showModelPop === true){
      setShowModel(false);
    }
  }
  return (
    <>
      {showModelPop ? (
      <div className='popup_header'>
        <div style={{backgroundColor:"black"}}>
          <button className='btn btn-primary' onClick={()=> handleShowModel()}></button>
          <input type='text' placeholder='name'></input>
          <input type='text' placeholder='name'></input>
          <input type='text' placeholder='name'></input>
          <input type='text' placeholder='name'></input>


        </div>
    </div>
      ):("")}
      
    </>
  
  )
}

export default CustomePopUps

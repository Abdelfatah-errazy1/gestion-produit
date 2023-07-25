import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateProduit = () => {
  const [state,setState]=useState({
    _id:'',
    quantite:'',
    emplacement:'',
  })
  const handleState=(event)=>{
    const {name,value}=event.target
    setState({...state,[name]:value})
  }
  const navigate=useNavigate()
  const onSubmit=async(e)=>{
    e.preventDefault()
try{
 const res=  await axios.post('http://localhost:5000/stocks',state)
 
 navigate('/')
}catch(err){
  console.log(err)
}

  }
    return (<div className="d-flex align-items-center flex-column " style={{ height:'450px' }}>
 
    <div className="subtitle">
            <p> Create </p>
    </div>
  
            <form className=" "   style={{ width:'50%' }}   onSubmit={onSubmit} >
               <div className="mb-3">
                <label forhtml="_id" className="form-label">id produit </label>
                <input type="text" className="form-control " name='_id' id="_id"   onChange={handleState } />
              </div>
               <div className="mb-3">
                <label forhtml="quantite" className="form-label">quantite</label>
               
                  <input type="number" className="form-control mb-1" name='quantite' onChange={handleState } value={state.quantite}  />

              </div>
               <div className="mb-3">
                <label forhtml="emplacement" className="form-label">emplacement</label>
                  <input type="text" className="form-control mb-1" name='emplacement'  onChange={handleState }value={state.emplacement}    />

              
              </div>
              
              
               <div className="mb-3">
                <input type="submit" className="btn btn-success"  value='Create produit' />
              </div>
              
            </form>
      </div>       
    )
  
}

export default CreateProduit
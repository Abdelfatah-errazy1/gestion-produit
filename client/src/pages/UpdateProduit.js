import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const UpdateProduit = () => {
  const [state,setState]=useState({
    _id:'',
    quantite:'',
    emplacement:'',
  })
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/stocks/${id}`).then(res=>setState(res.data)).catch(err=>console.log(err))

},[])

  const handleState=(event)=>{
    const {name,value}=event.target
    setState({...state,[name]:value})
  }
  const navigate=useNavigate()
  const onSubmit=async(e)=>{
    e.preventDefault()
try{
 const res=  await axios.put(`http://localhost:5000/stocks/${id}`,state)
 
 navigate('/')
}catch(err){
  console.log(err)
}

  }
    return (<div className="d-flex align-items-center flex-column" style={{ height:'450px' }}>
 
    <div className="subtitle">
            <p> modifier le produit <span style={{ color:'green' }}>{state._id}</span>  </p>
    </div>
  
            <form className=" "   style={{ width:'50%' }}   onSubmit={onSubmit} >
              
               <div className="mb-3">
                <label forhtml="quantite" className="form-label">quantite</label>
               
                  <input type="number" className="form-control mb-1" name='quantite' onChange={handleState } value={state.quantite}  />

              </div>
               <div className="mb-3">
                <label forhtml="emplacement" className="form-label">emplacement</label>
                  <input type="text" className="form-control mb-1" name='emplacement'  onChange={handleState }value={state.emplacement}    />

              
              </div>
              
              
               <div className="mb-3">
                <input type="submit" className="btn btn-success"  value='modifier produit' />
              </div>
              
            </form>
      </div>       
    )
  
}

export default UpdateProduit
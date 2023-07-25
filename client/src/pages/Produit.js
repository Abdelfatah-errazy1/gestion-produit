import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


const Produit = () => {
  const [Produit,setProduit]=useState({})
  const {id}=useParams()
 useEffect(()=>{
  axios.get(`http://localhost:5000/stocks/${id}`).then(res=>setProduit(res.data))
 },[])
 
 const navigate=useNavigate()
 const deleteFunction=()=>{
    axios.delete(`http://localhost:5000/stocks/${id}`).then(res=>navigate('/'))
 }
  return (
    <div  className="card card-shadow" style={{ margin:'130px auto' }}>
                        <div className="card-header card-image">
                            {/* <img alt='' src="./img/Porkchop.webp" /> */}
                        </div>
                        <div className="card-body" >
                            <h3>id Produit : <strong>{Produit._id}</strong></h3>
                            <h3>quantite: <strong>{Produit.quantite}</strong></h3>
                            <h3>emplacement : <strong>{Produit.emplacement}</strong></h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success m-1" onClick={()=> navigate(`/stocks/update/${Produit._id}`)}>modifier</button>
                            <button className="btn btn-danger m-1" onClick={deleteFunction}>suprimer</button>
                        </div>
                    </div>
  )
}

export default Produit
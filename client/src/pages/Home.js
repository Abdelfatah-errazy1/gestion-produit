import React, { useState,useEffect } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [Stocks,setStocks]=useState([])
    const [searchValue,setSearchValue]=useState([])

    useEffect(()=>{
           axios.get('http://localhost:5000/').then(res=>setStocks(res.data)).catch(err=>console.log(err))
 
    },[])
    
  const navigate=useNavigate()
  const search = () => {
    axios.get(`http://localhost:5000/stocks?_id=${searchValue}`).then(res=>setStocks(res.data)).catch(err=>console.log(err))

  }
  return (<>
   <div className="header">
    
    <div className="subtitle text-primary bold">Find a Produit</div>
          <div className="search-wrapper">
            
              <input type="text" name=""  id="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder="chercher pour un produit par id !" />
              <input type="button"  className='btn btn-primary'  onClick={search} id="search" value='chercher'  />
              
          </div>
   </div>
          <div className="card-grid" >
            <div className="food-list" id="food-list">
                    <p id="none" style={{ display:" none" }}>Sorry, the food you were looking for was not available.</p>
                  
                    {Stocks.map((ele,index)=>{
                        return  <div key={index} className="card card-shadow">
                        <div className="card-header card-image">
                            {/* <img alt='' src="./img/Porkchop.webp" /> */}
                        </div>
                        <div className="card-body" >
                            <h3>id Produit : <strong>{ele._id}</strong></h3>
                            <h3>quantite: <strong>{ele.quantite}</strong></h3>
                            <h3>emplacement : <strong>{ele.emplacement}</strong></h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={()=> navigate(`/stocks/${ele._id}`)}>check detail</button>
                        </div>
                    </div>
                    })}
            </div> 
            
        </div>
  </>
  )
}

export default Home
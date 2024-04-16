import React, { useState } from 'react'

const App = () => {


  const [itemname ,setitemname] = useState("")
  const [itemsprice ,setitemsprice] = useState("")
  const[data ,setdata] = useState([])
  const [search,setsearch] = useState('')


    function event(e){
      setitemname(e.target.value)
    }

    function events(e){
      setitemsprice(e.target.value)
    }

    
    const handleevent=(e)=>{
      e.preventDefault();

      setdata((prev) => [
        ...prev,
        { id :Date.now(), itemName: itemname, itemsprice: itemsprice },
      ]);

      setitemname("")
      setitemsprice('')
    
    }


    const deleteitem=(id)=>{
      setdata(data.filter((item)=>{
        return item.id!==id;
      }))
    }

    const searchitem=()=>{
      if(itemname===itemname || itemsprice===itemsprice){
        return console.log("true");
      }else{      
       return console.log("false");
      }
    }

  return (
    <>

  <div className=' py-[4rem] '>

  <h2 className='text-center py-[2rem] text-[42px] font-bold'>Expanse Tracker</h2>
    
    <div className='flex justify-center items-center gap-5 border-black'>
  
  
    <div className=' flex justify-center w-[280px] h-[30vh] items-center shadow-2xl'>
  
      <form className=' flex flex-col ' onSubmit={handleevent} >
  
      <label className='text-[20px]'>Item Name</label>
      <input  type="text" value={itemname} onChange={event} className='border-black rounded-2xl py-1 px-2 border-[1px] ' />
  
      <label className='text-[20px]'>Item Price</label>
      <input type="number" value={itemsprice} onChange={events} className='border-black rounded-2xl py-1 px-2 border-[1px] '  />
  
      <button className='rounded-full border-[2px] my-[9px] text-[19px] w-[100px] border-black text-semibold ' >  Add</button>
  
      </form>     
  
      </div>
  
    </div>

  </div>

    <div className=' text-black  w-[20%]  mx-auto mb-[3rem]' >
      <form action="submit" className='px-4 ' >
      <input className='px-6 rounded-2xl py-2 border-black border-[1px]' type="text" placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)} />
      </form>
      <button className='border-[2px] rounded-2xl w-[60%] py-[7px] px-[3px] mt-[9px] ml-[2.4rem] border-black'onClick={searchitem} >Click Now</button>
    </div>

    <div className=' '>
    {data.map(({id ,itemName,itemsprice})=>{
      return (
      <ul className='w-[70%] mx-auto h-[100px] rounded-[129px] my-[10px] justify-around items-center flex flex-row border-[2px] border-black text-black'key={id}>
        <li>{id}</li>
        <li>{itemName}</li>
        <li>{itemsprice}</li>
        <button className='rounded-2xl py-[10px] px-[20px] mx-[4px] bg-black text-white' onClick={()=>{deleteitem(id)}}>Delete</button>
      </ul>
      )
    })}
    </div>
    
    </>
  )
}

export default App;

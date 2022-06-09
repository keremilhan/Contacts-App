import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: ""} 

export default function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues);
  
  useEffect(()=>{
    setForm(initialFormValues)
  }, [contacts])  

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(form.fullname === "" || form.phone_number === ""){
      return false
    }else{
      addContact([...contacts,form])
      console.log(form);
      
    }
    
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='input'>
          <input 
            onChange={onChangeInput} 
            name='fullname' 
            placeholder='Full Name'
            value={form.fullname}/>

        </div>

        <div className='input'>
          <input 
            onChange={onChangeInput} 
            name='phone_number' 
            placeholder='Phone Number' 
            value={form.phone_number}/>
        </div>

        <div className='btn'>
          <button type='submit'>Add</button> 
        </div>

      </form>


    </>

  )
}

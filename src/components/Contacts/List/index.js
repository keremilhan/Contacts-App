import { useState } from 'react'

export default function List({contacts}) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=> {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLowerCase());
    })
  })

  console.log("filtered", filtered);

  return (

    <div>

      <input placeholder='Search' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>

      <ul className='list'>
        {filtered.map((contact, i)=> (
          <li>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
          ))}
      </ul>
      <p id='total-contacts'>{`Total Contacts: (${filtered.length})`}</p>
    </div>
  )
}


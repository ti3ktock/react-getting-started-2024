import { useState } from "react"


function MyInputPage() {
  const [name, setName] = useState()
  



  return <>
    <h1>My Form Input Page</h1>
    <form>
      <label>Enter your name</label>
      <input value={name} onChange={(event) => setName(event.target.value)} />{/*doublebiding*/}
      <p>My new value: { name}</p>
      
    </form>
  
  </>
}

export default MyInputPage

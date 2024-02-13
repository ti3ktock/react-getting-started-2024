import { Link } from "react-router-dom"


function MyNav() {
  return (
    <nav>
    <Link to="/">MyPageComponent</Link> |&nbsp;
      <Link to="/other">MyOtherPageComponent</Link> |&nbsp;
      <Link to="/my-jsx-page" >My JSX Page</Link> |&nbsp;
      <Link to="/my-use-state-page">My Use State Page</Link> |&nbsp;
      <Link to="/my-form-input-page"> My Form Input Page</Link>
      

  </nav>)
  
}

export default MyNav